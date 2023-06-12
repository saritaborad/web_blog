import Link from "next/link";
import React from "react";

const Navbar = () => {
 return (
  <div className="navbar">
   <Link href="/">
    <img src="/images/logo.svg" />
   </Link>
   <div className="nav-menu">
    <Link className="nav-item" href="/">
     Home
    </Link>
    <Link className="nav-item" href="/about">
     About
    </Link>
    <Link className="nav-item" href="/contact">
     Contact
    </Link>
    <Link className="nav-item" href="/privacy-policy">
     Privacy Policy
    </Link>
   </div>
   <Link href="/contact" className="nav-btn">
    Get In Touch
   </Link>
  </div>
 );
};

export default Navbar;
