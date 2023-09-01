"use client";

import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { addReactToThread } from "@/lib/actions/thread.actions";

interface Props {
  threadId: string;
  currentUserId: string;
  interactState?: boolean;
  isComment?: boolean;
  parentId?: string | null;
}

const ReactThread = ({
  threadId,
  currentUserId,
  interactState = false,
  isComment = false,
  parentId = null,
}: Props) => {
  const pathname = usePathname();

  const handleClick = async () => {
    await addReactToThread({
      threadId,
      userId: currentUserId,
      path: pathname,
    });
  };

  return (
    <Image
      src={`/assets/heart-${interactState ? "filled" : "gray"}.svg`}
      alt="heart"
      width={24}
      height={24}
      className="cursor-pointer object-contain"
      onClick={handleClick}
    />
  );
};

export default ReactThread;
