import React from 'react';
import { IoMdArrowDropupCircle } from "react-icons/io";
import "./scrollup.css"

const Scrollup = () => {
    window.addEventListener("scroll", function(){
        const scrollUp = document.querySelector(".scrollup");
        if(this. screenY >= 560 ) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })
  return (
    <a href="#" className="scrollup"><i className="uil ui -arrow-up scrollup__icon"><IoMdArrowDropupCircle /></i></a>
  )
}

export default Scrollup