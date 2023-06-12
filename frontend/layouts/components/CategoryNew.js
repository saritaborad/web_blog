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
  <div className="cat-section xs:pl-2 sm:pl-8 3xl:pl-0">
   <p className="cat-title">recent articles</p>
   <p className="cat-sub">Browse the blog</p>
   <div className="cat-tabs">
    {categories.map((cat) => (
     <button key={cat.id} className={`cat-btn ${activeButton === cat.id ? "active" : ""}`} onClick={() => handleButtonClick(cat.id, cat.name)}>
      {cat.name}
     </button>
    ))}
   </div>
  </div>
 );
};

export default CategoryNew;
