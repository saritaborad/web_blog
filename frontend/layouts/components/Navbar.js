import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useMounted, useThemeInfo } from "@/hooks/customHook";
import { useTheme } from "next-themes";

const Navbar = () => {
 const router = useRouter();
 const themeInfo = useThemeInfo();
 const { theme } = useTheme();
 const mounted = useMounted();

 let Links = [
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Categories", link: "/categories" },
 ];

 let [open, setOpen] = useState(false);

 return (
  <div className="navbar sticky flex items-center shadow-md md:flex md:items-center md:justify-between md:w-full top-0 left-0 z-[2] dark:bg-light">
   <div className="cursor-pointer flex items-center">
    {mounted && (
     <Link href="/">
      <img src={theme === "dark" ? `/images/logoLight.svg` : `${"http://127.0.0.1:1337" + themeInfo?.logoImg?.url || "/images/logo.svg"}`} className="xxs:w-3/5 md:w-full" />
     </Link>
    )}
   </div>

   <div className="flex text-3xl absolute right-4 cursor-pointer md:hidden">
    <ThemeSwitcher className="text-xl" />
    <ion-icon onClick={() => setOpen(!open)} name={open ? "close-outline" : "menu-outline"}></ion-icon>
   </div>

   <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[2] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "nav-open mt-0 dark:bg-darkmode-light " : "top-[-490px] bg-transparent"} `}>
    {Links.map((link) => (
     <li key={link.name} className={`${link.name === "Categories" ? "xxs:block md:hidden md:ml-8 text-xl md:my-0 my-7 " : "md:ml-8 text-xl md:my-0 my-7 "}`}>
      <Link href={link.link} className={router?.asPath === `${link.link}` ? `nav-item active text-light dark:border dark:bg-darkmode-light md:py-11 md:px-5 dark:text-darkmode-dark` : `nav-item text-light dark:text-darkmode-dark`}>
       {link.name}
      </Link>
     </li>
    ))}
    <Link href="/contact" className="nav-btn text-light px-6 py-4 rounded md:ml-8 md:flex md:hidden bg-button hover:bg-btn_hover dark:bg-darkmode-button dark:hover:bg-darkmode-btn_hover">
     Get In Touch
    </Link>
   </ul>
   <div className="flex justify-center items-center">
    <ThemeSwitcher className="xxs:hidden md:block" />
    <Link href="/contact" className="nav-btn text-light px-6 rounded md:ml-8 md:flex hidden  bg-button hover:bg-btn_hover dark:bg-darkmode-button dark:hover:bg-darkmode-btn_hover">
     Get In Touch
    </Link>
   </div>
  </div>
 );
};

export default Navbar;
