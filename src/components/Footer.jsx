import React from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">
                Kannan D
            </h1>
            <ul className="footer__list">
                <li>
                <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                <a href="#testmonials" className="footer__link">Achievements</a>
                </li>
            </ul>
            <div className="footer__social">
             <a href="https://www.instagram.com/_dk_280_/" className="footer__social-link" target=' _blank'>
                        <i className="uil uil-instagram"><AiOutlineInstagram /></i>
                    </a>
            
                    <a href="https://mail.google.com/mail/u/0/#inbox/FMfcgzQZTpwsPkcGdTCVDvWgMDNLVDnC?compose=CllgCJfmrkhshsMgpzDCmcTsxQLQGSMxlJPgSmnnmsBKnrKFgTDMxggxskxjxcnNbtrPfbXxsVq" className="footer__social-link" target=' _blank'>
                        <i className="uil uil-email"><HiOutlineMail /></i>
                    </a>
            
                    <a href="www.linkedin.com/in/kannan-d-560a51247" className="footer__social-link" target=' _blank'>
                        <i className="uil uil-email"><AiOutlineLinkedin /></i>
                    </a>

                    <a href="https://www.facebook.com/kannan.desigan" className="footer__social-link" target=' _blank'>
                        <i className="uil uil-email"><FaFacebookMessenger /></i>
                    </a>
        </div>
        <span className="footer__copy">Designed & Developed by Kannan D. © 2025 Kannan D – Ownership Reserved</span>
        </div>

        

    </footer>
  )
}

export default Footer