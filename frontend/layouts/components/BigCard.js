import dateFormat from "@/lib/utils/dateFormat";
import Link from "next/link";
import React from "react";

const BigCard = ({ post }) => {
 return (
  <div className="bigcard rounded overflow-hidden shadow-lg">
   <Link href={`/posts/${post.slug}`}>
    <img className="bigcard-img" src={"http://127.0.0.1:1337" + post.image.url} alt={post.title} />
   </Link>
   <div className="bigcard-content">
    <div className="bigcard-tags">
     {post.categories?.length > 0 &&
      post.categories.map((tag, i) => (
       <Link key={i} className="capitalize bigcard-tag" href={`/categories/${tag.name.replace(" ", "-")}`}>
        {tag.name}
       </Link>
      ))}
    </div>
    <Link className="bigcard-txt" href={`/posts/${post.slug}`}>
     {post.title}
    </Link>
    <p className="bigcard-desc">{post.description}</p>
    <div className="bigcard-dt-section">
     <span className="bigcard-dt">
      {dateFormat(post.createdAt)} By {post.authors[0]?.name}
     </span>
     <div className="bigcard-read-sec">
      <Link href={`/posts/${post.slug}`}>
       <img className="bigcard-arrow" src="/images/bigarrow.svg" alt="img" />
      </Link>
     </div>
    </div>
   </div>
  </div>
 );
};

export default BigCard;
