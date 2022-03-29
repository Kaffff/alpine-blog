import { GetStaticPropsContext, NextPage } from "next";
import React from "react";
import { client, Content, ResFromMicroCMS } from ".";
import { Footer } from "../stories/Footer";
import { Header } from "../stories/Header";
import { join } from "path";
import Image from "next/image";

const Tags: React.FC<{ tags: string }> = ({ tags }) => {
  const taglist = tags.trimEnd().split(new RegExp(" |　"));

  return (
    <div className=" flex flex-wrap gap-2 justify-center">
      {Array.from(new Set(taglist)).map((name) => (
        <Tag key={name} name={name} />
      ))}
    </div>
  );
};

const Tag: React.FC<{ name: string }> = ({ name }) => {
  return (
    <button className="text-white text-sm inline-block border px-2 py-1 rounded-sm hover:border-emerald-200 hover:text-emerald-200 ">
      # {name}
    </button>
  );
};

const Article: NextPage<Content> = (content) => {
  const date = new Date(content.date);
  return (
    <div className="h-full flex flex-col min-h-screen font-shippori">
      <Header />
      <Image
        className="opacity-80 duration-500 hover:scale-110 hover:opacity-100"
        src={content.thumbnail.url}
        width="800"
        height="500"
        layout="responsive"
      ></Image>
      <main className="flex-grow bg-gray-900 place-self-center max-w-7xl px-6 pb-32">
        <div className=" text-white text-4xl text-center pt-10 pb-4">
          {content.title}
        </div>
        <div className="pb-2 text-white text-sm text-center">{`${date.getFullYear()}年${
          date.getMonth() + 1
        }月${date.getDate()}日`}</div>
        <Tags tags={content.tag} />
        <div
          className="text-gray-100 pt-6 text-justify"
          dangerouslySetInnerHTML={{ __html: content.body }}
        ></div>
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const data: ResFromMicroCMS = await client.get({
    endpoint: "blog",
    queries: {
      fields: ["id"],
      limit: 100,
    },
  });
  const paths = data.contents.map((content) => join("/", content.id));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>
) {
  const content: Content = await client.get({
    endpoint: "blog",
    contentId: context.params?.id,
  });

  return {
    props: content,
  };
}

export default Article;
