import {Container} from '../UIContainer/Container';
import { config } from '../../constants';
import './Footer.scss';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const { navbar, footer } = config;

  return (
    <footer>
      <Container>
      <div className="footer__top">
        <h1>ARMTOURS</h1>
        <ul>
          {
            navbar.map(({id, title}) => {
              return <li key={id}>{title[language]}</li>
            })
          }
        </ul>
      </div>
      <div className="footer__bottom">
        <div className="copyright">
          {
            footer.license[language]
          }
        </div>
        <div className="social-icons">
          {
            footer.social_icons.map(({id, icon}) => {
              return <a key={id}>{icon}</a>
            })
          }
        </div>
      </div>
      </Container>
    </footer>
  )
}

