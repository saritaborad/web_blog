import { markdownify } from "/lib/utils/textConverter";
import shortcodes from "/layouts/shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Social from "/layouts/components/Social";
import { useEffect, useState } from "react";
import parseMDX from "@/lib/utils/mdxParser";
import BaseNew from "./components/BaseNew";

const AuthorSingle = ({ author }) => {
 const { description, social, name, about, image } = author[0];
 const [mdxContent, setMdxContent] = useState();

 useEffect(() => {
  async function fetchMdx() {
   setMdxContent(await parseMDX(about));
  }
  fetchMdx();
 }, []);

 return (
  <BaseNew image={"/images/homebanner.png"} isBanner={false}>
   <section className="section">
    <div className="container">
     <div className="mb-4 text-center md:px-24">
      {image && (
       <div className="mb-8">
        <Image src={"http:127.0.0.1:1337" + image.url} className="mx-auto rounded-lg" height="150" width="150" alt={name} />
       </div>
      )}
      {markdownify(name, "h1", "h2 mb-8 text-white")}
      <Social source={social} className="social-icons-simple text-white" />
      {mdxContent && (
       <div className="content">
        <MDXRemote {...mdxContent} components={shortcodes} />
       </div>
      )}
     </div>
    </div>
   </section>
  </BaseNew>
 );
};

export default AuthorSingle;
