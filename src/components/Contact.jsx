import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { IoSend } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";
import { AiFillInstagram } from "react-icons/ai";
import "./contact.css"



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ogoz8oq', 'template_cmuejdf', form.current, {
        publicKey: 'FDBPfXGAKDYt2sv9O',
      })
      e.target.reset()
  };
  return (
    <section className="section contact" id="contact">
      <h2 className="section__title">Let’s Connect & Collaborate</h2>
      <span className="section__subtitle">
        Great ideas start with a simple conversation. Let’s talk!
      </span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Share Your Ideas</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx contact__card-icon">
                <MdOutlineMailOutline />
              </i>
              <h3 className="contact__card-title">Drop Your Email Here</h3>
              <span className="contact__card-data">
                kannandk2803@gmail.com{" "}<br />
              </span>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWstxSQRSFFstSVzwlcWQZkDgRVHnQprXKmdlzmZVVPmXWnhrVTbfRVCqnsCVDgNcWlhfgVGq"
                className="contact__button"
              >
                Let's Go{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon">
                  <IoSend />
                </i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx contact__card-icon">
                <FaWhatsapp />
              </i>
              <h3 className="contact__card-title">
                Connect Instantly on WhatsApp!
              </h3>
              <span className="contact__card-data">+91-7010471140 <br /></span>
              <a href="https://wa.me/917010471140" className="contact__button">
              Connect{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon">
                  <IoSend />
                </i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx contact__card-icon">
                <RxLinkedinLogo />
              </i>
              <h3 className="contact__card-title">
                Expand Your Horizons – Connect on LinkedIn!
              </h3>
              <span className="contact__card-data">Kannan D <br /></span>
              <a
                href="www.linkedin.com/in/kannan-d-560a51247"
                className="contact__button"
              >
                Reach Out{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon">
                  <IoSend />
                </i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx contact__card-icon">
                <AiFillInstagram />
              </i>
              <h3 className="contact__card-title">
                Stay Inspired – Let’s Connect on Instagram!
              </h3>
              <span className="contact__card-data">Kannan D <br /></span>
              <a
                href="https://www.instagram.com/_dk_280_/"
                className="contact__button"
              >
                Make Contact{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon">
                  <IoSend />
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content ">
          <h3 className="contact__title">Innovate, Design, Inspire!</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div contact__">
              <label className="contact__form-tag">Full Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Let’s Get to Know You!"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Drop Your Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Type your email address..."
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project Details</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Describe Your Vision"
              ></textarea>
            </div>
            <button className="button button--flex">
            Drop a Message
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/emoji/48/waving-hand-emoji.png"
          alt="waving-hand-emoji"
          fill="var(--title-color)"
        />
      </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
