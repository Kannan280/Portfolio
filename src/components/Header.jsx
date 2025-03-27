import React, {useState} from 'react';
import "./header.css";
import { HiHome } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa"; 
import { LuFileSliders } from "react-icons/lu";
import { GrServices } from "react-icons/gr";
import { LuProjector } from "react-icons/lu";
import { LuSendHorizontal } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { RiAppsLine } from "react-icons/ri";


const Header = () => {
       /* Change Background Header */
    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header");
        if(this. screenY >= 80 ) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })
    /* Toggle menu */
    const [Toggle, showMenu] = useState(false);
    const [activenav, setactivenav] = useState("#home");
  return (
    <header className='header'>
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Kannan D</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list navlist grid">
                    <li className="nav__item">
                        <a href="#home" onClick={() => setactivenav("#home")} className={activenav === "#home" ? "nav__link active-link" : "nav__link active-link"}>
                            <i className="uil uil- nav__icon"><HiHome /></i> Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" onClick={() => setactivenav("#about")} className={activenav === "#about" ? "nav__link" : "nav__link "}>
                            <i className="uil uil- nav__icon"><FaRegUserCircle /></i> About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" onClick={() => setactivenav("#skills")} className={activenav === "#skills" ? "nav__link" : "nav__link "}>
                            <i className="uil uil- nav__icon"><LuFileSliders /></i> Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" onClick={() => setactivenav("#services")} className={activenav === "#services" ? "nav__link" : "nav__link "}>
                            <i className="uil uil- nav__icon"><GrServices /></i> Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" onClick={() => setactivenav("#portfolio")} className={activenav === "#portfollio" ? "nav__link" : "nav__link "}>
                            <i className="uil uil- nav__icon"><LuProjector /></i> Projects
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" onClick={() => setactivenav("#contact")} className={activenav === "#contact" ? "nav__link" : "nav__link "}>
                            <i className="uil uil- nav__icon"><LuSendHorizontal /></i> Contact
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)} ><IoMdClose /></i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"><RiAppsLine /></i>
            </div>
        </nav>
    </header>
  )
}

export default Header