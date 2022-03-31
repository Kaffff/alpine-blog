import React, { useState } from "react";
import Link from "next/link";
import SearchIcon from "../public/search.svg";
import CloseIcon from "../public/close.svg";
import { Tags } from "../pages/[id]";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className="w-full bg-gray-900">
      <div className="py-8 flex justify-between">
        <div className="pl-10"></div>
        <p className="text-white  text-center  text-3xl hover:cursor-pointer">
          <Link href="/">b o t t a ヤマレポ</Link>
        </p>
        <div className="pr-3 self-center">
          <div
            className="flex items-center outline-none"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            {isModalOpen ? (
              <CloseIcon className="text-gray-300" />
            ) : (
              <SearchIcon className="text-gray-300" />
            )}
          </div>
        </div>
      </div>
      {isModalOpen ? (
        <div className="flex flex-col duration-300 justify-center border-t border-gray-700 bg-gray-800 px-12 py-6">
          <input
            type="text"
            placeholder="記事検索"
            className="py-1 px-4 my-1 rounded-md focus:outline-none"
          />
          <Tags tags="秩父 飯能 南アルプス 北アルプス" />
        </div>
      ) : (
        <div className="px-12 border-gray-700"></div>
      )}
      <ul className="flex flex-nowrap justify-center border-y border-gray-700 text-gray-50 bg-gray-800">
        <Link href="/">
          <li className="w-44 text-center py-1  transition delay-75 ease-out duration-500 hover:bg-emerald-500 hover:cursor-pointer">
            Home
          </li>
        </Link>
        <Link href="/history">
          <li className="w-44 text-center py-1  transition duration-500 hover:bg-emerald-500 hover:cursor-pointer">
            登山年表
          </li>
        </Link>
        <Link href="/list">
          <li className="w-44 text-center py-1  transition duration-500 hover:bg-emerald-500 hover:cursor-pointer">
            山の一覧
          </li>
        </Link>
      </ul>
    </header>
  );
};
