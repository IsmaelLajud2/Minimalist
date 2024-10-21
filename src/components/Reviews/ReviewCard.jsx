
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';
import 'swiper/css/effect-cards';
import '../Reviews/ReviewStyles.css'
import 'swiper/css/autoplay'
import ReviewInfo from '../Reviews/ReviewInfo.json'

const ReviewCard = () => {
  return (
    <div className='card-review-container'>
        <Swiper grabCursor="true" watchSlidesProgress={true}  slidesPerView={2}
       autoplay={{
        delay: 4000, 
        
        disableOnInteraction: false, 
      }}    loop={true}modules={[Autoplay]}className="card-review-people">

        {
            ReviewInfo.review.map((data,index) =>(
                <SwiperSlide key={index} className='review-card-people'>
                    <div className='div-review-imagen-content'>
                    <img className='imagen-review' src={data.image} alt='client-imagen' ></img>
                    <p className='review-points'>{data.rating}</p>
                    </div>
                    <div className='client-name-review'>
                        <p className='p-review-client'>{data.review}</p>
                   
                    <aside className='review-bottom-name'>
                        <p className='name-card-review'>{data.name}</p>
                        <p className='year-review'>{data.date}</p>
                    </aside> 
                    </div>
                </SwiperSlide>
            ))}
      </Swiper>
    </div>
  )
}

export default ReviewCard