import React, { useState } from "react";
import "./qualification.css";
import { RiGraduationCapFill } from "react-icons/ri";
import { CgBriefcase } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";

const Qualification = () => {
  const [Toggle, setToggle] = useState(1);
    const Toggletab = (index) => {
      setToggle(index);
    };
  return (
    <section className="qualification section">
      <h2 className="section__title">Credentials</h2>
      <span className="section__subtitle">My Learning Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div onClick={() => Toggletab(1)} className={Toggle === 1 ? "qualification__button qualification__active button--flex" : "qualification__button qualification__active button--flex"}>
            <i className="uil uil-graduation-cap qualification__icon">
              <RiGraduationCapFill />
            </i>{" "}
            Academics
          </div>

          <div onClick={() => Toggletab(2)} className={Toggle === 2 ? "qualification__button qualification__active button--flex" : "qualification__button qualification__active button--flex"}>
            <i className="uil uil-briefcase qualification__icon">
              <CgBriefcase />
            </i>{" "}
            Career Path
          </div>
        </div>

        <div className="qualification__sections">
          <div className={Toggle === 2? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Developer Internship</h3>
                <span className="qualification__subtitle">
                  Big Ziel Technologies - Guindy
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar">
                    <FaRegCalendarAlt />
                  </i>{" "}
                  Jan 2025 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Embedded Systems Internship</h3>
                <span className="qualification__subtitle">
                Acmegrade Pvt Ltd
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar">
                    <FaRegCalendarAlt />
                  </i>{" "}
                  Jan 2024 - March 2024
                </div>
              </div>

              
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Embedded Systems Internship</h3>
                <span className="qualification__subtitle">
                Pantech e-Learning - Chennai
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar">
                    <FaRegCalendarAlt />
                  </i>{" "}
                  Aug 2023 
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">In-plant Training</h3>
                <span className="qualification__subtitle">
                All India Radio
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar">
                    <FaRegCalendarAlt />
                  </i>{" "}
                  July 2022
                </div>
              </div>
            </div>

          </div>
        </div> 
        
        <div className="qualification__sections">
          <div className={Toggle === 1? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.E.(ECE)</h3>
                <span className="qualification__subtitle">
                  Jeppiaar Engineering College - Chennai
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar">
                    <FaRegCalendarAlt />
                  </i>{" "}
                  Oct 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">HSC</h3>
                <span className="qualification__subtitle">
                Sri Ramakrishna Vidhyalaya Matriculation Higher Secondary School - Chengalpattu
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar">
                    <FaRegCalendarAlt />
                  </i>{" "}
                  Jun 2020 - May 2021
                </div>
              </div>

              
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSLC</h3>
                <span className="qualification__subtitle">
                Sri Ramakrishna Vidhyalaya Matriculation Higher Secondary School - Chengalpattu
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar">
                    <FaRegCalendarAlt />
                  </i>{" "}
                  Jun 2018 - Mar 2019 
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
