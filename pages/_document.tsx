import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="ja">
      <title>botta ヤマレポ</title>
      <meta name="description" content="botta's alpinist blog" />
      <meta name="description" content="bottaの登山ブログ" />
      <meta name="description" content="botta ヤマレポ" />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=New+Tegomin&family=Shippori+Mincho:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="font-shipporiMincho">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
