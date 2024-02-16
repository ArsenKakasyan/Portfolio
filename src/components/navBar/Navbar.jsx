import React, { useContext, useState } from "react";

import { langswitch, github, linkedin, cv, telegram } from "../../assets";
import "./navbar.css";

import { LanguageContext } from "../../LanguageContext";

const Navbar = () => {
  const { language, handleLanguageChange } = useContext(LanguageContext);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    handleLanguageChange();
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <p className="navbar__text">
          {language === "RU" ? "Портфолио" : "Portfolio"}&nbsp;
          <span className="navbar__subtext">
            |&nbsp;
            {language === "RU" ? "Разработчика" : "Developer"}
          </span>
        </p>

        <div className="navbar__icons">
          <a
            href="https://t.me/soitends"
            className="navbar__link"
            target="_blank"
          >
            <img
              src={telegram}
              alt="Telegram"
              className="navbar__telegram-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/archeeee"
            className="navbar__link"
            target="_blank"
          >
            <img
              src={linkedin}
              alt="Linkedin"
              className="navbar__linkedin-icon"
            />
          </a>

          <a
            href="https://github.com/ArsenKakasyan"
            className="navbar__link"
            target="_blank"
          >
            <img src={github} alt="GitHub" className="navbar__github-icon" />
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=1t84GAFylU8YgW-CTfmRPIz8sVTn0CE0E"
            download
            className="navbar__link"
          >
            <img
              src={cv}
              alt="Curriculum Vitae"
              className="navbar__cv-icon"
              target="_blank"
            />
          </a>

          <button
            className={`navbar__language ${clicked ? "clicked" : ""}`}
            onClick={handleClick}
          >
            <img src={langswitch} alt="" className="navbar__language-icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
