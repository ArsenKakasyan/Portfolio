import React, { useContext } from "react";
import "./serviceList.css"
import Service from "../service/Service.jsx"
import { services } from '../../data'

import { LanguageContext } from "../../LanguageContext";

export const ServiceList = () => {

  const { language } = useContext(LanguageContext);
  
  return (
    <div className="sl">
        <div className="sl-texts">
            <h1 className="sl-title">
              {language === "RU" 
              ? "Проекты" 
              : "Projects"}
            </h1>
            <p className="sl-desc">
            {language === "RU" 
                        ? "Я разрабатывал дизайн лендинга, сайт суши-шопа, облачное хранилище на MERN стеке, образовательную платформу на PHP, ChatGPT телеграмм бота и приложение учета изделий на FastAPI и KivyMD" 
                        : "I designed a landing page, a sushi shop website, a cloud storage with MERN stack, an educational platform with PHP, a ChatGPT telegram bot, and a product inventory application on FastAPI and KivyMD"}
            </p>
        </div>
        <div className="sl-list">
           {services.map(item=>(
             <Service key={item.id} img={item.img} link={item.link} />
           ))}
        </div>
    </div>
  )
}
