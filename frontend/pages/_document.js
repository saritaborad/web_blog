import TwSizeIndicator from "/layouts/components/TwSizeIndicator";
import config from "/config/config.json";
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
 const { favicon } = config.site;
 return (
  <Html lang="en" className="dark">
   <Head>
    {/* favicon */}
    <link rel="shortcut icon" href={favicon} />
    {/* theme meta */}
    <meta name="theme-name" content="geeky-nextjs" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
   </Head>
   <body className="dark:bg-gray-800">
    <Main />
    <TwSizeIndicator />
    <NextScript />
   </body>
  </Html>
 );
};

export default Document;
