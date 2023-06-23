import config1 from "@config/config.json";

import { IoLogoFacebook, IoLogoLinkedin, IoLogoPinterest, IoLogoTwitter } from "react-icons/io5";

const Share = ({ title, description, slug, className }) => {
 const { base_url } = config1.site;

 return (
  <ul className={`${className}`}>
   <li className="inline-block">
    <a aria-label="facebook share button" href={`https://facebook.com/sharer/sharer.php?u=${base_url}/${slug}`} target="_blank" rel="noreferrer noopener" button="true">
     <IoLogoFacebook />
    </a>
   </li>
   <li className="inline-block">
    <a aria-label="twitter share button" href={`https://twitter.com/intent/tweet/?text=${title}&amp;url=${base_url}/${slug}`} target="_blank" rel="noreferrer noopener" button="true">
     <IoLogoTwitter />
    </a>
   </li>
   <li className="inline-block">
    <a aria-label="linkedin share button" href={`https://www.linkedin.com/shareArticle?mini=true&url=${base_url}/${slug}&title=${title}&summary=${description}&source=${base_url}`} target="_blank" rel="noreferrer noopener">
     <IoLogoLinkedin />
    </a>
   </li>
   <li className="inline-block">
    <a aria-label="pinterest share button" href={`https://pinterest.com/pin/create/button/?url=${base_url}/${slug}&media=&description=${description}`} target="_blank" rel="noreferrer noopener" button="true">
     <IoLogoPinterest />
    </a>
   </li>
  </ul>
 );
};

export default Share;
