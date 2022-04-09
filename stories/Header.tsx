import React, { useRef, useState } from "react";
import Link from "next/link";
import SearchIcon from "../public/search.svg";
import CloseIcon from "../public/close.svg";
import { Tags } from "../pages/[id]";
import Router from "next/router";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <header className="w-full bg-gray-900">
      <div className="flex justify-between py-8">
        <div className="pl-10"></div>
        <Link href="/" passHref>
          <p className="text-3xl font-bold text-center   text-white hover:cursor-pointer">
            b o t t a ヤマレポ
          </p>
        </Link>
        <div className="self-center pr-3">
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
        <div className="flex flex-col justify-center py-6 px-12 bg-gray-800 border-t border-gray-700 duration-300">
          <input
            autoFocus
            ref={inputRef}
            onKeyDown={(e) => {
              if (e.keyCode == 13) {
                const qs = inputRef.current?.value.split(" ");
                const query = qs?.map((q) => `q=${q}`).join("&");
                if (query) Router.push(`/?${query}`);
              }
            }}
            type="text"
            placeholder="記事検索"
            className="py-1 px-4 my-1 rounded-md focus:outline-none"
          />
          <Tags tags="秩父 飯能 南アルプス 北アルプス" />
        </div>
      ) : (
        <div className="px-12 border-gray-700"></div>
      )}
      <ul className="flex flex-nowrap justify-center text-gray-50 bg-gray-800 border-y border-gray-700">
        <Link href="/" passHref>
          <li className="py-1 w-44 text-center  hover:bg-emerald-500 transition duration-500 ease-out delay-75 hover:cursor-pointer">
            Home
          </li>
        </Link>
        <Link href="/history" passHref>
          <li className="py-1 w-44 text-center  hover:bg-emerald-500 transition duration-500 hover:cursor-pointer">
            登山年表
          </li>
        </Link>
        <Link href="/taglist" passHref>
          <li className="py-1 w-44 text-center  hover:bg-emerald-500 transition duration-500 hover:cursor-pointer">
            タグ一覧
          </li>
        </Link>
      </ul>
    </header>
  );
};
