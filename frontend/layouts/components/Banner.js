import React from "react";

const Banner = ({ image }) => {
 return (
  <div className="banner ">
   <img className="banner-img" src={image} />
   {/* <div className="banner-txt-container"> */}
   {/* <p className="banner-txt">ABOUT ATHH TECHNOLOGY</p> */}
   {/* </div> */}
  </div>
 );
};

export default Banner;
