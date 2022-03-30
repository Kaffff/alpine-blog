import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { createClient } from "microcms-js-sdk";
import { Header } from "../stories/Header";
import { ArticleCard } from "../stories/ArticleCard";
import { Footer } from "../stories/Footer";
import { ReactNode } from "react";

export type Content = {
  body: string;
  createdAt: string;
  date: string;
  id: string;
  mountain_name: string;
  publishedAt: string;
  revisedAt: string;
  tag: string;
  thumbnail: {
    height: number;
    url: string;
    width: number;
  };
  title: string;
  updatedAt: string;
};

export type ResFromMicroCMS = {
  contents: Content[];
  totalCount: number;
  offset: number;
  limit: number;
};

const Home: NextPage<ResFromMicroCMS> = (props) => {
  return (
    <div className="flex flex-col h-full min-h-screen font-shippori">
      <Head>
        <title>botta alpinist blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="grow place-self-center px-6 pt-14 pb-32 max-w-7xl bg-gray-900">
        <div className="pb-12 text-4xl text-center text-white hover:cursor-default">
          最新記事
        </div>
        <div className="grid grid-cols-3 gap-12 place-items-center tablet:grid-cols-2">
          {props.contents.map((content) => (
            <ArticleCard
              key={content.id}
              id={content.id}
              thumbnail={content.thumbnail.url}
              title={content.title}
              publishedAt={content.publishedAt}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
});

export async function getStaticProps() {
  const data: ResFromMicroCMS = await client.get({
    endpoint: "blog",
    queries: {
      fields: ["id", "title", "thumbnail", "publishedAt"],
      limit: 100,
      orders: "-publishedAt",
    },
  });
  return {
    props: data,
  };
}

export default Home;
