import { useTranslation } from 'react-i18next';
import {Container} from '../UIContainer/Container';
import { config } from '../../constants';
import './Experiences.scss';


export const Experiences = () => {
  
  const {
    i18n: { language }
  } = useTranslation();
  const { experiences } = config;

  return (
    <section className='experiences__section'>
      <Container>
        <div className="experiences__section__heading">
          <h1>{experiences.heading[language]}</h1>
          <a href="#" className="read-more">{experiences.read_more_button[language]}</a>
        </div>
      </Container>
    </section>
  )
}