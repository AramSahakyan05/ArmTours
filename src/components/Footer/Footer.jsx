import {Container} from '../UIContainer/Container';
import { config } from '../../constants';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer>
      <Container>
      <div className="footer__top">
        <h1>ARMTOURS</h1>
        <ul>
          {
            config.navbar.map(({id, title}) => {
              return <li key={id}>{title}</li>
            })
          }
        </ul>
      </div>
      <div className="footer__bottom">
        <div className="copyright">
        © 2023 ARMTOURS, All Rights Reserved.
        </div>
        <div className="social-icons">
          {
            config.social_icons.map(({id, icon}) => {
              return <a key={id}>{icon}</a>
            })
          }
        </div>
      </div>
      </Container>
    </footer>
  )
}

