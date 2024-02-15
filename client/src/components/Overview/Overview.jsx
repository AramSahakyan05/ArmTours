import { useTranslation } from 'react-i18next';
import { config } from '../../constants';
import {Container} from '../UIContainer/Container';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Features } from '../Features/Features';
import { Plan } from '../Plan/Plan';
import { Experiences } from '../Experiences/Experiences';
import { FAQ } from '../FAQ/FAQ';
import "./Overview.scss";

export const Overview = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const { overview_first_section } = config;
    return (
      <>
      <section className="overview__first__section">
         <Container>
          <div className='heading'>
            <h1>{overview_first_section.title[language]}</h1>
          </div>
          <div className="learn__more">
            <a href="#">{overview_first_section.fbutton[language]}</a>
            <a href="#">{overview_first_section.sbutton[language]}<HiOutlineArrowLongRight /></a>
          </div>
         </Container>
      </section>
      <Features />
      <Plan />
      <Experiences />
      <FAQ />
      </>
    )
}