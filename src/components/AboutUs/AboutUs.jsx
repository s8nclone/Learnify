import React, { useContext } from 'react'
import './aboutUs.css'
import { AuthContext } from '../../hooks/context'
import NewCareerBanner from '../Banner/NewCareerBanner'
import missionImg from '../../assets/missionStatementLogo.svg'
import visionImg from '../../assets/visionstatementLogo.svg'
import { AiOutlineArrowRight } from 'react-icons/ai'
import LeaderSection from '../LeaderSection/LeaderSection.jsx'
import founder from '../../assets/founderPhoto.png'

function AboutUs() {

    const { visible } = useContext(AuthContext);

  return (
    <>
        <div className="aboutUs-container">
                {visible && <NewCareerBanner /> }
            <div className="aboutUs-hero">
                <h2 className="aboutUs-heroText">Get certified courses <br/>in your preferred languages.</h2>
            </div>

            <div className="visionandmission-container">
                <div className="statementContainer">
                    <img src={missionImg} alt="mission logo" />
                    <h2 className="statement-header">Mission Statement</h2>
                    <p className="statement-text">By scheduling and Downloading 
                        your  Courses, you can learn 
                        anywhere and any time 
                    </p>
                </div>
                <div className="statementContainer">
                    <img src={visionImg} alt="mission logo" />
                    <h2 className="statement-header">Vision Statement</h2>
                    <p className="statement-text">By scheduling and Downloading 
                        your  Courses, you can learn 
                        anywhere and any time 
                    </p>
                </div>
            </div>

            <section className="whoWeAre">
                <div className="whoWeAre-left">
                    <div className="whoWeAre-container">
                        <div className="whoWeAre-bgd leader"><p>Leadership</p></div>
                        <p className="whoWeAre-text">
                            Lorem ipsum dolor sit amet, consectet
                            ur adipiscing elit. Nunc vulputate libero
                            et velit interdum, ac aliquet odio mattis.
                        </p>
                        <a href="#" className="more_about"><p className="enrol-btn" style={{justifyContent: "center"}}>Learn more <AiOutlineArrowRight /></p></a>
                    </div>
                    <div className="whoWeAre-container">
                        <div className="whoWeAre-bgd partner"><p>Our Partners</p></div>
                        <p className="whoWeAre-text">
                            Lorem ipsum dolor sit amet, consectet
                            ur adipiscing elit. Nunc vulputate libero
                            et velit interdum, ac aliquet odio mattis.
                        </p>
                        <a href="#" className="more_about"><p className="enrol-btn" style={{justifyContent: "center"}}>Learn more <AiOutlineArrowRight /></p></a>
                    </div>
                </div>

                <div className="whoWeAre-right">
                    <div className="whoWeAre-container_right">
                        <div className="whoWeAre-bgd_right"><p>Goal Focus</p></div>
                        <p className="whoWeAre-text_right">
                            Lorem ipsum dolor sit amet, consectet
                            ur adipiscing elit. Nunc vulputate libero
                            et velit interdum, ac aliquet odio mattis.
                        </p>
                        <a href="#" className="more_about"><p className="enrol-btn" style={{justifyContent: "center"}}>Learn more <AiOutlineArrowRight /></p></a>
                    </div>
                </div>
            </section>

            <section className="history">
                <div className="history_content">
                    <h3 className="history_content-header">History</h3>
                    <p className="history_content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ut hic accusamus ad quidem molestiae temporibus facere quia? 
                        Velit illum ad, totam deserunt corporis esse reprehenderit 
                        doloremque voluptatem! Fugit, dolor eaque.
                    </p>
                    <button className="readMoreBtn">Read more</button>
                </div>
            </section>

            <LeaderSection />

            <section className="founder_message">
                <div className="founder_photo">
                    <img src={founder} alt="founder photo" />
                    <p>Chinedu Mba (Founder)</p>
                </div>
                <div className="founder_message-text">
                    <h3>Message from our founder</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Velit expedita accusamus, culpa ea quia distinctio laborum dolor deleniti. 
                        Perspiciatis nulla perferendis at unde distinctio praesentium quos nesciunt 
                        sapiente molestias libero.
                    </p>
                    <p>  
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nostrum perferendis repudiandae reprehenderit distinctio fuga 
                        obcaecati autem? Assumenda cum consequuntur consectetur! 
                        Odio doloremque fugiat corrupti esse perferendis consectetur 
                        nihil modi unde.
                    </p>
                </div>
            </section>
        </div>
    </>
  )
}

export default AboutUs