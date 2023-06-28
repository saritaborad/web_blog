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

 let social = { twitter: "https://twitter.com/Athh_Tech", facebook: "https://facebook.com/athhtech", linkedin: "https://in.linkedin.com/company/athh-technologies-llp", instagram: "https://www.instagram.com/athh_tech/?igshid=YmMyMTA2M2Y%3D" };

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
    <div className="flex items-center">
     <Link href="/" className="flex items-center">
      {mounted && <img src={theme === "dark" ? `/images/athhlogo.svg` : `${"http://127.0.0.1:1337" + themeInfo?.logoImg?.url || "/images/athhlogo.svg"}`} />}
      &nbsp;&nbsp;&nbsp;
      <h4 className="text-light dark:text-darkmode-dark">Athh Tech</h4>
     </Link>
    </div>
    <div className="">
     <Social source={social} className="footer-social text-light dark:text-darkmode-dark pl-4" />
    </div>
    <Link className="footer-copy xs:hidden md:block text-dark pl-4 cursor-pointer" href="https://athh.tech/">
     Copyright © Athh Technologies LLP 2016
    </Link>
   </div>
   <div className="footer-sec2 ">
    <Link href="https://athh.tech/#/about" className="f-sec2 text-light  dark:text-darkmode-dark">
     About
    </Link>
    <Link href="https://athh.tech/#/ourwork" className="f-sec2 text-light  dark:text-darkmode-dark">
     Our Work
    </Link>
    <Link href="https://athh.tech/#/services" className="f-sec2 text-light  dark:text-darkmode-dark">
     Services
    </Link>
   </div>
   <div className="footer-sec3">
    <Link href="https://athh.tech/#/contact" className="f-sec3 text-light  dark:text-darkmode-dark">
     Contact
    </Link>
    <Link href="https://athh.tech/#/servicesApp" className="f-sec3 text-light  dark:text-darkmode-dark">
     App development
    </Link>
    <Link href="https://athh.tech/#/servicesBlock" className="f-sec3  text-light dark:text-darkmode-dark">
     Blockchain
    </Link>
   </div>
   <div className="footer-sec4">
    <Link href="https://athh.tech/#/servicesGame" className="f-sec4  text-light dark:text-darkmode-dark">
     Game development
    </Link>
    <Link href="https://athh.tech/#/servicesUiUx" className="f-sec4  text-light dark:text-darkmode-dark">
     UI / UX design
    </Link>
   </div>
   <div className="footer-sec5">
    <p className="f-sec5-title">Supercharge your inbox</p>
    <p className="f-sec5-desc text-light dark:text-darkmode-dark">Sign up for our developer newsletter:</p>
    <form className="f-sec5-content dark:bg-dark " onSubmit={(e) => handleSubmit(e)}>
     <input placeholder="Enter Email" type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="p-2 w-2/3  xs:p-0  xxs:placeholder:text-sm  md:placeholder:text-lg dark:placeholder:text-darkmode-dark focus:ring-0" autoComplete="off" />
     <button className="f-sec5-btn w-1/3 xs:w-1/4 text-dark bg-button hover:bg-btn_hover dark:bg-darkmode-button dark:hover:bg-darkmode-btn_hover" type="submit">
      <img src="/images/arrow.svg" />
     </button>
    </form>
   </div>
   <Link className="footer-copy sm:block xxs:py-6 md:hidden cursor-pointer" href="https://athh.tech/">
    Copyright © Athh Technologies LLP 2016
   </Link>
  </div>
 );
};

export default FooterNew;
