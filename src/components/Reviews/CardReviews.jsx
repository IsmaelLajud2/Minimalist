import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCards ,Autoplay} from 'swiper/modules';
import 'swiper/css/effect-cards';
import '../Reviews/ReviewStyles.css'
import 'swiper/css/autoplay';
const CardReviews = () => {
  return (
    <div className='card-review-container'>
     <Swiper watchSlidesProgress={true}  slidesPerView={3}
       autoplay={{
        delay: 100, 
        disableOnInteraction: false, 
      }} className="card-review-people">
        <SwiperSlide className='review-card-people'>Slide 1</SwiperSlide>
        <SwiperSlide className='review-card-people'>Slide 2</SwiperSlide>
        <SwiperSlide className='review-card-people'>Slide 3</SwiperSlide>
        <SwiperSlide className='review-card-people'>Slide 4</SwiperSlide>
        <SwiperSlide className='review-card-people'>Slide 5</SwiperSlide>
 </Swiper>
    </div>
  )
}

export default CardReviews