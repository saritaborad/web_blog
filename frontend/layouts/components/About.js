import React, { useEffect, useState } from "react";
import Base from "./Base";
import parseMDX from "@/lib/utils/mdxParser";
import { MDXRemote } from "next-mdx-remote";
import shortcodes from "../shortcodes/all";

const About = ({ data }) => {
 const { section1, section2, section3, bannerImg, title } = data;
 let sec1 = section1[0];
 let sec2 = section2[0];
 let sec3 = section3[0];

 const [mdxContent, setMdxContent] = useState("");

 useEffect(() => {
  async function fetchMdx() {
   setMdxContent({ des1: await parseMDX(sec1?.description1), des2: await parseMDX(sec1?.description2), des3: await parseMDX(sec1?.description3), des4: await parseMDX(sec2?.description1), des5: await parseMDX(sec2?.description2), des6: await parseMDX(sec3?.description1), des7: await parseMDX(sec3?.description2), des8: await parseMDX(sec3?.description3) });
  }
  fetchMdx();
 }, []);

 return (
  <div className="about-container">
   <Base image={"http://127.0.0.1:1337" + bannerImg?.url || "/images/aboutbanner.png"} isBanner={true} meta_img={bannerImg?.url} meta_title={"About us"} description={sec1?.description1.slice(0, 120)}>
    <div className="about-sec1 xxs:px-4 xxs:my-8 md:px-4 ">
     <div className="sec1-main gap-2">
      <div className="sec1-sub gap-4">
       <p className="sec1-title">{title || "ABOUT US"}</p>
       <div className="sec1-content">
        <p className="sec1-subtitle dark:text-darkmode-dark">{sec1?.title1 || "How We Started?"}</p>
        {mdxContent && <MDXRemote {...mdxContent?.des1} components={shortcodes} />}
       </div>
       <div className="sec1-content">
        <p className="sec1-subtitle dark:text-darkmode-dark">{sec1?.title2 || "Where We Are Now?"}</p>
        {mdxContent && <MDXRemote {...mdxContent?.des2} components={shortcodes} />}
       </div>
       <div className="sec1-content">
        <p className="sec1-subtitle dark:text-darkmode-dark">{sec1?.title3 || "How We Can Help?"}</p>
        {mdxContent && <MDXRemote {...mdxContent?.des3} components={shortcodes} />}
       </div>
      </div>
      <img className="about-img  xxs:hidden xs:hidden sm:hidden md:block md:w-3/6 lg:w-3/5 xl:w-3/5 2xl:w-4/5 3xl:w-full" src={"http://127.0.0.1:1337" + sec1?.image?.url || "/images/group25.png"} />
     </div>
    </div>
    <div className="about-sec2 sm:min-h-[850px]">
     <div className="sec2-main xxs:mx-4">
      <div className="sec2-sub xxs:flex xxs:gap-4">
       <div className="sec2-content ">
        <p className="sec2-txt xxs:text-2xl md:text-3xl">{sec2?.title1 || "OUR VISION"}</p>
        <p className="sec2-desc  xxs:text-lg md:text-2xl">{sec2?.description1 || "To bring innovative web and app development solutions to clients so they can have optimal customer relations. We work hard to continuously deliver top-tier services without compromising quality."}</p>
       </div>
       <div className="sec2-img">
        <img src={"http://127.0.0.1:1337" + sec2?.image1?.url || "/images/about3.png"} className="aboutImg xss:w-1/5 sm:w-3/4" />
       </div>
      </div>
      <div className="sec2-sub xxs:flex xxs:gap-4">
       <div className="sec2-img">
        <img src={"http://127.0.0.1:1337" + sec2?.image2?.url || "/images/about4.png"} className="aboutImg xss:w-1/5 sm:w-3/4" />
       </div>
       <div className="sec2-content">
        <p className="sec2-txt xxs:text-2xl md:text-3xl">{sec2?.title2 || "OUR MISSION"}</p>
        <p className="sec2-desc  xxs:text-lg md:text-2xl">{sec2?.description2 || "It is our personal mission to develop innovative and cost-effective web/mobile-based IT solutions for our clients and their stakeholders. We want to help you boost not only your productivity but profitability. Differenz System enables clients to work anywhere and anytime, with an ironclad guarantee to deliver solutions on time and with 24/7 support."}</p>
       </div>
      </div>
     </div>
    </div>
    <div className="about-sec3 dark:border dark:bg-dark flex justify-center items-center">
     <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
      <div className="sec3-sub">
       <p className="sec3-num dark:text-darkmode-dark">01</p>
       <span className="sec3-line"></span>
       <p className="sec3-title dark:text-darkmode-dark">{sec3?.title1 || "Design"}</p>
       {mdxContent && <MDXRemote {...mdxContent?.des6} components={shortcodes} />}
      </div>
      <div className="sec3-sub">
       <p className="sec3-num dark:text-darkmode-dark">02</p>
       <span className="sec3-line"></span>
       <p className="sec3-title dark:text-darkmode-dark">{sec3?.title2 || "Development"}</p>
       {mdxContent && <MDXRemote {...mdxContent?.des7} components={shortcodes} />}
      </div>
      <div className="sec3-sub">
       <p className="sec3-num dark:text-darkmode-dark">03</p>
       <span className="sec3-line"></span>
       <p className="sec3-title dark:text-darkmode-dark">{sec3?.title3 || "Full service"}</p>
       {mdxContent && <MDXRemote {...mdxContent?.des8} components={shortcodes} />}
      </div>
     </div>
    </div>
   </Base>
  </div>
 );
};

export default About;
