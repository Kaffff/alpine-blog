import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "microcms-js-sdk";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>alpine-blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button className="bg-red-200">Hello world</button>
      </main>

      <footer></footer>
    </>
  );
};

export async function getStaticProps() {
  const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_DOMAIN!,
    apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
  });
  const data = await client.get({ endpoint: "blog" });
  console.log(data);

  return {
    props: data,
  };
}

export default Home;
