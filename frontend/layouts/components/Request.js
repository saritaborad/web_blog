import Link from "next/link";
import React from "react";

const Request = () => {
 return (
  <div className="req">
   <div className="req-content">
    <p className="req-title">LET'S WORK TOGETHER</p>
    <p className="req-txt">Want to kick start your project right now?</p>

    <Link href="/contact" className="req-btn">
     <p className="req-btn-txt">Request A Proposal</p>
     <img src="/images/bigarrow.svg" alt="img" />
    </Link>
   </div>
  </div>
 );
};

export default Request;
