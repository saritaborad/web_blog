import { useThemeInfo } from "@/hooks/customHook";
import Base from "@/layouts/components/Base";
import BigCard from "@/layouts/components/BigCard";
import Card from "@/layouts/components/Card";
import Category from "@/layouts/components/Category";
import Pagination from "@/layouts/components/Pagination";
import { sortByDate } from "@/lib/utils/sortFunctions";
import { GET_ALL_CATEGORY, GET_ALL_POST } from "@/query/strapiQuery";
import axios from "axios";

const HomeNew = ({ posts, categories }) => {
 const sortPostByDate = sortByDate(posts);
 const themeInfo = useThemeInfo();
 const showPosts = 8;

 return (
  <div className="home-container">
   <Base image={themeInfo?.homeBanner?.url ? "http://127.0.0.1:1337" + themeInfo?.homeBanner?.url : "/images/homebanner.png"} isBanner={true} meta_img={"/images/homebanner.png"} meta_title={"home"} description={"home description"}>
    <div className="home-main">
     <div className="home-inner xxs:mx-4">
      <Category categories={categories} />
      <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-4 big-post">{sortPostByDate && sortPostByDate.length > 0 && sortPostByDate.slice(0, 2).map((post, i) => <BigCard post={post} key={i} />)}</div>
      <div className="grid grid-cols-1 xs:gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2  xl:gap-4 small-post">{sortPostByDate && sortPostByDate.length > 0 && sortPostByDate.slice(2, 8).map((post, i) => <Card post={post} key={i} />)}</div>
     </div>
    </div>
    <Pagination totalPages={Math.ceil(posts.length / showPosts)} currentPage={1} />
   </Base>
  </div>
 );
};

export default HomeNew;

// for homepage data
export const getStaticProps = async () => {
 const posts = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_POST);
 const categories = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_CATEGORY);

 const categoriesWithPostsCount = categories.data.data.map((category) => {
  const filteredPosts = posts.data.data.filter((post) => post.categories.find((cate) => cate.name === category.name));
  return {
   name: category.name,
   posts: filteredPosts.length,
   id: category.id,
  };
 });

 return {
  props: {
   posts: posts.data.data,
   categories: categoriesWithPostsCount,
  },
  revalidate: 20,
 };
};


