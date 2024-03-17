import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { config } from '../../constants';

import { SlLocationPin } from "react-icons/sl";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import Datepicker from 'react-datepicker';

import './OrderForm.scss';

export const OrderForm = () => {
  const {
    i18n: { language }
  } = useTranslation();
  const { home_order_form, direction, guests } = config.home;

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
  )
}