import React from "react";
import BaseNew from "./BaseNew";

const AboutNew = () => {
 return (
  <div className="about-container ">
   <BaseNew image={"/images/aboutbanner.png"} isBanner={true}>
    <div className="about-sec1   xxs:px-4 xxs:my-8 md:p-0">
     <div className="sec1-main gap-2">
      <div className="sec1-sub gap-4">
       <p className="sec1-title">ABOUT US</p>
       <div className="sec1-content">
        <p className="sec1-subtitle">How We Started?</p>
        <p className="sec1-desc">Long story short, we were born as a digital house 12 years ago. Our foundational strength in digital could not have better prepared us as we evolved into a full-service marketing and branding agency.</p>
       </div>
       <div className="sec1-content">
        <p className="sec1-subtitle">Where We Are Now?</p>
        <p className="sec1-desc">We take pride in saying that we became the ideal agency to help you tell your story relating to your products and services. We believe in making your experience more memorable. This is what we consider an effective way to make a strong connection with your clients. We will helped many clients to create their custom solutions ranging from dynamic web styles/designs to cutting-edge marketing strategies and digital plans. We believe that our digital web designs and digital services will transcend future trends.</p>
       </div>
       <div className="sec1-content">
        <p className="sec1-subtitle">How We Can Help?</p>
        <p className="sec1-desc">We will partner with Real Estate Agents, SMBs, start-ups, and people to unlock their real potential value via technology, creativity, and business-minded critical thinking. We take pride in ourselves as we deliver an innovative and unique digital experience that can make a huge impact.</p>
       </div>
      </div>

      <img className="about-img  xxs:hidden xs:hidden sm:hidden md:block md:w-3/6 lg:w-3/5 xl:w-3/5 2xl:w-4/5 3xl:w-full" src="/images/group25.png" />
     </div>
    </div>
    <div className="about-sec2  sm:min-h-[850px]">
     <div className="sec2-main xxs:mx-4  ">
      <div className="sec2-sub xxs:flex xxs:gap-4">
       <div className="sec2-content ">
        <p className="sec2-txt xxs:text-2xl md:text-3xl">OUR VISION</p>
        <p className="sec2-desc  xxs:text-lg md:text-2xl">To bring innovative web and app development solutions to clients so they can have optimal customer relations. We work hard to continuously deliver top-tier services without compromising quality.</p>
       </div>
       <div className="sec2-img">
        <img src="/images/about3.png" className="aboutImg xss:w-1/5 sm:w-3/4" />
       </div>
      </div>
      <div className="sec2-sub xxs:flex xxs:gap-4">
       <div className="sec2-img">
        <img src="/images/about4.png" className="aboutImg xss:w-1/5 sm:w-3/4" />
       </div>
       <div className="sec2-content">
        <p className="sec2-txt xxs:text-2xl md:text-3xl">OUR MISSION</p>
        <p className="sec2-desc  xxs:text-lg md:text-2xl">It is our personal mission to develop innovative and cost-effective web/mobile-based IT solutions for our clients and their stakeholders. We want to help you boost not only your productivity but profitability. Differenz System enables clients to work anywhere and anytime, with an ironclad guarantee to deliver solutions on time and with 24/7 support.</p>
       </div>
      </div>
     </div>
    </div>
    <div className="about-sec3 flex justify-center items-center">
     <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
      <div className="sec3-sub">
       <p className="sec3-num">01</p>
       <span className="sec3-line"></span>
       <p className="sec3-title">Design</p>
       <p className="sec3-desc">
        I design unique, captivating and digital designs user-friendly, based on your branding company and on a careful analysis of needs and goals.
        <br />
        <br />
        Just so I can launch websites that bring concrete results, by telling successfully the story behind yours brand.
       </p>
      </div>
      <div className="sec3-sub">
       <p className="sec3-num">02</p>
       <span className="sec3-line"></span>
       <p className="sec3-title">Development</p>
       <p className="sec3-desc">
        I create customized, developed websites from scratch and perfectly adapted to the design.
        <br />
        <br />I focus on usability, accessibility, interactions and performance. All supported from a modern platform for the content management.
       </p>
      </div>
      <div className="sec3-sub">
       <p className="sec3-num">03</p>
       <span className="sec3-line"></span>
       <p className="sec3-title">Full service</p>
       <p className="sec3-desc">
        A complete website from conception to realization, supported by a plan of hosting and timely maintenance ed efficient. This is what sets me apart.
        <br />
        <br />
        When necessary I collaborate with one strong network of content partners e branding.
       </p>
      </div>
     </div>
    </div>
   </BaseNew>
  </div>
 );
};

export default AboutNew;
