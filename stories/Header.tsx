import React from "react";
import Link from "next/link";

export const Header = () => (
  <header className="w-full bg-gray-900">
    <div className="flex-col">
      <p className="flex justify-center py-8 text-white text-3xl hover:cursor-pointer">
        <Link href="/">b o t t a ヤマレポ</Link>
      </p>

      <ul className="flex flex-nowrap justify-center border-y border-gray-700 text-gray-50 bg-gray-800">
        <Link href="/">
          <li className="w-44 text-center py-1  transition duration-500 hover:bg-emerald-500 hover:cursor-pointer">
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
    </div>
  </header>
);
