import { Html, Head, Main, NextScript } from "next/document";
import { DefaultSeo } from "next-seo";

const Document = () => {
  return (
    <Html lang="ja">
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "ja_JP",
          url: "https://alpine-blog.vercel.app/",
          site_name: "botta ヤマレポ",
        }}
      />
      <Head>
        <meta name="description" content="botta's alpinist blog" />
        <meta name="description" content="bottaの登山ブログ" />
        <meta name="description" content="botta ヤマレポ" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap&text=botaヤマレポ"
          rel="stylesheet"
        />
      </Head>
      <body className="font-mplus">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
