import React from "react";
import Image from "next/image";
import Link from "next/link";
import { join } from "path";

export const ArticleCard: React.FC<{
  id: string;
  thumbnail: string;
  title: string;
  date: string;
}> = ({ id, thumbnail, title, date }) => {
  const _date = new Date(date);
  return (
    <Link href={join("/", id)}>
      <div className="w-full flex flex-col duration-300 hover:scale-105 hover:cursor-pointer">
        <Image
          className="rounded-lg"
          src={thumbnail}
          width="809"
          height="500"
          layout="responsive"
          objectFit="cover"
          alt="picture of mountain"
        />
        <div className="text-white mobile:text-lg text-xl pt-2">{title}</div>
        <div className="text-gray-400">{`${_date.getFullYear()}年${
          _date.getMonth() + 1
        }月${_date.getDate()}日`}</div>
      </div>
    </Link>
  );
};
