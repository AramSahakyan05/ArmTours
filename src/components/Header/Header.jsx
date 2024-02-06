import { config } from "../../constants";
import { Container } from "../UIContainer/Container"
import "./Header.scss";
export const Header = () => {
    return (
        <header>
          <Container>
              <div className="logo">
                <h1>ARMTOURS</h1>
              </div>
              <nav>
              <ul>
                {
                  config.navbar.map(({id, title}) => {
                    return <li key={id}>{title}</li>
                  })
                }
              </ul>
              </nav>
              <div className="auth-buttons">
                <button className="log-button">Login</button>
                <button className="signup-button">Register</button>
              </div>
          </Container>
        </header>
    )
}