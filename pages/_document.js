import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          property="og:title"
          content="GPT-3 Christmas Present Ideator"
          key="title"
        />
        <meta
          property="og:description"
          content="built with buildspace course"
          key="description"
        />
        <meta
          property="og:image"
          content="https://i0.wp.com/syncedreview.com/wp-content/uploads/2017/12/Christmas.jpg?fit=1400%2C600&ssl=1"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
