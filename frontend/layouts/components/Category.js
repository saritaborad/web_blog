import { useRouter } from "next/router";
import React, { useState } from "react";

const Category = ({ categories }) => {
 const [activeButton, setActiveButton] = useState(null);
 const router = useRouter();

 const handleButtonClick = (buttonId, name) => {
  setActiveButton(buttonId);
  router.push(`/categories/${name.replace(" ", "-")}`);
 };

 return (
  <div className="cat-section xxs:pl-4 xs:pl-4 sm:pl-8 3xl:pl-0 ">
   <p className="cat-title">recent articles</p>
   <p className="cat-sub xxs:mb-4 md:mb-8 dark:text-darkmode-dark">Browse the blog</p>
   <div className="cat-tabs xxs:hidden md:block md:flex">
    {categories.map((cat) => (
     <button key={cat.id} className={`cat-btn dark:bg-darkmode-catBtn dark:hover:bg-darkmode-catBtn_hover ${activeButton === cat.id ? "dark:hover:bg-catBtn_hover" : ""}`} onClick={() => handleButtonClick(cat.id, cat.name)}>
      {cat.name}
     </button>
    ))}
   </div>
  </div>
 );
};

export default Category;
