import React from 'react'
import "./about.css"
import Pic from "../../../img/lain.png"
import Award from "../../../img/award.png"

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Pic}
                alt="" 
                className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">/about me</h1>
            <p className="-a-sub">
                        Let me introduce myself:  
            </p>
            <p className="a-desc">
                        Tryhard computer science student who tries to make a living and find a job. I really enjoy staying home for days and code,
                        read and draw manga. Besides that I <b>LOVE</b> snowboard! 
            </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">
                        1st Degree Diploma

                    </h4>
                    <p className="a-award-desc">
                    Scientific conference "NorthGeoEcoTech" / modern information technologies section
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About