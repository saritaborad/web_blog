import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Request from "./Request";
import FooterNew from "./Footer";

const Base = ({ image, isBanner, children }) => {
 return (
  <div className="bg-image">
   <Navbar />
   {isBanner && <Banner image={image} />}
   <main>{children}</main>
   <Request />
   <FooterNew />
  </div>
 );
};

export default Base;
