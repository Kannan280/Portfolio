import React from 'react';
import { FaArrowRightToBracket } from "react-icons/fa6";

const Workitems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} className='work__image' alt='work-image' /> 
        <h3 className="work__title">{item.title}</h3>
        <a href={item.link} className="work__button">Prototype <i className="bx bx-right-arrow-alt work__button-icon"> <FaArrowRightToBracket /></i></a>

    </div>
  )
}

export default Workitems