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
import { useConfig } from "@/hooks/customHook";
import BaseNew from "./components/BaseNew";
import Card from "./components/Card";

const PostSingle = ({ post, slug, posts, allCategories, relatedPosts }) => {
 const configData = useConfig();

 let { title, createdAt, image, categories, authors, content } = post;
 let config = configData ? configData : config1;

 const [mdxContent, setMdxContent] = useState("");

 useEffect(() => {
  async function fetchMdx() {
   setMdxContent(await parseMDX(content));
  }
  fetchMdx();
 }, []);

 return (
  <BaseNew isBanner={false} image={"/images/homebanner.png"}>
   <div className="spost-main">
    <div className="spost-container">
     {markdownify(title, "h1", "lg:text-[42px] mt-4 post-title")}
     <div className="text-center">{image && <img src={"http://127.0.0.1:1337" + image.url} height="500" style={{ maxWidth: "100%" }} alt={title} className="rounded-lg" />}</div>
     {config.settings.InnerPaginationOptions.enableTop && (
      <div className="mt-4">
       <InnerPagination posts={posts} date={createdAt} />
      </div>
     )}

     <ul className="flex items-center space-x-4">
      <li className="">
       <span className="items-center flex justify-center font-description text-white leading-3">
        <FaUserAlt className="mr-1.5" />
        {authors &&
         authors.map((item, i) => (
          <Link href={`/authors/${slugify(item.name)}`} key={`author-${i}`}>
           {item.name}
          </Link>
         ))}
       </span>
      </li>
      <li className="items-center flex justify-center font-description text-white leading-3">
       <FaRegCalendar className="mr-1.5" />
       {dateFormat(createdAt)}
      </li>
     </ul>
     <div className="cat-tabs">
      {categories.map((cat) => (
       <Link key={cat.id} className="cat-btn" href={`/categories/${cat.name.replace(" ", "-")}`}>
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
   {/* <Sidebar posts={posts.filter((post) => post.slug !== slug)} categories={allCategories} /> */}

   {/* Related posts */}
   {relatedPosts.length > 0 && (
    <div className="rel-main">
     <div className="related">
      <div className="flex flex-col mt-20 ">
       <h2 className="section-title title-text">Related Posts</h2>
       <div className="mt-10 flex gap-4">
        {relatedPosts.slice(0, 3).map((post, index) => (
         <div key={"post-" + index} className="mb-12">
          <Card post={post} />
         </div>
        ))}
       </div>
      </div>
     </div>
    </div>
   )}
  </BaseNew>
 );
};

export default PostSingle;
