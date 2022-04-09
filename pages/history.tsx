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
      <main className="grow place-self-center px-10 pt-14 pb-32 max-w-7xl bg-gray-900 mobile:px-6">
        <div className="pb-12 text-3xl text-center text-white hover:cursor-default mobile:text-2xl">
          登山年表
        </div>
        <div className="text-white">
          {props.contents.map((content) => {
            const date = new Date(content.date);
            return (
              <div key={content.id} className="flex  align-top">
                <div className="pt-1 pr-3 w-1/3  text-lg font-bold text-right mobile:text-base">
                  {`${date.getFullYear()}/${
                    date.getMonth() >= 9
                      ? date.getMonth() + 1
                      : "0" + (date.getMonth() + 1)
                  }/${
                    date.getDate() >= 9 ? date.getDate() : "0" + date.getDate()
                  }`}
                </div>
                <div className="flex flex-col items-center">
                  <div className="my-2 w-4 h-4 bg-emerald-200 rounded-full border-2  border-gray-200"></div>
                  <div className="grow w-px  h-fit bg-gray-200"></div>
                </div>
                <Link href={join("/", content.id)} passHref>
                  <div className="pt-1 pb-10 pl-3 w-2/3 text-lg  hover:text-blue-400  hover:cursor-pointer mobile:text-base">
                    {content.title}
                  </div>
                </Link>
              </div>
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
