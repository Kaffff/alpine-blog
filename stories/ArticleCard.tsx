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
    <Link href={join("/", id)} passHref>
      <div className="flex flex-col w-full duration-300 hover:scale-105 hover:cursor-pointer">
        <Image
          className="rounded-xl"
          src={`${thumbnail}?fit=crop&crop=edge&w=302&h=125`}
          width="1207"
          height="500"
          layout="responsive"
          objectFit="cover"
          alt="picture of mountain"
          lazyBoundary="400px"
        />
        <div className="pt-2 text-lg text-center text-white mobile:text-sm">
          {title}
        </div>
        <div className="text-center text-gray-400 mobile:text-xs">{`${_date.getFullYear()}年${
          _date.getMonth() + 1
        }月${_date.getDate()}日`}</div>
      </div>
    </Link>
  );
};
