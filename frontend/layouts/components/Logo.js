import ImageFallback from "/layouts/components/ImageFallback";
import config from "/config/config.json";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = ({ configData }) => {
 const { logo, logo_white, logo_width, logo_height, logo_text, title } = configData ? configData.site : config.site;

 const { theme, resolvedTheme } = useTheme();
 const [mounted, setMounted] = useState(false);
 useEffect(() => setMounted(true), []);

 return (
  <Link href="/" className="navbar-brand">
   {logo ? (
    <img
     width={logo_width.replace("px", "") * 2}
     height={logo_height.replace("px", "") * 2}
     src={mounted && (theme === "dark" || resolvedTheme === "dark") ? logo_white : logo}
     alt={title}
     style={{
      height: logo_height.replace("px", "") + "px",
      width: logo_width.replace("px", "") + "px",
     }}
     className={"m-auto"}
    />
   ) : logo_text ? (
    logo_text
   ) : (
    title
   )}
  </Link>
 );
};

export default Logo;
