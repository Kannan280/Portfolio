import React from "react";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Kannan D{" "}
        <img
          width="45"
          height="45"
          src="https://img.icons8.com/emoji/48/hand-with-fingers-splayed-emoji.png"
          alt="hand-with-fingers-splayed-emoji"
          className="home__hand"
        />
      </h1>
      <h3 className="home__subtitle">Full Stack Developer</h3>
      <p className="home__description">
        I'm a passionate MERN Stack Developer, dedicated to crafting dynamic and
        scalable web experiences with precision and innovation
      </p>
      <a href="#contact" className="button button--flex">
        Start Something Amazing
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/emoji/48/waving-hand-emoji.png"
          alt="waving-hand-emoji"
          fill="var(--body-color)"
        />
      </a>
    </div>
  );
};

export default Data;
