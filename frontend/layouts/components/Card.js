import dateFormat from "@/lib/utils/dateFormat";
import Link from "next/link";
import React from "react";

const Card = ({ post }) => {
 return (
  <div className="card rounded overflow-hidden shadow-lg dark:bg-darkmode-theme-light">
   <Link href={`/posts/${post.slug}`}>
    <img className="card-img" src={"http://127.0.0.1:1337" + post.image.url} alt={post.title} />
   </Link>
   <div className="card-content">
    <div className="card-tags ">
     {post.categories?.length > 0 &&
      post.categories.map((tag, i) => (
       <Link key={i} className="capitalize card-tag dark:bg-darkmode-tab dark:hover:bg-tab_hover" href={`/categories/${tag.name.replace(" ", "-")}`}>
        {tag.name}
       </Link>
      ))}
    </div>
    <Link href={`/posts/${post.slug}`} className="card-txt dark:text-darkmode-dark">
     {post.title}
    </Link>
    <div className="card-dt-section ">
     <span className="card-dt dark:text-darkmode-light">
      {dateFormat(post.createdAt)} By {post.authors[0]?.name}
     </span>
     <div className="card-read-sec">
      <Link href={`/posts/${post.slug}`} className="card-read-txt pr-2 dark:text-darkmode-light">
       Read More
       {/* <BsArrowRightShort className="card-arrow dark:text-darkmode-dark" /> */}
       <svg className="card-arrow dark:text-darkmode-dark" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 6C0 5.58579 0.335786 5.25 0.75 5.25H9.43934L6.21967 2.03033C5.92678 1.73744 5.92678 1.26256 6.21967 0.969669C6.51256 0.676776 6.98744 0.676776 7.28033 0.969669L11.7803 5.46967C12.0732 5.76256 12.0732 6.23744 11.7803 6.53033L7.28033 11.0303C6.98744 11.3232 6.51256 11.3232 6.21967 11.0303C5.92678 10.7374 5.92678 10.2626 6.21967 9.96967L9.43934 6.75H0.75C0.335786 6.75 0 6.41421 0 6Z" fill="currentColor" fillOpacity="0.5" />
       </svg>
      </Link>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Card;
