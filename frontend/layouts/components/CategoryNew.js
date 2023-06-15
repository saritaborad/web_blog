import { useRouter } from "next/router";
import React, { useState } from "react";

const CategoryNew = ({ categories }) => {
 const [activeButton, setActiveButton] = useState(null);
 const router = useRouter();

 const handleButtonClick = (buttonId, name) => {
  setActiveButton(buttonId);
  router.push(`/categories/${name.replace(" ", "-")}`);
 };

 return (
  <div className="cat-section xxs:pl-4 xs:pl-4 sm:pl-8 3xl:pl-0 ">
   <p className="cat-title">recent articles</p>
   <p className="cat-sub xxs:mb-4 md:mb-8 ">Browse the blog</p>
   <div className="cat-tabs xxs:hidden md:block md:flex">
    {categories.map((cat) => (
     <button key={cat.id} className={`cat-btn  ${activeButton === cat.id ? "active" : ""}`} onClick={() => handleButtonClick(cat.id, cat.name)}>
      {cat.name}
     </button>
    ))}
   </div>
  </div>
 );
};

export default CategoryNew;
