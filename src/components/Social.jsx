import React from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { GrGithub } from "react-icons/gr";
import { AiOutlineLinkedin } from "react-icons/ai";

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/_dk_280_/" className="home__social-icon" target=' _blank'>
            <i className="uil uil-instagram"><AiOutlineInstagram /></i>
        </a>

        <a href="https://mail.google.com/mail/u/0/#inbox/FMfcgzQZTpwsPkcGdTCVDvWgMDNLVDnC?compose=CllgCJfmrkhshsMgpzDCmcTsxQLQGSMxlJPgSmnnmsBKnrKFgTDMxggxskxjxcnNbtrPfbXxsVq" className="home__social-icon" target=' _blank'>
            <i className="uil uil-email"><HiOutlineMail /></i>
        </a>

        <a href="https://github.com/Kannan280" className="home__social-icon" target=' _blank'>
            <i className="uil uil-github"><GrGithub /></i>
        </a>

        <a href="www.linkedin.com/in/kannan-d-560a51247" className="home__social-icon" target=' _blank'>
            <i className="uil uil-email"><AiOutlineLinkedin /></i>
        </a>

    </div>
  )
}

export default Social