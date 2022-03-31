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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
