import { serialize } from "next-mdx-remote/serialize";

const parseMDX = async (content) => {
 const html = await serialize(content, {
  mdxOptions: {
   development: process.env.NEXT_APP_PRODUCTION === 1 ? false : true,
  },
 });
 return html;
};

export default parseMDX;
