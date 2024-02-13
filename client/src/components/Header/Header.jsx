import { useTranslation } from "react-i18next";
import { config } from "../../constants";
import { Container } from "../UIContainer/Container"
import i18n from "../../i18n";
import { langs } from "../../constants";
import "./Header.scss";
import { useEffect, useState } from "react";
export const Header = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const [activeLang, setActiveLang] = useState(langs[0]);
  useEffect(() => {
    langs.forEach((lang) => {
      if(lang.type === language) {
        setActiveLang(lang);
      }
    })
  }, [setActiveLang, language]);
  console.log(activeLang);
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
                    return <li key={id}>{title[language]}</li>
                  })
                }
              </ul>
              </nav>
              <div className="auth-buttons">
                {
                  config.auth_buttons.map(({id, name, route},i) => {
                    return <a 
                    key={id}
                    href={`/armtours/${route}`}
                    className={i === 0 ? "log-button" : "signup-button"}>
                      {name[language]}
                    </a>
                  })
                }
              </div>
              <div className="langs">
                <span 
                className="default-lang"
                >{activeLang.type.toUpperCase()}</span>
                <ul className="hidden-langs fadeup">
                  {
                    langs.map(({id, title, type}) => {
                      return (
                        <li 
                          key={id}
                          onClick={() => {
                            setActiveLang({id, title, type});
                            i18n.changeLanguage(type);
                          }}
                        >
                          {type !== activeLang.type && type.toUpperCase()}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
          </Container>
        </header>
    )
}