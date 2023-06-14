import React, { useState } from "react";
import Social from "./Social";
import Link from "next/link";

const FooterNew = () => {
 const [email, setEmail] = useState();
 let social = { twitter: "https://www.twitter.com", facebook: "https://www.facebook.com", linkedin: "https://www.linkedin.com", instagram: "https://www.instagram.com" };

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(email);
 };

 return (
  //   <div className="mx-auto">
  <div className="footer grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
   <div className="footer-sec1 p-6 xs:px-0 xxs:px-0">
    <Link href="/">
     <img src="/images/logo.svg" />
    </Link>
    <div className="">
     <Social source={social} className="footer-social" />
    </div>
    <span className="footer-copy xs:hidden md:block">Copyright © Verselix LLP 2023</span>
   </div>
   <div className="footer-sec2">
    <Link href="/about" className="f-sec2">
     About
    </Link>
    <Link href="/" className="f-sec2">
     Services
    </Link>
    <Link href="/" className="f-sec2">
     Industries
    </Link>
   </div>
   <div className="footer-sec3">
    <Link href="/" className="f-sec3">
     Portfolio
    </Link>
    <Link href="/" className="f-sec3">
     Blogs
    </Link>
    <Link href="/" className="f-sec3">
     Career
    </Link>
   </div>
   <div className="footer-sec4">
    <Link href="/privacy-policy" className="f-sec4">
     Privacy Policy
    </Link>
    <Link href="/" className="f-sec4">
     Terms & Conditions
    </Link>
   </div>
   <div className="footer-sec5">
    <p className="f-sec5-title">Supercharge your inbox</p>
    <p className="f-sec5-desc">Sign up for our developer newsletter:</p>
    <form className="f-sec5-content" onSubmit={(e) => handleSubmit(e)}>
     <input placeholder="Enter Email" name="email" onChange={(e) => setEmail(e.target.value)} className="p-2 w-2/3 xs:p-0  xxs:placeholder:text-sm   md:placeholder:text-lg" />
     <button className="f-sec5-btn w-1/3 xs:w-1/4" type="submit">
      <img src="/images/arrow.svg" />
     </button>
    </form>
   </div>
   <span className="footer-copy sm:block xxs:py-6 md:hidden">Copyright © Verselix LLP 2023</span>
  </div>
  //   </div>
 );
};

export default FooterNew;
