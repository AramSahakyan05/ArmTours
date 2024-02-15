import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Datepicker from 'react-datepicker';
import { config } from "../../constants";
import { Header } from "../Header/Header";
import home_main_picture from '../../assets/home/home-main.jpg';
import home_main2_picture from '../../assets/home/home-main2.jpg';
import 'react-datepicker/dist/react-datepicker.css';
import './Home.scss';

export const Home = () => {
  const {
    i18n: { language }
  } = useTranslation();
  const {home_intro, home_order_form } = config.home;
  const {form_destination, form_date, form_guests} = home_order_form;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [destination, setDestination] = useState(false);
  const [guests, setGuests] = useState(false);
  
  const handleDateChange = date => {
    setSelectedDate(date);
    setShowDatePicker(false); // Hide the DatePicker after selecting a date
  };

  return (
    <section className="home-section">
      <Header />
      <img 
      src={home_main_picture} 
      className="home-back-image" 
      alt="Main background picture" 
      />
        <main>
          <div className="home-intro">
            <h2 className='explore-subheading'>{home_intro.subheading[language]}</h2>
            <h1 className='explore-heading' style={{width: `${language === 'ru' ? '73%' : '45%'}`}}>{home_intro.heading[language]}</h1>
            <a href="#" className='explore-button'>
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
                <div>
                  <h4>{form_destination.title[language]}</h4>
                  <p>{form_destination.subtitle[language]}</p>
                </div>
                <div 
                  className="icon"
                  onClick={() => {
                    setDestination(prev => !prev);
                  }}
                >
                  <IoIosArrowDown style={{transform: `${destination ? 'rotate(180deg)' : 'none'}`}} />
                </div>
              </div>
              <div className="direction">
                
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
                <div>
                  <h4>{form_guests.title[language]}</h4>
                </div>
                <div 
                  className="icon"
                  onClick={() => {
                    setGuests(prev => !prev);
                  }}
                >
                  <IoIosArrowDown style={{transform: `${guests ? 'rotate(180deg)' : 'none'}`}} />
                </div>
              </div>
              <div className="guests-quantity">

              </div>
            </div>
            <button>
              <CiSearch />
              Search
            </button>
          </form>
        </main>
    </section>
  )
}