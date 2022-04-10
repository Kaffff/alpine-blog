import { GetStaticPropsContext, NextPage } from "next";
import React from "react";
import { client, Content, HomeContentsResponce } from ".";
import { Footer } from "../stories/Footer";
import { Header } from "../stories/Header";
import { join } from "path";
import Image from "next/image";
import Router from "next/router";

export const Tags: React.FC<{ tags: string }> = ({ tags }) => {
  const taglist = tags.trimEnd().split(new RegExp(" |　"));
  let tagMap = new Map<string, number>();
  taglist.map((tag) => {
    if (tag) {
      if (tagMap.has(tag)) {
        tagMap.set(tag, tagMap.get(tag)! + 1);
      } else {
        tagMap.set(tag, 1);
      }
    }
  });
  tagMap = new Map(
    [...tagMap.entries()].sort((a, b) => (a[1] < b[1] ? 1 : -1))
  );
  return (
    <div className=" flex flex-wrap gap-2 justify-center">
      {[...tagMap.keys()].map((name) => (
        <Tag key={name} name={name} />
      ))}
    </div>
  );
};

export const Tag: React.FC<{ name: string }> = ({ name }) => {
  return (
    <button
      onClick={() => {
        Router.push(`/?q=${name}`);
      }}
      className="inline-block py-1 px-2 text-sm  hover:text-emerald-200 rounded-sm border hover:border-emerald-200 "
    >
      # {name}
    </button>
  );
};

const Article: NextPage<Content> = (content) => {
  const date = new Date(content.date);
  return (
    <div className="flex flex-col h-full min-h-screen font-shippori">
      <meta name="description" content={content.title} />
      <Header />
      <Image
        className="opacity-80 hover:opacity-100 duration-500 hover:scale-110"
        src={content.thumbnail.url}
        width="400"
        height="200"
        layout="responsive"
        objectFit="cover"
        alt="thumbnail"
        priority={true}
      ></Image>
      <main className="grow place-self-center px-6 pb-32 max-w-3xl mobile:px-4">
        <div className=" pt-10 pb-4 text-3xl text-center mobile:text-2xl ">
          {content.title}
        </div>
        <div className="pb-2 text-sm text-center ">{`${date.getFullYear()}年${
          date.getMonth() + 1
        }月${date.getDate()}日`}</div>
        <Tags tags={content.tag} />
        <div
          className="pt-6 text-justify text-zinc-100"
          dangerouslySetInnerHTML={{ __html: content.body }}
        ></div>
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const data: HomeContentsResponce = await client.get({
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
