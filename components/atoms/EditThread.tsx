import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  threadId: string;
  currentUserId: string;
  authorId: string;
}

const EditThread = ({ threadId, currentUserId, authorId }: Props) => {
  if (currentUserId !== authorId) return null;

  return (
    <Link href={`/edit-thread/${JSON.parse(threadId)}`}>
      <Image
        src="/assets/edit.svg"
        alt="edit thread"
        width={18}
        height={18}
        className="cursor-pointer object-contain"
      />
    </Link>
  );
};

export default EditThread;
