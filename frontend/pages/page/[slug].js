import config from "/config/config.json";
import Pagination from "/layouts/components/Pagination";
import { sortByDate } from "/lib/utils/sortFunctions";
import axios from "axios";
import { GET_ALL_CATEGORY, GET_ALL_POST, GET_ALL_SLUGS } from "@/query/strapiQuery";
import Base from "@/layouts/components/Base";
import BigCard from "@/layouts/components/BigCard";
import Card from "@/layouts/components/Card";
import Category from "@/layouts/components/Category";
import { useThemeInfo } from "@/hooks/customHook";

const BlogPagination = ({ posts, currentPage, pagination, categories }) => {
 const themeInfo = useThemeInfo();
 const indexOfLastPost = currentPage * pagination;
 const indexOfFirstPost = indexOfLastPost - pagination;
 const orderedPosts = sortByDate(posts);
 const currentPosts = orderedPosts.slice(indexOfFirstPost, indexOfLastPost);
 const totalPages = Math.ceil(posts.length / pagination);
 let bigcard = currentPosts.slice(0, 2)?.length > 0;
 let smallcard = currentPosts.slice(2, 8)?.length > 0;

 return (
  <div className="home-container">
   <Base image={"http://127.0.0.1:1337" + themeInfo?.homeBanner?.url || "/images/homebanner.png"} isBanner={true} meta_img={"/images/homebanner.png"} meta_title={orderedPosts[0]?.title} description={orderedPosts[0]?.meta_description}>
    <div className="home-main">
     <div className="home-inner xxs:mx-4">
      <Category categories={categories} />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 big-post">{bigcard && currentPosts.length > 0 && currentPosts.slice(0, 2).map((post, i) => <BigCard post={post} key={i} />)}</div>
      <div className="grid grid-cols-1 xs:gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 small-post">{smallcard && currentPosts.length > 0 && currentPosts.slice(2, 5).map((post, i) => <Card post={post} key={i} />)}</div>
     </div>
    </div>
    <Pagination totalPages={totalPages} currentPage={currentPage} />
   </Base>
  </div>
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
  fallback: "blocking",
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
  revalidate: 20,
 };
};
