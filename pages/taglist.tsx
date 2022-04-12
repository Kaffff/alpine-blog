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
  props.contents.map((content) => (tags = tags.concat(" ", content.tag)));

  return (
    <div className="flex flex-col h-full min-h-screen ">
      <Header />
      <main className="grow place-self-center px-6 pt-14 pb-32 max-w-5xl">
        <div className="pb-12 text-3xl text-center  hover:cursor-default mobile:text-2xl">
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
