import { slugify } from "/lib/utils/textConverter";
import { markdownify } from "/lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Authors = ({ authors }) => {
 return (
  <div className="row justify-center">
   {authors &&
    authors.map((author, i) => (
     <div className="col-12 mb-8 sm:col-6 md:col-4" key={`key-${i}`}>
      {author?.image && (
       <div className="mb-4">
        <img src={"http://127.0.0.1:1337" + author?.image?.url} alt={author?.name} height={150} width={150} className="rounded-lg mx-auto" />
       </div>
      )}
      <h3 className="h4 mb-2">
       <Link href={`/authors/${slugify(author?.name)}`} className="block text-white hover:text-blue">
        {author?.name}
       </Link>
      </h3>
      {markdownify(author?.about.slice(0, 120), "p")}
     </div>
    ))}
  </div>
 );
};

export default Authors;
