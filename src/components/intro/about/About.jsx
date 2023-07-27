import React, { useContext } from "react";
import "./about.css"
import { gif, award } from "../../../assets"
import { LanguageContext } from "../../../LanguageContext";

const About = () => {
    const { language } = useContext(LanguageContext);


  return (
    <div className='a'>
        <div className="a-left">

            <div className="a-card">
                <img src={gif}
                alt="Picture"
                draggable='false' 
                className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">
                {language === "RU" 
                ? "Обо мне" 
                : "About"}
            </h1>

            <p className="a-desc">
                {language === "RU" 
                ? "3 года опыта разработки программного обеспечения. Принимал участие в акселераторе SberStudent 2023 в качестве тимлида и 3-х научных конференциях в университете. В 2024 году окончил специальность «Информационные системы и технологии»." 
                : "3 years of software development experience. Took part in the SberStudent 2023 accelerator as a team leader and 3 scientific conferences at the university. Graduated with a degree in Information Systems and Technologies in 2024."}
            </p>
            <div className="a-award">
                <img src={award} alt="Award" draggable='false' className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">
                        {language === "RU" 
                        ? "Диплом за участие в научной конференции" 
                        : "Diploma for attending science conference"}

                    </h4>
                    <p className="a-award-desc">
                        {language === "RU" 
                        ? "Научная конференция 'СеверГеоЭкоТех' / современные информационные технологии" 
                        : "Scientific conference 'NorthGeoEcoTech' / modern information technologies section"}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About