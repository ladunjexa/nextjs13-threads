"use server";

import { FilterQuery, SortOrder } from "mongoose";
import { revalidatePath } from "next/cache";

import Community from "../models/community.model";
import Thread from "../models/thread.model";
import User from "../models/user.model";

import { connectToDB } from "../mongoose";

export async function followUser({
  followerId,
  followedId,
  path,
}: {
  followerId: string;
  followedId: string;
  path: string;
}) {
  try {
    connectToDB();

    const follower = await User.findOne({ id: followerId });

    if (!follower) {
      throw new Error("Follower not found");
    }

    const followed = await User.findOne({ id: followedId });

    if (!followed) {
      throw new Error("Followed not found");
    }

    const isAlreadyFollowed = await isUserFollowing(followerId, followedId);

    if (isAlreadyFollowed) {
      follower.following.pull({
        user: followed._id,
      });
    } else {
      follower.following.push({
        user: followed._id,
      });
    }

    await follower.save();

    if (isAlreadyFollowed) {
      followed.followers.pull({
        user: follower._id,
      });
    } else {
      followed.followers.push({
        user: follower._id,
      });
    }

    await followed.save();

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to follow user: ${error.message}`);
  }
}

export async function isUserFollowing(followerId: string, followedId: string) {
  try {
    connectToDB();

    const followed = await User.findOne({ id: followedId });

    const isFollowing = await User.findOne({
      id: followerId,
      following: { $elemMatch: { user: followed._id } },
    });

    return !!isFollowing;
  } catch (error: any) {
    throw new Error(`Failed to check if user is followed: ${error.message}`);
  }
}

export async function fetchUser(userId: string) {
  try {
    connectToDB();

    return await User.findOne({ id: userId }).populate({
      path: "communities",
      model: Community,
    });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

interface Params {
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
}

export async function updateUser({
  userId,
  bio,
  name,
  path,
  username,
  image,
}: Params): Promise<void> {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        name,
        bio,
        image,
        onboarded: true,
      },
      { upsert: true }
    );

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

export async function fetchUserPosts(userId: string) {
  try {
    connectToDB();

    // Find all threads authored by the user with the given userId
    const threads = await User.findOne({ id: userId }).populate({
      path: "threads",
      model: Thread,
      populate: [
        {
          path: "community",
          model: Community,
          select: "name id image _id", // Select the "name" and "_id" fields from the "Community" model
        },
        {
          path: "children",
          model: Thread,
          populate: {
            path: "author",
            model: User,
            select: "name image id", // Select the "name" and "_id" fields from the "User" model
          },
        },
      ],
    });
    return threads;
  } catch (error) {
    console.error("Error fetching user threads:", error);
    throw error;
  }
}

export async function getUserFollowersIds(userId: string, key: string) {
  try {
    connectToDB();

    const user = await User.findOne({ id: userId });

    const followersIds = user[key].map((folower: any) => folower.user);

    return followersIds;
  } catch (error: any) {
    throw new Error(`Failed to fetch user followers: ${error.message}`);
  }
}

export async function fetchUsersByField(userId: string, field: string) {
  try {
    connectToDB();

    const user = await User.findOne({ id: userId });

    const usersIds = user[field].map((user: any) => user.user);

    const users = await User.find({ _id: { $in: usersIds } });

    return users;
  } catch (error: any) {
    throw new Error(`Failed to fetch users: ${error.message}`);
  }
}

// Almost similar to Thead (search + pagination) and Community (search + pagination)
export async function fetchUsers({
  userId,
  userIds,
  searchTerm = "",
  pageNumber = 1,
  pageSize = 20,
  sortBy = "desc",
}: {
  userId: string | null;
  userIds?: string[];
  searchTerm?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: SortOrder;
}) {
  try {
    connectToDB();

    // Calculate the number of users to skip based on the page number and page size.
    const skipAmount = (pageNumber - 1) * pageSize;

    // Create a case-insensitive regular expression for the provided search string.
    const regex = new RegExp(searchTerm, "i");

    // Create an initial query object to filter users.
    const query: FilterQuery<typeof User> = {
      id: { $ne: userId }, // Exclude the current user from the results.
    };

    if (userIds) {
      query._id = { $in: userIds };
    }

    // If the search string is not empty, add the $or operator to match either username or name fields.
    if (searchTerm.trim() !== "") {
      query.$or = [
        { username: { $regex: regex } },
        { name: { $regex: regex } },
      ];
    }

    // Define the sort options for the fetched users based on createdAt field and provided sort order.
    const sortOptions = { createdAt: sortBy };

    const usersQuery = User.find(query)
      .sort(sortOptions)
      .skip(skipAmount)
      .limit(pageSize);

    // Count the total number of users that match the search criteria (without pagination).
    const totalUsersCount = await User.countDocuments(query);

    const users = await usersQuery.exec();

    // Check if there are more users beyond the current page.
    const isNext = totalUsersCount > skipAmount + users.length;

    return { users, isNext };
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function getActivity(userId: string) {
  try {
    connectToDB();

    const [userThreads, user] = await Promise.all([
      Thread.find({ author: userId }),
      User.findOne({ _id: userId }),
    ]);

    const childThreadIds = userThreads.flatMap(
      (userThread) => userThread.children
    );
    const reactions = userThreads.flatMap((userThread) => userThread.reactions);

    const [reactionsUsers, followersUsers] = await Promise.all([
      User.find({ _id: { $in: reactions.map((reaction) => reaction.user) } }),
      User.find({
        _id: {
          $in: user.followers.map((follower: { user: any }) => follower.user),
        },
      }),
    ]);

    const reactionsData = reactions.map((reaction, index) => {
      const reactingUser = reactionsUsers.find(
        (user) => user._id.toString() === reaction.user.toString()
      );

      if (reactingUser._id.equals(userId)) return null;
      return {
        author: {
          name: reactingUser.name,
          username: reactingUser.username,
          image: reactingUser.image,
          _id: reactingUser._id,
          id: reactingUser.id,
        },
        createdAt: reaction.createdAt,
        parentId: userThreads[0]._id.toString(),
        activityType: "reaction",
      };
    });

    const followersData = user.followers.map(
      (follower: { user: { toString: () => any }; createdAt: any }) => {
        const followingUser = followersUsers.find(
          (user) => user._id.toString() === follower.user.toString()
        );

        if (followingUser._id.equals(userId)) return null;
        return {
          author: {
            name: followingUser.name,
            username: followingUser.username,
            image: followingUser.image,
            _id: followingUser._id,
            id: followingUser.id,
          },
          createdAt: follower.createdAt,
          activityType: "follow",
        };
      }
    );

    const [replies, reactionsAndFollowers] = await Promise.all([
      Thread.find({
        _id: { $in: childThreadIds },
        author: { $ne: userId },
      }).populate({
        path: "author",
        model: User,
        select: "name username image _id",
      }),
      reactionsData.concat(followersData),
    ]);

    const activity = [...replies, ...reactionsAndFollowers]
      .filter((i) => i !== null)
      .sort((a, b) => b?.createdAt - a?.createdAt);

    return activity;
  } catch (error) {
    console.error("Error fetching activity: ", error);
    throw error;
  }
}
