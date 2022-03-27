import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { createClient } from "microcms-js-sdk";
import { Header } from "../stories/Header";
import { Article } from "../stories/Article";
import { Footer } from "../stories/Footer";

const Home: NextPage = () => {
  return (
    <div className="h-full flex flex-col min-h-screen font-shippori">
      <Head>
        <title>botta alpinist blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow bg-gray-900 place-self-center max-w-7xl px-6 pt-14 pb-32">
        <div className="text-white text-4xl pb-12 text-center hover:cursor-default">
          最新記事
        </div>
        <div className="grid tablet:grid-cols-2 grid-cols-3 gap-12 place-items-center">
          <Article
            thumbnail="/test_mountain.jpeg"
            title="鋸山 頂上付近の駐車場から"
            date="2019年12月31日"
          />
          <Article
            thumbnail="/test_mountain.jpeg"
            title="鋸山 頂上付近の駐車場から"
            date="2019年12月31日"
          />
          <Article
            thumbnail="/test_mountain.jpeg"
            title="鋸山 頂上付近の駐車場から"
            date="2019年12月31日"
          />
          <Article
            thumbnail="/test_mountain.jpeg"
            title="鋸山 頂上付近の駐車場から"
            date="2019年12月31日"
          />
          <Article
            thumbnail="/test_mountain.jpeg"
            title="鋸山 頂上付近の駐車場から"
            date="2019年12月31日"
          />
          <Article
            thumbnail="/test_mountain.jpeg"
            title="鋸山 頂上付近の駐車場から"
            date="2019年12月31日"
          />
          <Article
            thumbnail="/test_mountain.jpeg"
            title="鋸山 頂上付近の駐車場から"
            date="2019年12月31日"
          />
          <Article
            thumbnail="/test_mountain.jpeg"
            title="鋸山 頂上付近の駐車場から"
            date="2019年12月31日"
          />
          <Article
            thumbnail="/test_mountain.jpeg"
            title="鋸山 頂上付近の駐車場から"
            date="2019年12月31日"
          />
          <Article
            thumbnail="/test_mountain.jpeg"
            title="鋸山 頂上付近の駐車場から"
            date="2019年12月31日"
          />
          <Article
            thumbnail="/test_mountain.jpeg"
            title="鋸山 頂上付近の駐車場から"
            date="2019年12月31日"
          />
          <Article
            thumbnail="/test_mountain.jpeg"
            title="鋸山 頂上付近の駐車場から"
            date="2019年12月31日"
          />
          <Article
            thumbnail="/test_mountain.jpeg"
            title="鋸山 頂上付近の駐車場から"
            date="2019年12月31日"
          />
          <Article
            thumbnail="/test_mountain.jpeg"
            title="鋸山 頂上付近の駐車場から"
            date="2019年12月31日"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

// export async function getStaticProps() {
//   const client = createClient({
//     serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_DOMAIN!,
//     apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
//   });
//   const data = await client.get({ endpoint: "blog" });

//   return {
//     props: data,
//   };
// }

export default Home;
