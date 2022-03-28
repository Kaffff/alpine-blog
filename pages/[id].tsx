import { GetStaticPropsContext, NextPage } from "next";
import React from "react";
import { client, Content, ResFromMicroCMS } from ".";
import { Footer } from "../stories/Footer";
import { Header } from "../stories/Header";
import { join } from "path";
import Image from "next/image";

const Article: NextPage<Content> = (content) => {
  return (
    <div className="h-full flex flex-col min-h-screen font-shippori">
      <Header />
      <main className="flex-grow bg-gray-900 place-self-center max-w-7xl px-6 pt-14 pb-32">
        <Image
          src={content.thumbnail.url}
          width="1000"
          height="500"
          objectFit="cover"
        ></Image>
        <div className="text-white text-4xl text-center pt-10 pb-6">
          {content.title}
        </div>
        <div className="text-white text-sm text-center">{content.date}</div>
        <div
          className="text-gray-100 pt-20"
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
