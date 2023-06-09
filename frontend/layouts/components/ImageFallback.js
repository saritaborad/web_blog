import { useEffect, useState } from "react";

const ImageFallback = (props) => {
 const { src, fallback, ...rest } = props;
 const [imgSrc, setImgSrc] = useState(src);

 useEffect(() => {
  setImgSrc(src);
 }, [src]);

 return (
  <img
   {...rest}
   src={imgSrc}
   onError={() => {
    setImgSrc(fallback);
   }}
  />
 );
};

export default ImageFallback;
