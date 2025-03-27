import React from "react";
import { FaAward } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";


const Info = () => {
  return (
    <div className="about__info grid ">
      <div className="about__box">
        <i className="bx bx-award about__icon"><FaAward /></i>
        <h3 className="about__title">Experience</h3>
          <span className="about__subtitle">0.3 Years</span>
        
      </div>

      <div className="about__box">
      <i className="bx bx-briefcase-alt about__icon"><HiBriefcase /></i>
        <h3 className="about__title">Completed   </h3>
        
          <span className="about__subtitle">5+ Projects</span>
      
      </div>

      <div className="about__box">
      <i className="bx bx-support about__icon"><BiSupport /></i>
        <h3 className="about__title">Guidance</h3>
       
          <span className="about__subtitle">24/7</span>
        
      </div>
    </div>
  );
};

export default Info;
