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
          content="https://a8-nft-launchpad.s3.ap-southeast-1.amazonaws.com/a8-nft-launchpad/A8_Info_UGC_01.png"
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
