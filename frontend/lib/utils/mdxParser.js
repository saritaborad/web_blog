import { serialize } from "next-mdx-remote/serialize";

const parseMDX = async (content) => {
 const html = await serialize(content, {
  mdxOptions: {
   development: process.env.NEXT_PUBLIC_PRODUCTION === 1 ? true : false, //set development false for dev and true for production
  },
 });
 return html;
};

export default parseMDX;
