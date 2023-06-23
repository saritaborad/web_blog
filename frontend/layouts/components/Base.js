import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Request from "./Request";
import FooterNew from "./Footer";
import config from "/config/config.json";
import { plainify } from "@/lib/utils/textConverter";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/customHook";

const Base = ({ image, isBanner, meta_img, meta_title, description, children }) => {
 const { meta_image, meta_author, meta_description } = config.metadata;
 const { base_url } = config.site;
 const router = useRouter();
 const { theme } = useTheme();
 const mounted = useMounted();

 return (
  <div className={mounted ? `${theme === "light" ? "bg-image" : "dark:bg-darkmode-theme-light"}` : ""}>
   <Head>
    <title>{plainify(meta_title ? meta_title : config.site.title)}</title>
    <meta name="description" content={plainify(description ? description : meta_description)} />
    <meta name="author" content={meta_author} />
    <meta property="og:title" content={plainify(meta_title ? meta_title : config.site.title)} />
    <meta property="og:description" content={plainify(description ? description : meta_description)} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${base_url}${router.asPath.replace("/", "")}`} />
    <meta name="twitter:title" content={plainify(meta_title ? meta_title : config.site.title)} />
    <meta name="twitter:description" content={plainify(description ? description : meta_description)} />
    <meta property="og:image" content={`http:127.0.0.1:1337${meta_img ? meta_img : meta_image}`} />
    <link rel="icon" href="/favicon.ico" />
   </Head>
   <Navbar />
   {isBanner && <Banner image={image} />}
   <main>{children}</main>
   <Request />
   <FooterNew />
  </div>
 );
};

export default Base;
