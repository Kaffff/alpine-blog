import { NextPage } from "next";
import React from "react";
import { Footer } from "../stories/Footer";
import { Header } from "../stories/Header";
import { Tags } from "./[id]";
import { client } from "./index";

const TagList: NextPage<{
  contents: Array<{ tag: string }>;
  totalCount: number;
  offset: number;
  limit: number;
}> = (props) => {
  let tags = "";
  props.contents.map((content) => (tags += content.tag));

  return (
    <div className="flex flex-col h-full min-h-screen font-shippori">
      <Header />
      <main className="grow place-self-center px-6 pt-14 pb-32 max-w-5xl bg-gray-900">
        <div className="pb-20 text-3xl text-center text-white hover:cursor-default mobile:text-2xl">
          タグ一覧
        </div>
        {<Tags tags={tags} />}
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const data = await client.get({
    endpoint: "blog",
    queries: {
      fields: ["tag"],
      limit: 100,
    },
  });
  return {
    props: data,
  };
}

export default TagList;