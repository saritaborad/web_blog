import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
 let Links = [
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Privacy Policy", link: "/privacy-policy" },
 ];
 let [open, setOpen] = useState(false);

 return (
  <div className="navbar flex items-center shadow-md md:flex md:items-center md:justify-between md:w-full top-0 left-0 z-[2]">
   <div className="cursor-pointer flex items-center">
    <Link href="/">
     <img src="/images/logo.svg" />
    </Link>
   </div>

   <div onClick={() => setOpen(!open)} className="text-3xl absolute right-0  cursor-pointer md:hidden">
    <ion-icon name={open ? "close-outline" : "menu-outline"} style={{ color: "white" }}></ion-icon>
   </div>

   <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[2] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "nav-open mt-0" : "top-[-490px] bg-transparent"}`}>
    {Links.map((link) => (
     <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
      <Link href={link.link} className="nav-item md:hover:bg-#181621 md:hover:text-linkColor md:hover:border-b-[2px] md:hover:border-linkColor md:hover:py-11 md:hover:px-5">
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
