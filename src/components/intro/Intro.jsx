import "./intro.css"
import Me from "../../img/me.png"

const Intro = () => {
    return (
        <div className = "i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is </h2>
                    <h1 className="i-name">Archee</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Fullstack</div>
                            <div className="i-title-item">Crypto-enthusiast</div>
                            <div className="i-title-item"><strike>Hentai addict</strike></div>
                            <div className="i-title-item">Snowboard</div>
                            <div className="i-title-item">Youtuber?</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I design and develop services for customers of all sizes, specialising in creating stylish, modern websites and web-applications. 
                    </p>
                </div> 
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro