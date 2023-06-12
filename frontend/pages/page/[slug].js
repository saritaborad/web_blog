import config from "/config/config.json";
import Pagination from "/layouts/components/Pagination";
import { sortByDate } from "/lib/utils/sortFunctions";
import axios from "axios";
import { GET_ALL_CATEGORY, GET_ALL_POST, GET_ALL_SLUGS } from "@/query/strapiQuery";
import BaseNew from "@/layouts/components/BaseNew";
import BigCard from "@/layouts/components/BigCard";
import Card from "@/layouts/components/Card";
import CategoryNew from "@/layouts/components/CategoryNew";

const BlogPagination = ({ posts, currentPage, pagination, categories }) => {
 const indexOfLastPost = currentPage * pagination;
 const indexOfFirstPost = indexOfLastPost - pagination;
 const orderedPosts = sortByDate(posts);
 const currentPosts = orderedPosts.slice(indexOfFirstPost, indexOfLastPost);
 const totalPages = Math.ceil(posts.length / pagination);
 let bigcard = currentPosts.slice(0, 2)?.length > 0;
 let smallcard = currentPosts.slice(2, 8)?.length > 0;

 return (
  <BaseNew image={"/images/homebanner.png"} isBanner={true}>
   <div className="flex flex-col justify-center items-center mt-12">
    {/* {markdownify("Blog post", "h1", "h2 mb-8 text-center title-text")} */}
    <div className="home-main">
     <div className="home-inner">
      <CategoryNew categories={categories} />
      {bigcard && (
       <div className={`big-post ${smallcard ? "" : "mb-12"}`}>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
         {currentPosts &&
          currentPosts.length > 0 &&
          currentPosts.slice(0, 2).map((post, i) => (
           <div key={i} className="mb-4 sm:mb-0">
            <BigCard post={post} />
           </div>
          ))}
        </div>
       </div>
      )}

      {smallcard && (
       <div className={`small-post ${smallcard ? "mb-12" : ""}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
         {currentPosts &&
          currentPosts.length > 0 &&
          currentPosts.slice(2, 5).map((post, i) => (
           <div key={i} className="mb-4 sm:mb-0">
            <Card post={post} />
           </div>
          ))}
        </div>
       </div>
      )}
     </div>
    </div>
    <Pagination totalPages={totalPages} currentPage={currentPage} />
   </div>
  </BaseNew>
 );
};

export default BlogPagination;

export const getStaticPaths = async () => {
 const slug = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_SLUGS);
 const allSlug = slug.data.data.map((item) => item.slug);
 const { pagination } = config.settings;
 const totalPages = Math.ceil(allSlug.length / pagination);
 let paths = [];

 for (let i = 1; i < totalPages; i++) {
  paths.push({
   params: {
    slug: (i + 1).toString(),
   },
  });
 }

 return {
  paths,
  fallback: false,
 };
};

export const getStaticProps = async ({ params }) => {
 const currentPage = parseInt((params && params.slug) || 1);
 const { pagination } = config.settings;
 const posts = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_POST);
 const categories = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_CATEGORY);

 return {
  props: {
   pagination: pagination,
   posts: posts.data.data,
   currentPage: currentPage,
   categories: categories.data.data,
  },
 };
};