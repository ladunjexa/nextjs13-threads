import mongoose from "mongoose";

const followerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const communitySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: String,
  bio: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  followers: [followerSchema],
});

communitySchema.virtual("membersCount").get(function () {
  return this.members.length;
});

communitySchema.virtual("threadsCount").get(function () {
  return this.threads.length;
});

communitySchema.virtual("followersCount").get(function () {
  return this.followers.length;
});

const Community =
  mongoose.models.Community || mongoose.model("Community", communitySchema);

export default Community;
