import React from 'react'
import './heroSection.css'
import searchBtn from '../../assets/Vector.svg'
import backgroundImg from '../../assets/7c7b16fffb0b02f52d0fbc648aae8943.png'
import { AiOutlineArrowRight } from 'react-icons/ai'

function HeroSection() {
  return (
    <>
        <div className="hero-container" style={{backgroundImage:`url(${backgroundImg})`,}}>
          <div className="hero-content">
            <div className='search-box'>
              <input type="search" />
              <button><img src={searchBtn} alt="search logo"/></button>
            </div>

            <div>
              <h2>Improve your skills Faster and Better</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Accusamus sed impedit, culpa, molestiae suscipit, 
                odio necessitatibus debitis aut quasi sunt iure quibusdam similique excepturi!</p>
            </div>

            <div>
              <button>Get Started Now <AiOutlineArrowRight/></button>
            </div>
          </div>

        </div>
    </>
  )
}

export default HeroSection