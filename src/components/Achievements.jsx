import "./achievement.css";
import { Data as AchievementsData } from "./AchievementsData";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Achievements = () => {
  return (
    <section className="testimonials section container">
      <h2 className="section__title">Milestones</h2>
      <span className="section__subtitle">Noteworthy Feats</span>

      <Swiper className= "testimonial__container"
      grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
          }}
        modules={[Pagination]}
        
        loop={true} >
        {AchievementsData.map(({ id, image, title, description }) => (
          <SwiperSlide key={id} className="testimonial__card">
            <img src={image} alt={title} className="testimonial__image" />
            <h3 className="testimonial__name">{title}</h3>
            <p className="testimonial__description">{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Achievements;
