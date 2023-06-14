import React from "react";

const ContactInfo = () => {
 return (
  <div className="info">
   <div className="info-main xxs:ml-4 sm:ml-10">
    <p className="info-title xxs:text-3xl lg:text-4xl xxs:mb-10 sm:mb-8">Let's keep in touch.</p>
    <div className="info-content">
     <p className="info-t xxs:text-2xl lg:text-3xl">Verselix</p>
     <p className="info-d xxs:text-xl lg:text-2xl">Contact us to discuss your project, request a project estimation, or just to network.</p>
    </div>
    <div className="info-address mt-5">
     <p className="info-c mb-2 xxs:text-xl lg:text-2xl">india</p>
     <p className="info-a xxs:text-base lg:text-lg">436, Mahek icon, Near- Sumul Dairy, Katargam road, Surat -Gujarat, INDIA</p>
    </div>
    <button className="req-btn mt-10">
     <p className="req-btn-txt">Get Direction</p>
     <img src="/images/arrow.svg" alt="img" />
    </button>
    <div className="info-icon mt-10">
     <div className="flex justify-between gap-4">
      <img src="/images/skype.png" />
      <p style={{ fontFamily: "Helvetica Now Display,sans-serif" }}>verselix.io</p>
     </div>
     <div className="flex justify-between gap-4">
      <img src="/images/email.png" />
      <p style={{ fontFamily: "Helvetica Now Display,sans-serif" }}>info@support.com</p>
     </div>
     <div className="flex justify-between items-center gap-4">
      <img src="/images/telephone.png" />
      <p style={{ fontFamily: "Helvetica Now Display,sans-serif" }}>+91 987 654 3210</p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default ContactInfo;
