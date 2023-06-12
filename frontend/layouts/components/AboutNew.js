import React from "react";
import BaseNew from "./BaseNew";

const AboutNew = () => {
 return (
  <div className="about-container">
   <BaseNew image={"/images/aboutbanner.png"} isBanner={true}>
    <div className="about-sec1">
     <div className="sec1-main">
      <div className="sec1-sub">
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

      <img className="about-img" src="/images/group25.png" />
     </div>
    </div>
    <div className="about-sec2">
     <div className="sec2-main">
      <div className="sec2-sub">
       <div className="sec2-content">
        <p className="sec2-txt">OUR VISION</p>
        <p className="sec2-desc">To bring innovative web and app development solutions to clients so they can have optimal customer relations. We work hard to continuously deliver top-tier services without compromising quality.</p>
       </div>
       <div className="sec2-img">
        <img src="/images/about3.png" width="397px" height="394px" />
       </div>
      </div>
      <div className="sec2-sub">
       <div className="sec2-img">
        <img src="/images/about4.png" width="397px" height="394px" />
       </div>
       <div className="sec2-content">
        <p className="sec2-txt">OUR MISSION</p>
        <p className="sec2-desc">It is our personal mission to develop innovative and cost-effective web/mobile-based IT solutions for our clients and their stakeholders. We want to help you boost not only your productivity but profitability. Differenz System enables clients to work anywhere and anytime, with an ironclad guarantee to deliver solutions on time and with 24/7 support.</p>
       </div>
      </div>
     </div>
    </div>
    <div className="about-sec3">
     <div className="sec3-main">
      <div className="sec3-sub">
       <p className="sec3-num">01</p>
       <span className="sec3-line"></span>
       <p className="sec3-title">Design</p>
       <p className="sec3-desc">I design unique, captivating and digital designs user-friendly, based on your branding company and on a careful analysis of needs and goals. Just so I can launch websites that bring concrete results, by telling successfully the story behind yours brand.</p>
      </div>
      <div className="sec3-sub">
       <p className="sec3-num">02</p>
       <span className="sec3-line"></span>
       <p className="sec3-title">Development</p>
       <p className="sec3-desc">I create customized, developed websites from scratch and perfectly adapted to the design. I focus on usability, accessibility, interactions and performance. All supported from a modern platform for the content management.</p>
      </div>
      <div className="sec3-sub">
       <p className="sec3-num">03</p>
       <span className="sec3-line"></span>
       <p className="sec3-title">Full service</p>
       <p className="sec3-desc">A complete website from conception to realization, supported by a plan of hosting and timely maintenance ed efficient. This is what sets me apart. When necessary I collaborate with one strong network of content partners e branding.</p>
      </div>
     </div>
    </div>
   </BaseNew>
  </div>
 );
};

export default AboutNew;
