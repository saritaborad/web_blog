import { useReqData } from "@/hooks/customHook";
import Link from "next/link";
import React from "react";

const Request = () => {
 const req = useReqData();

 return (
  <div className="req dark:bg-darkmode-theme-light ">
   <div className="req-content ">
    <p className="req-title ">{req?.title || "LET'S WORK TOGETHER"}</p>
    <p className="req-txt dark:text-darkmode-theme-dark">{req?.description || "Want to kick start your project right now?"}</p>

    <Link href="/contact" className="req-btn dark:bg-darkmode-button dark:hover:bg-darkmode-btn_hover">
     <p className="req-btn-txt ">{req?.btnText || "Request A Proposal"}</p>
     <img src="/images/bigarrow.svg" alt="img" />
    </Link>
   </div>
  </div>
 );
};

export default Request;
