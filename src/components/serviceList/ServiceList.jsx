import React, { useContext } from "react";
import "./serviceList.css";
import Service from "../service/Service";
import { services } from "../../data";

import { LanguageContext } from "../../LanguageContext";

const ServiceList = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="sl">
      <div className="sl-texts">
        <h1 className="sl-title">
          {language === "RU" ? "Проекты" : "Projects"}
        </h1>
        <p className="sl-desc">
          {language === "RU"
            ? "Которые я делал(делаю): "
            : "Which I(am) have done(doing): "}
        </p>
      </div>
      <div className="sl-list">
        {services.map((item) => (
          <Service
            key={item.id}
            img={item.img}
            link={item.link}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
