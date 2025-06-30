import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Otherskills from "./Otherskills";

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Technical Proficiency</h2>
      <span className="section__subtitle">The Tech Behind My Work</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Otherskills />
      </div>
    </section>
  );
};

export default Skills;
