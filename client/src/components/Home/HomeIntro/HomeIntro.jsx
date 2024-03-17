import { useTranslation } from "react-i18next";

import { config } from "../../../constants";

import { HiOutlineArrowLongRight } from "react-icons/hi2";

import './HomeIntro.scss';

export const HomeIntro = () => {
  const {
    i18n: { language }
  } = useTranslation();
  const {home_intro } = config.home;

  return (
    <div className="home-intro">
      <h2 className='explore-subheading'>{home_intro.subheading[language]}</h2>
      <h1 className='explore-heading' style={{width: `${language === 'ru' ? '80%' : '45%'}`}}>{home_intro.heading[language]}</h1>
      <a href="#" className='explore-button' style={{maxWidth: (language === 'am' || language === 'ru') ? '20%' : '14%'}}>
        {home_intro.explore_button[language]}
        <HiOutlineArrowLongRight />
      </a>
    </div>
  )
}
