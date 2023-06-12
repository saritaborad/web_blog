import React from "react";
import Social from "./Social";
import Link from "next/link";

const FooterNew = () => {
 let social = { twitter: "https://www.twitter.com", facebook: "https://www.facebook.com", linkedin: "https://www.linkedin.com", instagram: "https://www.instagram.com" };
 return (
  <div className="footer grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 ">
   <div className="footer-sec1 p-4 sm:justify-center ">
    <Link href="/">
     <img src="/images/logo.svg" />
    </Link>
    <div className="">
     <Social source={social} className="footer-social" />
    </div>
    <span className="footer-copy">Copyright © Verselix LLP 2023</span>
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
    <div className="f-sec5-content">
     <input placeholder="Enter Your Email" className="px-4 py-2" />
     <button className="f-sec5-btn ">
      <img src="/images/arrow.svg" />
     </button>
    </div>
   </div>
  </div>
 );
};

export default FooterNew;
