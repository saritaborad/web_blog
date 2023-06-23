import React from "react";

const Banner = ({ image }) => {
 return <div className="banner-img-wrapper">{image ? <img className="banner-img" src={image} alt="" /> : <div className="banner-img-placeholder"></div>}</div>;
};

export default Banner;
