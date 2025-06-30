import React from 'react';
import { HiOutlineCheckBadge } from "react-icons/hi2";

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend Engineer</h3>
    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
            <i className="bx bx-badge-check"><HiOutlineCheckBadge /></i>

            <div>
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">Mastery</span>
            </div>
            </div>

            <div className="skills__data">
            <i className="bx bx-badge-check"><HiOutlineCheckBadge /></i>

            <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level">Adept</span>
            </div>
            </div>

            <div className="skills__data">
            <i className="bx bx-badge-check"><HiOutlineCheckBadge /></i>

            <div>
                <h3 className="skills__name">Javascript</h3>
                <span className="skills__level">Proficient</span>
            </div>
            </div>
        </div>

        <div className="skills__group">
            <div className="skills__data">
            <i className="bx bx-badge-check"><HiOutlineCheckBadge /></i>

            <div>
                <h3 className="skills__name">Bootstrap</h3>
                <span className="skills__level">Familiar</span>
            </div>
            </div>

            <div className="skills__data">
            <i className="bx bx-badge-check"><HiOutlineCheckBadge /></i>

            <div>
                <h3 className="skills__name">React Js</h3>
                <span className="skills__level">Specialized</span>
            </div>
            </div>

            <div className="skills__data">
            <i className="bx bx-badge-check"><HiOutlineCheckBadge /></i>

            <div>
                <h3 className="skills__name">Git</h3>
                <span className="skills__level">Skilled</span>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Frontend