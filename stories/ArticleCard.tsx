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
      <div>
        <div className="flex flex-row w-full duration-300 hover:scale-105 hover:cursor-pointer">
          <div className="pr-2 w-2/5">
            <Image
              className="rounded"
              src={`${thumbnail}?fit=crop&crop=edge&w=302&h=125`}
              width="1207"
              height="500"
              layout="responsive"
              objectFit="cover"
              alt="picture of mountain"
              lazyBoundary="400px"
              loading="lazy"
            />
          </div>
          <div className="w-3/5">
            <div className="pl-2 text-xl font-bold  mobile:text-base">
              {title}
            </div>
            <div className="pt-1 pl-2 text-zinc-400 mobile:text-xs">{`${_date.getFullYear()}年${
              _date.getMonth() + 1
            }月${_date.getDate()}日`}</div>
          </div>
        </div>
        <div className="mt-3 w-full h-px bg-zinc-600"></div>
      </div>
    </Link>
  );
};
