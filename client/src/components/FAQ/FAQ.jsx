import {Container} from '../UIContainer/Container';
import { config } from '../../constants';
import { useTranslation } from "react-i18next";
import './FAQ.scss';

export const FAQ = () => {
  const {
    i18n: { language }
  } = useTranslation();
  const { aside, article } = config.faq;
    return (
      <section className='FAQ__section'>
        <Container>
          <aside>
            <h5>FAQ</h5>
            <h1>{aside.title[language]}</h1>
            <p>{aside.subtitle[language]}</p>
          </aside>
          <article className="questions">
            <ul>
            {
              article.map(({id,question, answer}) => {
                return (
                  <div key={id} className='common-question-item'>
                    <li>{question[language]}</li> 
                    <li>{answer[language]}</li> 
                  </div>
                )
              })
            }
            </ul>
          </article>
        </Container>
      </section>
    )
}