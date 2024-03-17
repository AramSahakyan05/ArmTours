import { useTranslation } from "react-i18next";

import { HiOutlineArrowLongRight } from "react-icons/hi2";
// import { SlLocationPin } from "react-icons/sl";
// import { IoCalendarOutline } from "react-icons/io5";
// import { FaRegUser } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
// import { CiSearch } from "react-icons/ci";

import { config } from "../../constants";

// import Datepicker from 'react-datepicker';
import { Container } from '../UIContainer/Container'
import { SpecialOffers } from "./SpecialOffers/SpecialOffers";
import { PerfectDestinations } from "./PerfectDestinations/PerfectDestinations";
import { WhyChooseUs } from "./WhyChooseUs/WhyChooseUs";
import { CustomerReviews } from "./CustomerReviews/CustomerReviews";
import { TravelTips } from "./TravelTips/TravelTips";
import { OrderForm } from "../OrderForm/OrderForm";

import home_main_picture from '../../assets/home/background.png';

import 'react-datepicker/dist/react-datepicker.css';
import './Home.scss';
import { HomeIntro } from "./HomeIntro/HomeIntro";

export const Home = () => {
  const {
    i18n: { language }
  } = useTranslation();

  return (
    <section className="home-section">
      <div className="home-top-back-image">
        <img 
          src={home_main_picture}
          alt="Main background picture" 
        />
      <HomeIntro />
      <OrderForm />
      </div>
      <SpecialOffers />
      <PerfectDestinations />
      <WhyChooseUs />
      <CustomerReviews />
      <TravelTips />
    </section>
  )
}