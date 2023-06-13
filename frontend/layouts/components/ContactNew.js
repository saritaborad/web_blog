import React, { useState } from "react";
import BaseNew from "./BaseNew";
import ContactInfo from "./ContactInfo";
import Link from "next/link";

const ContactNew = () => {
 //  const { title, phone, mail, location, addresses } = data;
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
    <div className="contact-container ">
     <div className="contact-inner grid grid-cols-1 ">
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
        <button className={`cont-tab`}>Site from scratch</button>
        <button className={`cont-tab`}>App from scratch</button>
        <button className={`cont-tab`}>UX/UI design</button>
        <button className={`cont-tab`}>Blockchain</button>
        <button className={`cont-tab`}>Mobile development</button>
        <button className={`cont-tab`}>Web development</button>
        <button className={`cont-tab`}>Website</button>
        <button className={`cont-tab`}>Maintenance</button>
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
      <ContactInfo />
     </div>
    </div>
   </BaseNew>
  </div>
 );
};

export default ContactNew;
