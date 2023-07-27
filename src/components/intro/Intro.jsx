import React, { useContext } from "react";
import "./intro.css"
import { me } from "../../assets"
import { LanguageContext } from "../../LanguageContext";

const Intro = () => {
    const { language } = useContext(LanguageContext);

    return (
        <div className = "i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h1 className="i-intro">
                        {language === "RU" 
                        ? "Привет, я Артур" 
                        : "Hey, its Artur"}
                    </h1>
                    <h2 className="i-name">
                        {language === "RU" 
                        ? "Я знаю: " 
                        : "I know: "}&nbsp;
                    </h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">OOP</div>
                            <div className="i-title-item">FastAPI</div>
                            <div className="i-title-item">NodeJS</div>
                            <div className="i-title-item">React</div>
                            <div className="i-title-item">noSQL</div>
                            <div className="i-title-item">Git</div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="Author" draggable='false' className="i-img" />
            </div>
        </div>
    )
}

export default Intro