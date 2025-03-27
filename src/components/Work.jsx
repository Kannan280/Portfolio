import React from 'react';
import "./work.css";
import Works from './Works';

const Work = () => {
  return (
    <section className="work section" id='portfolio'>
        <h2 className="section__title">Showcasing My Work</h2>
        <span className="section__subtitle">Pushing boundaries through technology and creativity.</span>
        <Works />
    </section>
  )
}

export default Work