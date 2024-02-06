import {Container} from '../UIContainer/Container';
import { config } from '../../constants';
import './FAQ.scss';

export const FAQ = () => {
    return (
        <section className='FAQ__section'>
            <Container>
                <aside>
                    <h5>FAQ</h5>
                    <h1>Common<br /> questions</h1>
                    <p>Here are some of the most<br /> common questions what we get.</p>
                </aside>
                <article className="questions">
                  <ul>
                  {
                    config.faq.map(({id,question, answer}) => {
                        return (
                          <div key={id} className='common-question-item'>
                            <li>{question}</li> 
                            <li>{answer}</li> 
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