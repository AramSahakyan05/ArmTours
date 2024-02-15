import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { config } from "../../constants";
import { Container } from "../UIContainer/Container"
import i18n from "../../i18n";
import { langs } from "../../constants";
import { IoMdKeypad } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import "./Header.scss";

export const Header = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const [activeLang, setActiveLang] = useState(langs[0]);
  const navigate = useNavigate();

  useEffect(() => {
    langs.forEach((lang) => {
      if(lang.type === language) {
        setActiveLang(lang);
      }
    })
  }, [setActiveLang, language]);

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
          <div className="contact-auth-buttons">
            <span className="contact-phone">
              <IoMdKeypad />
              +37477665544
            </span>
            <span 
              className="auth-icon"
              onClick={() => {
                navigate('/signup');
              }}  
            >
              <FaRegUser />
            </span>
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