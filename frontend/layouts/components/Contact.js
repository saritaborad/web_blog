import React, { useState } from "react";
import Base from "./Base";
import ContactInfo from "./ContactInfo";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useContactInfo } from "@/hooks/customHook";

let arr = [];
const Contact = () => {
 const [contact, setContact] = useState({});
 const info = useContactInfo();

 let interest = ["Site from scratch", "App from scratch", "UX/UI design", "Blockchain", "Mobile development", "Web development", "Website", "Maintenance"];

 const templateParams = {
  to_email: "dummuymail@gmail.com",
  to_name: "Athh Technology",
  from_name: contact.name,
  from_email: contact.email,
  interested: contact.interested?.map((item) => `${item},`).join(""),
  message: contact.message,
  project: contact.project,
  budget: contact.budget,
 };

 const handleChange = (e) => setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));

 const handleInterest = (e, i) => {
  if (document.getElementById(`tab${i}`)) {
   document?.getElementById(`tab${i}`).classList.toggle("active");
   if (arr.includes(e.target.innerHTML)) {
    arr = arr.filter((item) => item !== e.target.innerHTML);
    document?.getElementById(`tab${i}`).classList.remove("dark:bg-tab_hover");
   } else {
    document?.getElementById(`tab${i}`).classList.add("dark:bg-tab_hover");
    arr.push(e.target.innerHTML);
   }
  }

  setContact((prev) => ({ ...prev, interested: arr }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(process.env.NEXT_PUBLIC_SERVICEID, process.env.NEXT_PUBLIC_TEMPLATEID, templateParams, process.env.NEXT_PUBLIC_PUBLICKEY).then(
   (response) => {
    toast.success("Success!");
    setContact({});
   },
   (err) => {
    console.log("Failed...", err);
   }
  );
 };

 return (
  <div className="contact-main">
   <Base image={info?.bannerImg?.url ? "http://127.0.0.1:1337" + info?.bannerImg?.url : "/images/contactbanner.png"} isBanner={true} meta_img={"/images/contactbanner.png"} meta_title={"Contact us"} meta_description={"contact"}>
    <div className="contact-container">
     <div className="contact-inner grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xxs:mx-6 md:mx-8 md:gap-4">
      <div>
       <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
        <p className="contact-title">CONTACT</p>
        <p className="contact-desc dark:text-darkmode-dark">
         Hey! Tell us all <img src="/images/hello.png" />
        </p>
        <p className="contact-desc dark:text-darkmode-dark" style={{ lineHeight: "6px" }}>
         the things
        </p>
        <p className="contact-smd mt-14 dark:text-darkmode-dark">I'm interested in...</p>
        <div className="cont-tabs">
         {interest.map((item, i) => {
          return (
           <span key={i} className={`cont-tab dark:bg-darkmode-catBtn dark:hover:bg-darkmode-catBtn_hover`} id={`tab${i}`} onClick={(e) => handleInterest(e, i)}>
            {item}
           </span>
          );
         })}
        </div>
        <input className="contact-input dark:border-border dark:placeholder:text-darkmode-dark focus:ring-0" type="text" autoComplete="off" placeholder="Your Name" name="name" onChange={(e) => handleChange(e)} />
        <input className="contact-input dark:border-border dark:placeholder:text-darkmode-dark focus:ring-0" type="email" autoComplete="off" placeholder="Your Email" name="email" onChange={(e) => handleChange(e)} />
        <input className="contact-input dark:border-border dark:placeholder:text-darkmode-dark focus:ring-0" type="text" autoComplete="off" placeholder="Tell us about your project" name="project" onChange={(e) => handleChange(e)} />
        <input className="contact-input dark:border-border dark:placeholder:text-darkmode-dark focus:ring-0" type="text" autoComplete="off" placeholder="Project Budget" name="budget" onChange={(e) => handleChange(e)} />
        <input className="contact-input dark:border-border dark:placeholder:text-darkmode-dark focus:ring-0" type="text" autoComplete="off" placeholder="Message" name="message" onChange={(e) => handleChange(e)} />
        <div className="flex items-center gap-4 mb-4">
         <label className="switch ">
          <input type="checkbox" />
          <span className="slider dark:bg-darkmode-button"></span>
         </label>
         <p>
          I agree to the{" "}
          <Link href="/privacy-policy" className="border-b">
           privacy agreement
          </Link>{" "}
         </p>
        </div>

        <button className="contact-btn dark:bg-darkmode-button dark:hover:bg-darkmode-btn_hover dark:text-light" type="submit">
         Send Request
        </button>
       </form>
      </div>
      <div className="xxs:mt-10 md:flex md:justify-end">
       <ContactInfo info={info} />
      </div>
     </div>
    </div>
   </Base>
  </div>
 );
};

export default Contact;
