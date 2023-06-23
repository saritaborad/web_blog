import React, { useState } from "react";
import Social from "./Social";
import Link from "next/link";
import axios from "axios";
import { useMounted, useThemeInfo } from "@/hooks/customHook";
import { useTheme } from "next-themes";

const FooterNew = () => {
 const [email, setEmail] = useState();
 const themeInfo = useThemeInfo();
 const { theme } = useTheme();
 const mounted = useMounted();

 let social = { twitter: "https://www.twitter.com", facebook: "https://www.facebook.com", linkedin: "https://www.linkedin.com", instagram: "https://www.instagram.com" };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   const res = await axios.post("http://127.0.0.1:1337/api/email/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(email) });
  } catch (error) {
   console.log(error.message);
  }
 };

 return (
  <div className="footer grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
   <div className="footer-sec1 p-6 xs:px-0 xxs:px-0">
    {mounted && (
     <Link href="/">
      <img src={theme === "dark" ? `/images/logoLight.svg` : `${"http://127.0.0.1:1337" + themeInfo?.logoImg?.url || "/images/logo.svg"}`} />
     </Link>
    )}

    <div className="">
     <Social source={social} className="footer-social dark:text-darkmode-dark pl-4" />
    </div>
    <span className="footer-copy xs:hidden md:block pl-4">Copyright © Verselix LLP 2023</span>
   </div>
   <div className="footer-sec2 ">
    <Link href="/about" className="f-sec2 dark:text-darkmode-dark">
     About
    </Link>
    <Link href="/" className="f-sec2 dark:text-darkmode-dark">
     Services
    </Link>
    <Link href="/" className="f-sec2 dark:text-darkmode-dark">
     Industries
    </Link>
   </div>
   <div className="footer-sec3">
    <Link href="/" className="f-sec3 dark:text-darkmode-dark">
     Portfolio
    </Link>
    <Link href="/" className="f-sec3 dark:text-darkmode-dark">
     Blogs
    </Link>
    <Link href="/" className="f-sec3 dark:text-darkmode-dark">
     Career
    </Link>
   </div>
   <div className="footer-sec4">
    <Link href="/privacy-policy" className="f-sec4 dark:text-darkmode-dark">
     Privacy Policy
    </Link>
    <Link href="/" className="f-sec4 dark:text-darkmode-dark">
     Terms & Conditions
    </Link>
   </div>
   <div className="footer-sec5">
    <p className="f-sec5-title">Supercharge your inbox</p>
    <p className="f-sec5-desc dark:text-darkmode-dark">Sign up for our developer newsletter:</p>
    <form className="f-sec5-content dark:bg-dark " onSubmit={(e) => handleSubmit(e)}>
     <input placeholder="Enter Email" type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="p-2 w-2/3  xs:p-0  xxs:placeholder:text-sm  md:placeholder:text-lg dark:placeholder:text-darkmode-dark focus:ring-0" autoComplete="off" />
     <button className="f-sec5-btn w-1/3 xs:w-1/4 dark:bg-darkmode-button dark:hover:bg-darkmode-btn_hover" type="submit">
      <img src="/images/arrow.svg" />
     </button>
    </form>
   </div>
   <span className="footer-copy sm:block xxs:py-6 md:hidden">Copyright © Verselix LLP 2023</span>
  </div>
 );
};

export default FooterNew;
