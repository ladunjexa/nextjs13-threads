"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { followUser } from "@/lib/actions/user.actions";
import { usePathname } from "next/navigation";

interface Props {
  userId: string;
  currentUserId: string;
  isFollowing?: boolean;
}

const FollowUser = ({ userId, currentUserId, isFollowing = false }: Props) => {
  const pathname = usePathname();

  const handleClick = async () => {
    await followUser({
      followerId: currentUserId,
      followedId: userId,
      path: pathname,
    });
  };

  return (
    <Button size="sm" className="follow-card_btn" onClick={handleClick}>
      <div className="flex cursor-pointer gap-3 rounded-lg">
        <Image src="/assets/user.svg" alt="logout" width={16} height={16} />

        <p className="text-light-2 max-sm:hidden">
          {isFollowing ? "Unfollow" : "Follow"}
        </p>
      </div>
    </Button>
  );
};

export default FollowUser;
