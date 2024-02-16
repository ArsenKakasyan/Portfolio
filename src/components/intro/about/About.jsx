import React, { useContext } from "react";
import "./about.css";
import { g } from "../../../assets";
import { awards } from "../../../data";
import { Carousel } from "react-responsive-carousel";
import { LanguageContext } from "../../../LanguageContext";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
const About = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <Carousel
            swipeable={true}
            width="100%"
            centerMode={true}
            emulateTouch={true}
            showArrows={false}
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={false}
          >
            {awards.map((item) => (
              <div key={item.id}>
                <img
                  src={item.imageUrl}
                  alt="Award"
                  draggable="false"
                  loading="lazy"
                  style={{ userSelect: "none" }}
                  className="a-img"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">{language === "RU" ? "Обо мне" : "About"}</h1>

        <p className="a-desc">
          {language === "RU"
            ? "3 года опыта разработки программного обеспечения. Принимал участие в различных мероприятиях. В 2024 году окончил специальность «Информационные системы и технологии»."
            : "3 years of software development experience. Participated in various events. Graduated with a degree in Information Systems and Technologies in 2024."}
        </p>
        <div className="a-award"></div>
      </div>
    </div>
  );
};

export default About;
