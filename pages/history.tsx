import { NextPage } from "next";
import React from "react";
import { client, HomeContentsResponce } from ".";
import { Footer } from "../stories/Footer";
import { Header } from "../stories/Header";
import Link from "next/link";
import { join } from "path";

const History: NextPage<HomeContentsResponce> = (props) => {
  return (
    <div className="flex flex-col h-full min-h-screen font-shippori">
      <Header />
      <main className="grow place-self-center px-10 pt-14 pb-32 max-w-5xl bg-gray-900 mobile:px-6">
        <div className="pb-20 text-3xl text-center text-white hover:cursor-default mobile:text-2xl">
          登山年表
        </div>
        <div className="text-white">
          {props.contents.map((content) => {
            const date = new Date(content.date);
            return (
              <Link key={content.id} href={join("/", content.id)} passHref>
                <div className="py-2 hover:text-blue-400 hover:cursor-pointer">{`・ ${date.getFullYear()}年${
                  date.getMonth() + 1
                }月${date.getDate()}日 ${content.title}`}</div>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const data: HomeContentsResponce = await client.get({
    endpoint: "blog",
    queries: {
      fields: ["id", "title", "thumbnail", "date"],
      limit: 100,
      orders: "-date",
    },
  });
  return {
    props: data,
  };
}

export default History;
