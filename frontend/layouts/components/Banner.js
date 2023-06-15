import React from "react";

const Banner = ({ image }) => {
 return (
  <div className="banner">
   <img className="banner-img h-auto max-w-full" src={image} />
  </div>
 );
};

export default Banner;
