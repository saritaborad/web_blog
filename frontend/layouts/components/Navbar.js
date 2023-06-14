import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Navbar = () => {
 const router = useRouter();

 let Links = [
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Categories", link: "/categories" },
 ];
 let [open, setOpen] = useState(false);

 return (
  <div className="navbar  flex items-center shadow-md md:flex md:items-center md:justify-between md:w-full top-0 left-0 z-[2]">
   <div className="cursor-pointer flex items-center ">
    <Link href="/">
     <img src="/images/logo.svg" className="xxs:w-3/5 md:w-full" />
    </Link>
   </div>

   <div onClick={() => setOpen(!open)} className="text-3xl absolute right-4  cursor-pointer md:hidden">
    <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
   </div>

   <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[2] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "nav-open mt-0" : "top-[-490px] bg-transparent"}`}>
    {Links.map((link) => (
     <li key={link.name} className={`${link.name === "Categories" ? "xxs:block md:hidden md:ml-8 text-xl md:my-0 my-7" : "md:ml-8 text-xl md:my-0 my-7"}`}>
      <Link href={link.link} className={router?.asPath === `${link.link}` ? `nav-item active md:py-11 md:px-5` : `nav-item`}>
       {link.name}
      </Link>
     </li>
    ))}
    <Link href="/contact" className="nav-btn text-white px-6 py-4 rounded md:ml-8 md:flex md:hidden">
     Get In Touch
    </Link>
   </ul>
   <Link href="/contact" className="nav-btn text-white px-6 rounded md:ml-8 md:flex hidden">
    Get In Touch
   </Link>
  </div>
 );
};

export default Navbar;
