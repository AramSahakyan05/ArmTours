import {Container} from '../UIContainer/Container';
import { IoCubeOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { config } from '../../constants';
import { generateUniqueId } from '../../constants';
import "./Features.scss";

export const Features = () => {
  const {
    i18n: { language }
  } = useTranslation();
  const { feature } = config;
  return (
    <section className='features__section'>
      <Container>
        <div className="features__section__heading">
          <h4>{feature.title[language]}</h4>
          <h1>{feature.heading[language]}</h1>
        </div>
        <div className="features">
          {
            feature.features.map(({title, description}) => {
              return (
                <div key={generateUniqueId()} className="col1">
                  <div className="cube"><IoCubeOutline /></div>
                  <div className="feature-info">
                    <h3>{title[language]}</h3>
                    <p>{description[language]}</p>
                 </div>
               </div>
              )
            })
          }
        </div>
      </Container>
    </section>
    )
}