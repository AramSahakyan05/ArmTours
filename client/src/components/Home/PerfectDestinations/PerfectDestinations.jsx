// import Slider from 'react-slick';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import { perfectDests } from "../../../constants";
import map from '../../../assets/home/perfect destinations/map.jpg';

import './PerfectDestinations.scss';

export const PerfectDestinations = () => {
  return (
    <div className="perfect-destinations">
      <div 
        className="map-background"
        style={{backgroundImage: `url(${map})`}}
      >
      <div className="destinations-left-side">
        <div className="destinations-left-side-headings">
          <h2>Places to go</h2>
          <h1>Perfect <br /> Destinations</h1>
        </div>
        <p>Ut enim od minim veniam, quis nostrud <br /> 
        exercitotion ullamco toboris nisi ut oliquip ex <br /> 
        eo commado consequat.</p>
        <div className="destination-type-info">
          <ul>
            <li>Beaches</li>
            <li>Cruises</li>
            <li>Hostorical</li>
          </ul>
          <ul>
            <li>City Tours</li>
            <li>Hiking</li>
            <li>Museum Tours</li>
          </ul>
        </div>
      </div>
      </div>
      <div className="destination-slider">
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        slidesPerView={3}
        navigation
        grabCursor
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        >
          {perfectDests.map(({id, img, name, count, tour}) => {
            return (
              <SwiperSlide key={id}>
                <div 
                  key={id} 
                  className='destination-slider-item'
                  style={{backgroundImage: `url(${img})`}}
                >
                  <div className="destination-slider-item-info">
                    <h3>{name}</h3>
                    <span className="tour-count">
                      <span>{count}</span>
                      <span>{tour}</span>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  )
}