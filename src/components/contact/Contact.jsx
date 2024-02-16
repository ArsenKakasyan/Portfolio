import React, { useContext, useState, useRef } from "react";
import "./contact.css";
import { phone, email, geo } from "../../assets";
import emailjs from "@emailjs/browser";

import { LanguageContext } from "../../LanguageContext";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8g8n4ff",
        "template_vsby30m",
        formRef.current,
        "axbacLPFFGXfpFuDk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">
            {language === "RU" ? "Контакты" : "Contacts"}
          </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +7 963 0241 161
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              archee.busy@gmail.com
            </div>
            <div className="c-info-item">
              <img src={geo} alt="" className="c-icon" />
              {language === "RU" ? "Россия" : "Russia"}
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            {language === "RU"
              ? "Расскажите о своем проекте"
              : "Tell me about your project"}
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea row="5" placeholder="Message" name="message" />
            <button>{language === "RU" ? "Отправить" : "Submit"}</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
