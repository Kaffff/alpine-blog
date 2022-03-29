import React from "react";
import Image from "next/image";
import Link from "next/link";
import { join } from "path";

export const ArticleCard: React.FC<{
  id: string;
  thumbnail: string;
  title: string;
  publishedAt: string;
}> = ({ id, thumbnail, title, publishedAt }) => {
  const date = new Date(publishedAt);
  return (
    <Link href={join("/", id)}>
      <div className="w-full flex flex-col duration-300 hover:scale-105 hover:cursor-pointer ">
        <Image
          className="rounded-lg"
          src={thumbnail}
          width="200"
          height="150"
          objectFit="cover"
          alt="picture of mountain"
        />
        <div className="text-white text-lg pt-2">{title}</div>
        <div className="text-gray-400">{`${date.getFullYear()}年${
          date.getMonth() + 1
        }月${date.getDate()}日`}</div>
      </div>
    </Link>
  );
};
