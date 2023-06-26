import axios from "axios";
import PostSingle from "/layouts/PostSingle";
import { GET_ALL_CATEGORY, GET_ALL_POST } from "@/query/strapiQuery";

const Article = ({ post, slug, allCategories, relatedPosts, posts }) => {
 return <PostSingle post={post} slug={slug} allCategories={allCategories} relatedPosts={relatedPosts} posts={posts} />;
};

export const getStaticPaths = async () => {
 const allSlug = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_POST);
 const paths = allSlug.data.data.map((item) => ({
  params: {
   single: item.slug,
  },
 }));

 return {
  paths,
  fallback: "blocking",
 };
};

export const getStaticProps = async ({ params }) => {
 const { single } = params;
 const posts = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_POST);
 const post = posts.data.data.find((p) => p.slug == single);

 const relatedPosts = posts.data.data.filter((p) => post.categories.some((cate) => p.categories.find((obj) => obj.name === cate.name && p.slug !== single)));

 const categories = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_CATEGORY);
 const categoriesWithPostsCount = categories.data.data.map((category) => {
  const filteredPosts = posts.data.data.filter((post) => post.categories.find((obj) => obj.name === category.name && post.slug !== single));
  return {
   name: category.name,
   posts: filteredPosts.length,
  };
 });
 return {
  props: {
   post: post,
   slug: single,
   allCategories: categoriesWithPostsCount,
   relatedPosts: relatedPosts,
   posts: posts.data.data,
  },
  revalidate: 20,
 };
};

export default Article;
