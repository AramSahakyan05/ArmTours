import { useState } from "react";

import { useTranslation } from "react-i18next";

import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import { config } from "../../constants";

import Datepicker from 'react-datepicker';

import { SpecialOffers } from "./SpecialOffers/SpecialOffers";
import { PerfectDestinations } from "./PerfectDestinations/PerfectDestinations";
import { WhyChooseUs } from "./WhyChooseUs/WhyChooseUs";
import { CustomerReviews } from "./CustomerReviews/CustomerReviews";
import { TravelTips } from "./TravelTips/TravelTips";

import home_main_picture from '../../assets/home/background.png';

import 'react-datepicker/dist/react-datepicker.css';
import './Home.scss';

export const Home = () => {
  const {
    i18n: { language }
  } = useTranslation();
  const {home_intro, home_order_form, direction, guests } = config.home;
  const {form_destination, form_date, form_guests} = home_order_form;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [destArrow, setDestArrow] = useState(false);
  const [guestArrow, setGuestArrow] = useState(false);
  const [destSelectedOption, setDestSelectedOption] = useState('');
  const [guestSelectedOption, setGuestSelectedOption] = useState('');
  
  const handleDateChange = date => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };
  return (
    <section className="home-section">
      <div className="home-top-back-image">
        <img 
          src={home_main_picture}
          alt="Main background picture" 
        />
      </div>
      <div className="home-intro">
        <h2 className='explore-subheading'>{home_intro.subheading[language]}</h2>
        <h1 className='explore-heading' style={{width: `${language === 'ru' ? '80%' : '45%'}`}}>{home_intro.heading[language]}</h1>
        <a href="#" className='explore-button' style={{maxWidth: (language === 'am' || language === 'ru') ? '20%' : '14%'}}>
          {home_intro.explore_button[language]}
          <HiOutlineArrowLongRight />
        </a>
      </div>
      <form className='home-order-form'>
        {/* Destination */}
        <div className="destination-select">
          <div className="destinations">
            <div className="icon">
              <SlLocationPin />
            </div>
            {
              destSelectedOption ? destSelectedOption : <div>
              <h4>{form_destination.title[language]}</h4>
              <p>{form_destination.subtitle[language]}</p>
            </div>
            }
            <div 
              className="icon"
              onClick={() => {
                setDestArrow(prev => !prev);
              }}
            >
              <IoIosArrowDown style={{transform: `${destArrow ? 'rotate(180deg)' : 'none'}`}}/>
            </div>
          </div>
          <div 
            className="direction"
            style={{
              transform: `${destArrow ? 'none' : 'translateY(-90px)'}`,
              zIndex: `0`
            }}
          >
            {
              direction.map(({id, destination}) => {
                return (
                  <p 
                    key={id} 
                    className="direction-item"
                    onClick={() => {
                      setDestSelectedOption(destination);
                      setDestArrow(prev => !prev);
                    }}
                  >
                    {destination}
                  </p>
                )
              })
            }
          </div>
        </div>
        {/* Date */}
        <div className="date" onClick={() => setShowDatePicker(!showDatePicker)}>
          <div className="icon">
            <IoCalendarOutline />
          </div>
          {showDatePicker && (
            <Datepicker
              selected={selectedDate}
              onChange={handleDateChange}
              showYearDropdown
              showMonthDropdown
              scrollableYearDropdown
              inline 
            />
          )}
          {selectedDate && !showDatePicker && (
            <div>
            <p>{selectedDate.toLocaleDateString()}</p>
            </div>
          )}
          {!selectedDate && !showDatePicker && (
            <div>
            <h4>{form_date.title[language]}</h4>
            <p>{form_date.subtitle[language]}</p>
            </div>
          )}
        </div>
        {/* Guests */}
        <div className="guests-select">
          <div className="guests">
            <div className="icon">
              <FaRegUser />
            </div>
              {
                guestSelectedOption ? guestSelectedOption 
                : <div>
                    <h4>{form_guests.title[language]}</h4>
                  </div>
              }
            <div 
              className="icon"
              onClick={() => {
                setGuestArrow(prev => !prev);
              }}
            >
              <IoIosArrowDown style={{transform: `${guestArrow ? 'rotate(180deg)' : 'none'}`}} />
            </div>
          </div>
          <div 
            className="guests-quantity"
            style={{
              transform: `${guestArrow ? 'none' : 'translateY(-90px)'}`,
              zIndex: `0`
            }}
          >
            {
              guests.map(({id, people}) => {
                return (
                  <p 
                    key={id} 
                    className="guests-quantity-item"
                    onClick={() => {
                      setGuestSelectedOption(`${people.from} - ${people.to}`);
                      setGuestArrow(prev => !prev);
                    }}
                  >
                    {people.from} - {people.to}
                  </p>
                )
              })
            }
          </div>
        </div>
        <button>
          <CiSearch />
          Search
        </button>
      </form>
      <SpecialOffers />
      <PerfectDestinations />
      <WhyChooseUs />
      <CustomerReviews />
      <TravelTips />
    </section>
  )
}