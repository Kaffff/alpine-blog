import type { NextPage } from "next";
import { createClient } from "microcms-js-sdk";
import { Header } from "../stories/Header";
import { ArticleCard } from "../stories/ArticleCard";
import { Footer } from "../stories/Footer";
import { useRouter } from "next/router";

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

export type HomeContent = {
  date: string;
  id: string;
  thumbnail: {
    height: number;
    url: string;
    width: number;
  };
  title: string;
};

export type HomeContentsResponce = {
  contents: Content[];
  totalCount: number;
  offset: number;
  limit: number;
};

const Home: NextPage<HomeContentsResponce> = (props) => {
  const router = useRouter();
  const { q } = router.query;
  let contents = props.contents;
  let title = "記事一覧";
  if (q && !Array.isArray(q)) {
    contents = contents.filter((content) => {
      title = "# " + q;
      return content.title.concat(content.tag).includes(q);
    });
  } else if (Array.isArray(q)) {
    q.map((_q) => {
      contents = contents.filter((content) => {
        return content.title.concat(content.tag).includes(_q);
      });
    });
    title = "# " + q.join(" ");
  }
  return (
    <div className="flex flex-col place-items-center h-full min-h-screen">
      <Header />
      <main className="grow px-10 pt-10 pb-24 max-w-5xl  mobile:px-6">
        <div className="pb-2 ml-1 text-3xl  hover:cursor-default mobile:text-2xl">
          {title}
        </div>
        <div className="mb-8 w-full h-1 bg-slate-200">
          <div className="w-32 h-1 bg-emerald-200 mobile:w-28 "></div>
        </div>
        <div className="grid grid-cols-2 gap-10  mobile:gap-6 tablet:grid-cols-1">
          {contents.map((content) => (
            <ArticleCard
              key={content.id}
              id={content.id}
              thumbnail={content.thumbnail.url}
              title={content.title}
              date={content.date}
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
  const res: HomeContentsResponce = await client.get({
    endpoint: "blog",
    queries: {
      fields: ["id", "title", "thumbnail", "date", "tag"],
      limit: 100,
      orders: "-date",
    },
  });
  return {
    props: res,
  };
}

export default Home;
