import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Ingredients/SwiperStyles.css'
import 'swiper/css';
import { EffectCreative ,Autoplay} from 'swiper/modules';
import 'swiper/css/effect-creative';
import 'swiper/css/autoplay';
const  CarouselIngredients = () => {
  return (
    <div className='div-swiper'>
    <Swiper
   
    grabCursor={true}
    autoplay={{
      delay: 3000, 
      disableOnInteraction: false, // Permite que el autoplay continúe después de que el usuario interactúe con el carrusel
    }}
    effect={'creative'}
    creativeEffect={{
      prev: {
        shadow: true,
        translate: [0, 0, -400],
        opacity:0
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }}
    modules={[EffectCreative,Autoplay]}
    className="mySwiper"
  >

        <SwiperSlide><img className='imagen-ingredients'   src='Images/Carousel/CarouselPart1.webp'></img></SwiperSlide>
        <SwiperSlide><img className='imagen-ingredients' src='Images/Carousel/CarouselPart2.webp'></img></SwiperSlide>
        <SwiperSlide><img className='imagen-ingredients' src='Images/Carousel/CarouselPart3.webp'></img></SwiperSlide>
 
      </Swiper>
      </div>

  )
}

export default CarouselIngredients