import React, { useState } from "react";
import BaseNew from "./BaseNew";
import ContactInfo from "./ContactInfo";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const ContactNew = () => {
 const [contact, setContact] = useState({});

 const templateParams = {
  to_email: "dummuymail@gmail.com",
  to_name: "Athh Technology",
  from_name: contact.name,
  from_email: contact.email,
  message: contact.message,
  project: contact.project,
  budget: contact.budget,
 };

 const handleChange = (e) => {
  setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(process.env.NEXT_PUBLIC_SERVICEID, process.env.NEXT_PUBLIC_TEMPLATEID, templateParams, process.env.NEXT_PUBLIC_PUBLICKEY).then(
   (response) => {
    toast.success("Success!");
   },
   (err) => {
    console.log("Failed...", err);
   }
  );
 };

 return (
  <div className="contact-main">
   <BaseNew image="/images/contactbanner.png" isBanner={true}>
    <div className="contact-container">
     <div className="contact-inner grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xxs:mx-6 md:mx-8 md:gap-4">
      <div>
       <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
        <p className="contact-title">CONTACT</p>
        <p className="contact-desc">
         Hey! Tell us all <img src="/images/hello.png" />
        </p>
        <p className="contact-desc" style={{ lineHeight: "6px" }}>
         the things
        </p>
        <p className="contact-smd mt-14">I'm interested in...</p>
        <div className="cont-tabs">
         <span className={`cont-tab`}>Site from scratch</span>
         <span className={`cont-tab`}>App from scratch</span>
         <span className={`cont-tab`}>UX/UI design</span>
         <span className={`cont-tab`}>Blockchain</span>
         <span className={`cont-tab`}>Mobile development</span>
         <span className={`cont-tab`}>Web development</span>
         <span className={`cont-tab`}>Website</span>
         <span className={`cont-tab`}>Maintenance</span>
        </div>
        <input className="contact-input" placeholder="Your Name" name="name" onChange={(e) => handleChange(e)} />
        <input className="contact-input" placeholder="Your Email" name="email" onChange={(e) => handleChange(e)} />
        <input className="contact-input" placeholder="Tell us about your project" name="project" onChange={(e) => handleChange(e)} />
        <input className="contact-input" placeholder="Project Budget" name="budget" onChange={(e) => handleChange(e)} />
        <input className="contact-input" placeholder="Message" name="message" onChange={(e) => handleChange(e)} />
        <div className="flex items-center gap-4 mb-4">
         <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
         </label>
         <p>
          I agree to the{" "}
          <Link href="/privacy-policy" className="border-b">
           privacy agreement.
          </Link>{" "}
         </p>
        </div>

        <button className="contact-btn" type="submit">
         Send Request
        </button>
       </form>
      </div>
      <div className="xxs:mt-10 md:flex md:justify-end ">
       <ContactInfo />
      </div>
     </div>
    </div>
   </BaseNew>
  </div>
 );
};

export default ContactNew;
