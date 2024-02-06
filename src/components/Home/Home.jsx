import {Container} from '../UIContainer/Container';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import "./Home.scss";
import { Features } from '../Features/Features';
import { Plan } from '../Plan/Plan';
import { Experiences } from '../Experiences/Experiences';
import { FAQ } from '../FAQ/FAQ';

export const Home = () => {
    return (
      <>
      <section className="home__first__section">
         <Container>
          <div className='heading'>
            <h1>Discover Armenia</h1>
          </div>
          <div className="learn__more">
            <a href="#">Find Your Adventure</a>
            <a href="#">Learn More <HiOutlineArrowLongRight /></a>
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