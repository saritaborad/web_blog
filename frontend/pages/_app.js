import config from "/config/config.json";
import theme1 from "/config/theme.json";
import { JsonContext } from "context/state";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import "styles/style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = ({ Component, pageProps }) => {
 let theme = theme1;
 const { default_theme } = config.settings;

 // import google font css
 const pf = theme.fonts.font_family.primary;
 const sf = theme.fonts.font_family.secondary;
 const [fontcss, setFontcss] = useState();
 useEffect(() => {
  fetch(`https://fonts.googleapis.com/css2?family=${pf}${sf ? "&family=" + sf : ""}&display=swap`).then((res) => res.text().then((css) => setFontcss(css)));
 }, [pf, sf]);

 // google tag manager (gtm)
 const tagManagerArgs = {
  gtmId: config.params.tag_manager_id,
 };
 useEffect(() => {
  setTimeout(() => {
   process.env.NODE_ENV === "production" && config.params.tag_manager_id && TagManager.initialize(tagManagerArgs);
  }, 5000);
 }, []);

 return (
  <JsonContext>
   <Head>
    {/* google font css */}
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <style
     dangerouslySetInnerHTML={{
      __html: `${fontcss}`,
     }}
    />
    {/* responsive meta */}
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
   </Head>
   <ThemeProvider attribute="class" defaultTheme={default_theme}>
    <Component {...pageProps} />
    <ToastContainer autoClose={1000} theme="dark" position="top-right" />
   </ThemeProvider>
  </JsonContext>
 );
};

export default App;
