import React, { useState }from 'react'
import './heroSection.css'
import searchIcon from '../../assets/search-icon.svg'
import backgroundImg from '../../assets/heroBackgroundImage.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
import infoIcon from '../../assets/infoIcon.svg'
import closeBtn from '../../assets/closeBtn.svg'

function HeroSection() {
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible(!true);
  };

  return (
    <>
        <div className="hero-container">
          <div className="white-box"></div>
          <div className="yellow-box"></div>

          {visible && (
            <div className="page-ad">
              <img src={infoIcon} alt="info icon"/>
              <p>Launch a new career in as little as 6 months</p>
              <button onClick={removeElement} className="close-btn"><img src={closeBtn} alt="close button" /></button>
            </div>
          )}

          <div className="hero-wrapper">
            <div className="hero-content">
              <div className="popular-div">
                <p>Popular</p>
                <button className="popular-btn">UI/UX Design</button>
                <button className="popular-btn">Cyber Security</button>
                <button className="popular-btn">Cloud Computing</button>
              </div>
              <form className="search-form">
                  <input className="heroSearch-field" type="search" placeholder="what do you want to learn?" />
                  <button type="submit"><img src={searchIcon} alt="search icon" /></button>
              </form>

              <div className="hero-text">
                <h2>Learning is the source of human progress.</h2>
              </div>

              <div className="gs-btn">
                <button className="get-started-btn">Get Started Now <AiOutlineArrowRight className="arrow-logo"/></button>
              </div>
            </div>

            <div className="bgdImage-wrapper">
              <img src={backgroundImg} alt="hero image" />
            </div>
          </div>
          

        </div>
    </>
  )
}

export default HeroSection