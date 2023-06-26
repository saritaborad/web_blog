import Link from "next/link";
import React from "react";

const ContactInfo = ({ info }) => {
 return (
  <div className="info dark:bg-light dark:border">
   <div className="info-main xxs:ml-4 sm:ml-10">
    <p className="info-title xxs:text-3xl lg:text-4xl xxs:mb-10 sm:mb-8 text-light dark:text-darkmode-dark">{info?.title || "Let's keep in touch."}</p>
    <div className="info-content">
     <p className="info-t xxs:text-2xl lg:text-3xl text-light dark:text-darkmode-dark">{info?.cname || "Verselix"}</p>
     <p className="info-d xxs:text-xl lg:text-2xl ">{info?.description || "Contact us to discuss your project, request a project estimation, or just to network."}</p>
    </div>
    <div className="info-address mt-5">
     <p className="info-c mb-2 xxs:text-xl lg:text-2xl dark:text-darkmode-dark">{info?.country || "india"}</p>
     <p className="info-a xxs:text-base lg:text-lg dark:text-darkmode-dark">{info?.address || "436, Mahek icon, Near- Sumul Dairy, Katargam road, Surat -Gujarat, INDIA"}</p>
    </div>
    <Link className="req-btn mt-10 dark:bg-darkmode-button dark:hover:bg-darkmode-btn_hover" href="https://www.google.com/maps?q=Athh+Technologies+LLP%2C+436%2C+Mahek+Icon%2C+Sumul+Dairy+Rd%2C+Katargam%2C+Surat%2C+Gujarat+395003%2C+India" target="_blank">
     <p className="req-btn-txt text-light bg-button hover:bg-btn_hover dark:text-light">{info?.btnText || "Get Direction"}</p>
     <img src="/images/arrow.svg" alt="img" />
    </Link>
    <div className="info-icon mt-10">
     <div className="flex justify-between gap-4">
      <img src="/images/skype.png" />
      <Link className="text-light dark:text-darkmode-dark" href="#" style={{ fontFamily: "Helvetica Now Display,sans-serif" }}>
       {info?.webLink || "verselix.io"}
      </Link>
     </div>
     <div className="flex justify-between gap-4">
      <img src="/images/email.png" />
      <Link className="text-light dark:text-darkmode-dark" href={`mailto:${info?.email}`} style={{ fontFamily: "Helvetica Now Display,sans-serif" }}>
       {info?.email || "info@support.com"}
      </Link>
     </div>
     <div className="flex justify-between items-center gap-4">
      <img src="/images/telephone.png" />
      <Link className="text-light dark:text-darkmode-dark" href={`tel:${info?.phone}`} style={{ fontFamily: "Helvetica Now Display,sans-serif" }}>
       {info?.phone || "+91 987 654 3210"}
      </Link>
     </div>
    </div>
   </div>
  </div>
 );
};

export default ContactInfo;
