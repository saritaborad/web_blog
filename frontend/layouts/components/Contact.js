import React, { useState } from "react";
import Base from "./Base";
import ContactInfo from "./ContactInfo";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const Contact = () => {
 const [contact, setContact] = useState({});
 let interest = ["Site from scratch", "App from scratch", "UX/UI design", "Blockchain", "Mobile development", "Web development", "Website", "Maintenance"];

 const templateParams = {
  to_email: "dummuymail@gmail.com",
  to_name: "Athh Technology",
  from_name: contact.name,
  from_email: contact.email,
  interested: contact.interested,
  message: contact.message,
  project: contact.project,
  budget: contact.budget,
 };

 const handleChange = (e) => setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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
   <Base image="/images/contactbanner.png" isBanner={true}>
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
         {interest.map((item, i) => {
          return (
           <span key={i} className={`cont-tab`} onClick={(e) => setContact((prev) => ({ ...prev, interested: e.target.innerHTML }))}>
            {item}
           </span>
          );
         })}
        </div>
        <input className="contact-input focus:ring-0" type="text" autoComplete="off" placeholder="Your Name" name="name" onChange={(e) => handleChange(e)} />
        <input className="contact-input focus:ring-0" type="email" autoComplete="off" placeholder="Your Email" name="email" onChange={(e) => handleChange(e)} />
        <input className="contact-input focus:ring-0" type="text" autoComplete="off" placeholder="Tell us about your project" name="project" onChange={(e) => handleChange(e)} />
        <input className="contact-input focus:ring-0" type="text" autoComplete="off" placeholder="Project Budget" name="budget" onChange={(e) => handleChange(e)} />
        <input className="contact-input focus:ring-0" type="text" autoComplete="off" placeholder="Message" name="message" onChange={(e) => handleChange(e)} />
        <div className="flex items-center gap-4 mb-4">
         <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
         </label>
         <p>
          I agree to the{" "}
          <Link href="/privacy-policy" className="border-b">
           privacy agreement.list-decimal
          </Link>{" "}
         </p>
        </div>

        <button className="contact-btn" type="submit">
         Send Request
        </button>
       </form>
      </div>
      <div className="xxs:mt-10 md:flex md:justify-end">
       <ContactInfo />
      </div>
     </div>
    </div>
   </Base>
  </div>
 );
};

export default Contact;
