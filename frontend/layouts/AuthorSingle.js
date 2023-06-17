import { markdownify } from "/lib/utils/textConverter";
import shortcodes from "/layouts/shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Social from "/layouts/components/Social";
import { useEffect, useState } from "react";
import parseMDX from "@/lib/utils/mdxParser";
import Base from "./components/Base";

const AuthorSingle = ({ author }) => {
 const { meta_title, meta_description, social, name, about, image } = author[0];
 const [mdxContent, setMdxContent] = useState();

 useEffect(() => {
  async function fetchMdx() {
   setMdxContent(await parseMDX(about));
  }
  fetchMdx();
 }, []);

 return (
  <Base image={"/images/homebanner.png"} isBanner={false} meta_img={"http://127.0.0.1:1337" + image.url} meta_title={meta_title} description={meta_description}>
   <section className="section">
    <div className="container">
     <div className="mb-4 text-center md:px-24">
      <div className="mb-8">
       <img src={"http://127.0.0.1:1337" + image.url} className="mx-auto rounded-lg cursor-default" height="150" width="150" alt={name} />
      </div>
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
  </Base>
 );
};

export default AuthorSingle;
