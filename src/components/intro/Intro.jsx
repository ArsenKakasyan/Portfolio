import React, { useContext } from "react";
import "./intro.css";
import { me } from "../../assets";
import { LanguageContext } from "../../LanguageContext";

const Intro = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="i-intro">
            {language === "RU" ? "Привет, друг" : "Hello, friend"}
          </h1>
          <h2 className="i-name">
            {language === "RU" ? "Я пишу на: " : "I write in: "}&nbsp;
          </h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Python</div>
              <div className="i-title-item">TypeScript</div>
              <div className="i-title-item">Rust</div>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} alt="Author" draggable="false" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
