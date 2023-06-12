import TwSizeIndicator from "/layouts/components/TwSizeIndicator";
import config from "/config/config.json";
import { Head, Html, Main, NextScript } from "next/document";
import { useConfig } from "@/hooks/customHook";

const Document = () => {
 const configData = useConfig();

 const { favicon } = configData ? configData.site : config.site;
 return (
  <Html lang="en">
   <Head>
    {/* favicon */}
    <link rel="shortcut icon" href={favicon} />
    {/* theme meta */}
    <meta name="theme-name" content="geeky-nextjs" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
   </Head>
   <body>
    <Main />
    <TwSizeIndicator />
    <NextScript />
   </body>
  </Html>
 );
};

export default Document;
