import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from 'swiper/modules';

import { ReviewItem } from './ReviewItem/ReviewItem';

import { customer_reviews } from '../../../../constants';

import "swiper/css";
import "swiper/css/navigation";
import './Reviews.scss';

export const Reviews = () => {
  return (
    <div className="reviews-section">
      <div className="reviews-heading">
        <h2 className="subheading">Tesimonials</h2>
        <h1 className='heading'>Customer Reviews</h1>
      </div>
      <div className="reviews">
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        grabCursor
        loop={true}
        autoplay={{
          delay: 5000,
        }}
      >
        {customer_reviews.map(({ id, text, img, name, rate, location }) => (
          <SwiperSlide key={id}>
            <ReviewItem
              id={id}
              text={text}
              img={img}
              name={name}
              rate={rate}
              location={location}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  )
}