import { useTranslation } from 'react-i18next';
import {Container} from '../UIContainer/Container';
import { config } from '../../constants';
import { generateUniqueId } from '../../constants';
import './Plan.scss';

export const Plan = () => {
  const {
    i18n: { language }
  } = useTranslation();
  console.log(language);
  const { plan } = config;

  return (
    <section className='plan__section'>
      <Container>
        <div className="plan__section__heading">
          <h5>{plan.title[language]}</h5>
          <h1>{plan.heading[language]}</h1>
        </div>
        <div className="plans">
          {
            plan.plans.map(({id, type, subtitle, currency, price, term, description, button}) => {
              return (
                <div key={generateUniqueId()} className="free">
                  <h3>{type}</h3>
                  <p className='explore'>{subtitle[language]}</p>
                  <p className={`plan-price  ${id === 1 && language === 'am' ? "free-price" : id === 3 && language === 'am' ? 'pro-price' : ''} `}>
                    {currency} <span>{price}</span> / {term[language]}
                  </p>
                  <ul className='description'>
                    {
                      description.map(({id, title}) => {
                        return <li key={generateUniqueId()}>{title[language]}</li>
                      })
                    }
                  </ul>
                  <a href="#" className="order-button">
                    {button[language]}
                  </a>
                </div>
              )
            })
          }
        </div>
      </Container>
    </section>
  )
}