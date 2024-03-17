import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import './TravelTips.scss';
import { advice } from '../../../constants';
import { TravelItem } from './TravelItem/TravelItem';
import { Container } from '../../UIContainer/Container';

export const TravelTips = () => {
  return (
    <div className="travel-tips">
      <Container>
        <div className="travel-tips-heading">
          <h2 className="subheading">Our blog</h2>
          <h1 className="heading">Travel Tips and Advice</h1>
        </div>
        <div className="travel-tips-inner">
          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            slidesPerView={2}
            navigation
            grabCursor
            loop={true}
            autoplay={{
              delay: 5000,
            }}
          >
            {advice.map(({ id, img, type, title, description, date,author, comments }) => (
              <SwiperSlide key={id}>
                <TravelItem
                  id={id}
                  img={img}
                  type={type}
                  title={title}
                  description={description}
                  date={date}
                  author={author}
                  comments={comments}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  )
}