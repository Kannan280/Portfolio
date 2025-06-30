import React from "react";
import "./about.css";
import Aboutimg from "../assets/about.jpg";
import CV from "../assets
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">A Bit About Me</h2>
      <span className="section__subtitle">A Brief Overview</span>

      <div className="about__container container grid">
        <img src={Aboutimg} alt="" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">
            I'm a MERN Stack Developer passionate about creating scalable and
            high-performance web applications. With expertise in MongoDB,
            Express.js, React.js, and Node.js, I specialize in building seamless
            user experiences and efficient backend systems. Currently interning
            at Bigziel Technologies, I’m constantly exploring new technologies
            and refining my skills to develop innovative, future-ready
            solutions. Always exploring new technologies, I turn ideas into
            reality with clean code and innovative problem-solving.
          </p>
          <a download="" href={CV} className="button button--flex">
            Download CV{" "}
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/fluency-systems-regular/48/document--v1.png"
              fill="var(--container-color)"
              alt="document--v1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
