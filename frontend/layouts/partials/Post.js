import config from "/config/config.json";
import ImageFallback from "/layouts/components/ImageFallback";
import dateFormat from "/lib/utils/dateFormat";
import Link from "next/link";
import { FaRegCalendar, FaUserAlt } from "react-icons/fa";

const Post = ({ post }) => {
 const { summary_length } = config.settings;

 return (
  <div className="post">
   <div className="relative">
    {post.image && <ImageFallback className="rounded" src={"http://127.0.0.1:1337" + post.image.url} alt={post.title} width={405} height={208} />}
    <ul className="absolute top-3 left-2 flex flex-wrap items-center">
     {post.categories?.length > 0 &&
      post.categories.map((tag, index) => (
       <li className="mx-2 mb-2 inline-flex h-7 rounded-[35px] bg-primary px-3 text-white cursor-pointer" key={"tag-" + index}>
        <Link className="capitalize" href={`/categories/${tag.name.replace(" ", "-")}`}>
         {tag.name}
        </Link>
       </li>
      ))}
    </ul>
   </div>
   <h3 className="h5 mb-2 mt-4">
    <Link href={`/posts/${post.slug}`} className="block hover:text-primary cursor-pointer">
     {post.title}
    </Link>
   </h3>
   <ul className="flex items-center space-x-4">
    <li>
     <Link className="inline-flex items-center font-secondary text-xs leading-3 cursor-pointer" href="/about">
      <FaUserAlt className="mr-1.5" />
      {post.authors.map((item, i) => (
       <span key={i} className="cursor-pointer">
        {item.name}
       </span>
      ))}
     </Link>
    </li>
    <li className="inline-flex items-center font-secondary text-xs leading-3">
     <FaRegCalendar className="mr-1.5" />
     {dateFormat(post.createdAt)}
    </li>
   </ul>
   <p>{post.content.slice(0, Number(summary_length))}</p>
   <Link className="btn btn-outline-primary mt-4 cursor-pointer" href={`/posts/${post.slug}`}>
    Read More
   </Link>
  </div>
 );
};

export default Post;
