import parseMDX from "@/lib/utils/mdxParser";
import { markdownify } from "/lib/utils/textConverter";
import React, { useEffect, useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import shortcodes from "./shortcodes/all";
import Base from "./components/Base";

const PrivacyPolicy = ({ data }) => {
 const [mdxContent, setMdxContent] = useState();
 const { title, content } = data;

 useEffect(() => {
  async function fetchMdx() {
   setMdxContent(await parseMDX(content));
  }
  fetchMdx();
 }, []);

 return (
  <Base>
   <section className="section flex justify-center">
    <div className="privacy xxs:mx-8">
     {markdownify(title, "h2", "h2 mb-8 lg:text-[40px] title-text text-center")}
     {mdxContent && (
      <div className="flex flex-col gap-5 text-white">
       <MDXRemote {...mdxContent} components={shortcodes} />
      </div>
     )}
    </div>
   </section>
  </Base>
 );
};

export default PrivacyPolicy;
