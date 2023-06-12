import { sortByDate } from "/lib/utils/sortFunctions";
import Link from "next/link";

const InnerPagination = ({ posts, date }) => {
 const orderedPosts = sortByDate(posts);
 const lastIndex = orderedPosts.length - 1;
 const postIndex = orderedPosts.findIndex((post) => post.createdAt == date);
 const next = postIndex == 0 ? undefined : orderedPosts[postIndex - 1].slug;
 const prev = postIndex == lastIndex ? undefined : orderedPosts[postIndex + 1].slug;
 const prevButton = prev && (
  <Link href={prev} className={"btn"} style={{ backgroundColor: "#1F6BFF", border: "none", borderRadius: "20px" }}>
   Prev
  </Link>
 );
 const nextButton = next && (
  <Link href={next} className={"btn"} style={{ backgroundColor: "#1F6BFF", border: "none", borderRadius: "20px" }}>
   Next
  </Link>
 );

 return (
  <div className="flex justify-between">
   <span>{prevButton}</span>
   <span>{nextButton}</span>
  </div>
 );
};

export default InnerPagination;
