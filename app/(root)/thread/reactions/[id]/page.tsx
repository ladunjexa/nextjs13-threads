import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

import Comment from "@/components/forms/Comment";
import ThreadCard from "@/components/cards/ThreadCard";

import { fetchUser } from "@/lib/actions/user.actions";
import {
  fetchThreadById,
  getReactedUsersByThread,
  isThreadReactedByUser,
} from "@/lib/actions/thread.actions";
import UserCard from "@/components/cards/UserCard";

export const revalidate = 0;

async function page({ params }: { params: { id: string } }) {
  if (!params.id) return null;

  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const thread = await fetchThreadById(params.id);

  const reactions = await getReactedUsersByThread(thread._id);

  const reactionState = await isThreadReactedByUser({
    threadId: thread._id,
    userId: userInfo._id,
  });

  return (
    <section className="relative">
      <div>
        <ThreadCard
          id={thread._id}
          currentUserId={user.id}
          parentId={thread.parentId}
          content={thread.text}
          author={thread.author}
          community={thread.community}
          createdAt={thread.createdAt}
          comments={thread.children}
          reactions={reactions.users}
          reactState={reactionState}
        />
      </div>

      <div className="mt-7">
        <Comment
          threadId={params.id}
          currentUserImg={user.imageUrl}
          currentUserId={JSON.stringify(userInfo._id)}
        />
      </div>

      <div className="mt-10">
        <h1 className="head-text mb-10">People who likes</h1>
        {thread.reactionsCount === 0 ? (
          <p className="no-result">No users found</p>
        ) : (
          <>
            {reactions.users.map((reaction: any) => (
              <UserCard
                key={reaction._id}
                id={reaction._id}
                name={reaction.name}
                username={reaction.username}
                imgUrl={reaction.image}
                personType="User"
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default page;
