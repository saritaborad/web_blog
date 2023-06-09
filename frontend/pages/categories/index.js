import { markdownify } from "/lib/utils/textConverter";
import Link from "next/link";
import { slugify } from "/lib/utils/textConverter";
import axios from "axios";
import { GET_ALL_CATEGORY, GET_ALL_POST } from "/query/strapiQuery";
import Base from "@/layouts/components/Base";

const Categories = ({ categories }) => {
 return (
  <div className="home-container">
   <Base image="/images/homebanner.png" isBanner={false} meta_img={"/images/homebanner.png"} meta_title={"Category"} description={"Category"}>
    <section className="">
     {markdownify("Categories", "h2", "h2 py-12 lg:text-[40px] title-text text-center ")}
     <div className="container pt-6 text-center pb-12">
      <div className="cat-tabs xxs:flex xxs:justify-center">
       {categories.map((cat, i) => (
        <Link key={i} href={`/categories/${cat.name.replace(" ", "-")}`} className={`cat-btn hover:bg-btn_hover dark:bg-darkmode-catBtn dark:hover:bg-darkmode-catBtn_hover`}>
         {cat.name}
        </Link>
       ))}
      </div>
     </div>
    </section>
   </Base>
  </div>
 );
};

export default Categories;

export const getStaticProps = async () => {
 const posts = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_POST);
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
   categories: categoriesWithPostsCount,
  },
  revalidate: 20,
 };
};
