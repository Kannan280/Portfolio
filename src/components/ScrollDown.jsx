import React from 'react';
import { MdMouse } from "react-icons/md";
import { CiSaveDown2 } from "react-icons/ci";

const ScrollDown = () => {
  return (
   <div className="home__scroll">
    <a href="#about" className="home__scroll-button button--flex">
        <i className="uil uil-mouse"><MdMouse /></i>
        <span className="home__scroll-name">Scroll Down</span>
        <i className="uil uil-arrow-down home__scroll-arrow"><CiSaveDown2 /></i>
    </a>
   </div>
  )
}

export default ScrollDown