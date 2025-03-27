import React from 'react';
import { HiOutlineCheckBadge } from "react-icons/hi2";

const Otherskills = () => {
  return (
    <div className="skills__content bonus__skills">
                <h3 className="skills__title">Bonus Skills</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <i className="bx bx-badge-check"><HiOutlineCheckBadge /></i>
        
                    <div>
                        <h3 className="skills__name">Canva</h3>
                        <span className="skills__level">Comprehensive</span>
                    </div>
                    </div>
        
                    <div className="skills__data">
                    <i className="bx bx-badge-check"><HiOutlineCheckBadge /></i>
        
                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Practiced</span>
                    </div>
                    </div>
        
                    <div className="skills__data">
                    <i className="bx bx-badge-check"><HiOutlineCheckBadge /></i>
        
                    <div>
                        <h3 className="skills__name">AWS</h3>
                        <span className="skills__level">Capable</span>
                    </div>
                    </div>
                </div>

                <div className="skills__group">
                            <div className="skills__data">
                            <i className="bx bx-badge-check"><HiOutlineCheckBadge /></i>
                
                            <div>
                                <h3 className="skills__name">MS Office</h3>
                                <span className="skills__level">Expert</span>
                            </div>
                            </div>
                
                            <div className="skills__data">
                            <i className="bx bx-badge-check"><HiOutlineCheckBadge /></i>
                
                            <div>
                                <h3 className="skills__name">Embedded Systems</h3>
                                <span className="skills__level">Elite</span>
                            </div>
                            </div>
                        </div>
            </div>
            </div>
  )
}

export default Otherskills