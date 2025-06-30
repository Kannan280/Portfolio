import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { HiComputerDesktop } from "react-icons/hi2";
import { MdDeveloperMode } from "react-icons/md";
import { TbDatabaseCog } from "react-icons/tb";
import "./services.css";

const Services = () => {
  const [Toggle, setToggle] = useState(0);
  const Toggletab = (index) => {
    setToggle(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Offerings</h2>
      <span className="section__subtitle">Turning Vision into Reality</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil services__icon">
              <HiComputerDesktop />
            </i>
            <h3 className="services__title">Interactive Web Development</h3>
            <span className="services__button" onClick={() => Toggletab(1)}>
              Dive In
              <i className="uil uil-arrow-right services__button-icon">
                <MdKeyboardDoubleArrowRight />
              </i>
            </span>

            <div
              className={
                Toggle === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => Toggletab(0)}
                  className="ui uil-times services__modal-close"
                >
                  <IoMdCloseCircle />
                </i>
                <h3 className="services__modal-title">
                  Client-Side Architecture
                </h3>
                <p className="services__modal-description">
                  Skilled in crafting responsive, user-friendly interfaces using
                  React.js, HTML, CSS, and JavaScript.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon">
                      <VscDebugBreakpointLog />
                    </i>
                    <p className="services__modal-info">
                      Responsive UI Design – Creating visually appealing and
                      mobile-friendly interfaces.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon">
                      <VscDebugBreakpointLog />
                    </i>
                    <p className="services__modal-info">
                      Efficient State Management – Handling data flow seamlessly
                      with React.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon">
                      <VscDebugBreakpointLog />
                    </i>
                    <p className="services__modal-info">
                      High-Performance UI – Optimizing speed and responsiveness.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon">
                      <VscDebugBreakpointLog />
                    </i>
                    <p className="services__modal-info">
                      Cross-Browser Compatibility – Developing consistent
                      designs across multiple browsers.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon">
                      <VscDebugBreakpointLog />
                    </i>
                    <p className="services__modal-info">
                      Interactive Components – Enhancing user engagement with
                      dynamic elements.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil services__icon">
              <MdDeveloperMode />
            </i>
            <h3 className="services__title">Server-Side Development</h3>
            <span className="services__button" onClick={() => Toggletab(2)}>
              Dive In
              <i className="uil uil-arrow-right services__button-icon">
                <MdKeyboardDoubleArrowRight />
              </i>
            </span>

            <div
              className={
                Toggle === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => Toggletab(0)}
                  className="ui uil-times services__modal-close"
                >
                  <IoMdCloseCircle />
                </i>
                <h3 className="services__modal-title">Backend Engineering</h3>
                <p className="services__modal-description">
                  Building robust server-side logic, handling authentication,
                  optimizing performance, and ensuring seamless API integration
                  using Node.js and Express.js.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon">
                      <VscDebugBreakpointLog />
                    </i>
                    <p className="services__modal-info">
                      Develop scalable server-side applications with Node.js and
                      Express.js.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon">
                      <VscDebugBreakpointLog />
                    </i>
                    <p className="services__modal-info">
                      Implement secure authentication and authorization
                      mechanisms.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon">
                      <VscDebugBreakpointLog />
                    </i>
                    <p className="services__modal-info">
                      Optimize backend performance for efficiency and speed.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon">
                      <VscDebugBreakpointLog />
                    </i>
                    <p className="services__modal-info">
                      Integrate and manage APIs for seamless communication.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon">
                      <VscDebugBreakpointLog />
                    </i>
                    <p className="services__modal-info">
                      Handle server-side logic to ensure smooth application
                      functionality.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil services__icon">
              <TbDatabaseCog />
            </i>
            <h3 className="services__title">Data Structuring & Optimization</h3>
            <span onClick={() => Toggletab(3)} className="services__button">
              Dive In
              <i className="uil uil-arrow-right services__button-icon">
                <MdKeyboardDoubleArrowRight />
              </i>
            </span>

            <div
              className={
                Toggle === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => Toggletab(0)}
                  className="ui uil-times services__modal-close"
                >
                  <IoMdCloseCircle />
                </i>
                <h3 className="services__modal-title">Information Storage</h3>
                <p className="services__modal-description">
                  Designing and managing efficient databases using MongoDB,
                  ensuring data integrity, security, and seamless integration
                  with backend systems for optimized performance.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon">
                      <VscDebugBreakpointLog />
                    </i>
                    <p className="services__modal-info">
                    Optimized Data Structures – Efficient database design for performance.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon">
                      <VscDebugBreakpointLog />
                    </i>
                    <p className="services__modal-info">
                    Seamless Integration – Connecting MongoDB with Node.js & Express.js.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon">
                      <VscDebugBreakpointLog />
                    </i>
                    <p className="services__modal-info">
                    Data Security – Ensuring safe storage with encryption & authentication.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon">
                      <VscDebugBreakpointLog />
                    </i>
                    <p className="services__modal-info">
                    Fast Queries – Using indexing for quick data retrieval.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon">
                      <VscDebugBreakpointLog />
                    </i>
                    <p className="services__modal-info">
                    Reliable Backups – Maintaining data integrity with regular backups.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
