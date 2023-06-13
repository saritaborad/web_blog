import { slugify } from "/lib/utils/textConverter";
import axios from "axios";
import { GET_ALL_CATEGORY, GET_ALL_POST } from "/query/strapiQuery";
import BaseNew from "@/layouts/components/BaseNew";
import BigCard from "@/layouts/components/BigCard";
import Card from "@/layouts/components/Card";

// category page
const Category = ({ postsByCategories, category, posts, categories }) => {
 let bigcard = postsByCategories.slice(0, 2)?.length > 0;
 let smallcard = postsByCategories.slice(2, 8)?.length > 0;
 return (
  <BaseNew image="/images/homebanner.png">
   <div className="flex flex-col justify-center items-center mt-12 xxs:mx-4">
    <h1 className="h2 text-white justify-start title-text">
     Showing posts from
     <span className="section-title ml-1  capitalize text-white">{category.replace("-", " ")}</span>
    </h1>
    {bigcard && <div className={`grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-4 big-post ${smallcard ? "" : "mb-10"}`}>{postsByCategories && postsByCategories.length > 0 && postsByCategories.slice(0, 2).map((post, i) => <BigCard post={post} key={i} />)}</div>}

    {smallcard && <div className={`grid grid-cols-1 xs:gap-10 sm:grid-cols-1 ${postsByCategories.slice(2, 8)?.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}  lg:grid-cols-3 gap-4 small-post ${smallcard ? "mb-10" : ""}`}>{postsByCategories && postsByCategories.length > 0 && postsByCategories.slice(2, 8).map((post, i) => <Card post={post} key={i} />)}</div>}
   </div>
  </BaseNew>
 );
};

export default Category;

// category page routes
export const getStaticPaths = async () => {
 const allCategories = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_CATEGORY);

 const paths = allCategories.data.data.map((category) => ({
  params: {
   category: category.name,
  },
 }));

 return { paths, fallback: false };
};

// category page data
export const getStaticProps = async ({ params }) => {
 const posts = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_POST);
 const filterPosts = posts.data.data.filter((post) => post.categories.find((category) => slugify(category.name).includes(params.category)));
 const categories = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_CATEGORY);

 const categoriesWithPostsCount = categories.data.data.map((category) => {
  const filteredPosts = posts.data.data.filter((post) => post.categories.map((e) => slugify(e.name)).includes(category.name));
  return {
   name: category.name,
   posts: filteredPosts.length,
  };
 });

 return {
  props: {
   posts: posts.data.data,
   postsByCategories: filterPosts,
   category: params.category,
   categories: categoriesWithPostsCount,
  },
 };
};
