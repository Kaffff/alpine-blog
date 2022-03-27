import React from "react";
import Image from "next/image";

export const Article: React.FC<{
  thumbnail: string;
  title: string;
  date: string;
}> = ({ thumbnail, title, date }) => (
  <div className="w-full flex flex-col duration-300 hover:scale-105 hover:cursor-pointer ">
    <Image
      className="rounded-lg"
      src="/test_mountain.jpeg"
      width="200"
      height="150"
      objectFit="cover"
      alt="picture of mountain"
    />
    <div className="text-white text-lg pt-2">{title}</div>
    <div className="text-gray-400">{date}</div>
  </div>
);
