import React from 'react'
import './heroSection.css'
import searchBtn from '../../assets/Vector.svg'
import backgroundImg from '../../assets/heroBackgroundImage.png'
import { AiOutlineArrowRight } from 'react-icons/ai'

function HeroSection() {
  return (
    <>
        <div className="hero-container" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${backgroundImg})`, 
          backgroundRepeat: "no-repeat", 
          backgroundSize: "cover",
          backgroundPosition: "50% 35%"}}
        >
          <div className="hero-content">
            <div className='search-box'>
              <input type="search" placeholder="what do you want to learn?"/>
              <button><img src={searchBtn} alt="search logo"/></button>
            </div>

            <div className="hero-text">
              <h2>Improve your skills Faster and Better</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing. 
                Nemo tempore debitis illum eos dolorum laudantium.</p>
            </div>

            <div className="gs-btn">
              <button className="get-started-btn">Get Started Now <AiOutlineArrowRight className="arrow-logo"/></button>
            </div>
          </div>

        </div>
    </>
  )
}

export default HeroSection