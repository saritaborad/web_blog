import config1 from "/config/config.json";
import InnerPagination from "/layouts/components/InnerPagination";
import dateFormat from "/lib/utils/dateFormat";
import { markdownify } from "/lib/utils/textConverter";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { FaRegCalendar, FaUserAlt } from "react-icons/fa";
import shortcodes from "./shortcodes/all";
import parseMDX from "/lib/utils/mdxParser";
import { useEffect, useState } from "react";
import { slugify } from "/lib/utils/textConverter";
import Base from "./components/Base";
import Card from "./components/Card";

const PostSingle = ({ post, slug, posts, allCategories, relatedPosts }) => {
 let { title, createdAt, image, categories, authors, content, meta_title, meta_description } = post;
 let config = config1;

 const [mdxContent, setMdxContent] = useState("");

 useEffect(() => {
  async function fetchMdx() {
   setMdxContent(await parseMDX(content));
  }
  fetchMdx();
 }, []);

 return (
  <Base image={"/images/homebanner.png"} isBanner={false} meta_img={"http://127.0.0.1:1337" + image.url} meta_title={meta_title} description={meta_description}>
   <div className="spost-main">
    <div className="spost-container xxs:mx-8 2xl:mx-0">
     {markdownify(title, "h1", "lg:text-[42px] mt-4 post-title cursor-default")}
     <div className="text-center">{image && <img src={"http://127.0.0.1:1337" + image.url} height="500" style={{ maxWidth: "100%" }} alt={title} className="rounded-lg" />}</div>
     {config.settings.InnerPaginationOptions.enableTop && (
      <div className="mt-4">
       <InnerPagination posts={posts} date={createdAt} />
      </div>
     )}

     <ul className="flex items-center space-x-4">
      <li className="">
       <span className="items-center flex justify-center font-description text-white leading-3 dark:text-darkmode-dark">
        <FaUserAlt className="mr-1.5 " />
        {authors &&
         authors.map((item, i) => (
          <Link href={`/authors/${slugify(item.name)}`} key={`author-${i}`}>
           {item.name}
          </Link>
         ))}
       </span>
      </li>
      <li className="items-center flex justify-center font-description text-white leading-3 dark:text-darkmode-dark">
       <FaRegCalendar className="mr-1.5" />
       {dateFormat(createdAt)}
      </li>
     </ul>
     <div className="cat-tabs">
      {categories.map((cat) => (
       <Link key={cat.id} className="cat-btn hover:bg-btn_hover dark:bg-darkmode-catBtn dark:hover:bg-darkmode-catBtn_hover " href={`/categories/${cat.name.replace(" ", "-")}`}>
        {cat.name}
       </Link>
      ))}
     </div>
     {mdxContent && (
      <div className="mb-16 flex flex-col gap-5">
       <MDXRemote {...mdxContent} components={shortcodes} />
      </div>
     )}
     {config.settings.InnerPaginationOptions.enableBottom && <InnerPagination posts={posts} date={createdAt} />}
    </div>
   </div>

   {/* Related posts */}
   {relatedPosts.length > 0 && (
    <div className="rel-main mb-10">
     <div className="related xs:flex xs:justify-center">
      <div className="mt-20">
       <h2 className="section-title title-text xs:ml-4 cursor-default">Related Posts</h2>
       <div className="mt-10 xxs:mx-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedPosts.slice(0, 3).map((post, index) => (
         <Card post={post} key={index} />
        ))}
       </div>
      </div>
     </div>
    </div>
   )}
  </Base>
 );
};

export default PostSingle;
