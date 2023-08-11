import React from 'react'
import './features.css'
import amazingTutors from '../../assets/amazingTutorsImg.svg'
import paceFeature from '../../assets/paceFeatureImg.svg'
import certificateFeature from '../../assets/certificateFeatureImg.svg'

function Features() {
  return (
    <>
        <div  className="features-container">
            <div className="features-header">
                <h2>Our Features for you</h2>
            </div>

            <div className="features-flex">
                <div className="features-card tutors-feature">
                    <div className="feature-img"><img alt="feature icon" src={amazingTutors}/></div>
                    <div className="feature-text">
                        <h3>Amazing Tutors</h3>
                        <p>By scheduling and Downloading your  Courses, you can learn anywhere and any time </p>
                    </div>
                </div>
                <div className="features-card language-feature">
                    <div className="feature-img"><img alt="feature icon" src={certificateFeature}/></div>
                    <div className="feature-text">
                        <h3>Learn in your preferred language</h3>
                        <p>By scheduling and Downloading your  Courses, you can learn anywhere and any time </p>
                    </div>
                </div>
                <div className="features-card pace-feature">
                    <div className="feature-img"><img alt="feature icon" src={paceFeature}/></div>
                    <div className="feature-text">
                        <h3>Learn at your own pace</h3>
                        <p>By scheduling and Downloading your  Courses, you can learn anywhere and any time </p>
                    </div>
                </div>
                <div className="features-card cert-feature">
                    <div className="feature-img"><img alt="feature icon" src={certificateFeature}/></div>
                    <div className="feature-text">
                        <h3>Earn a certificate</h3>
                        <p>By scheduling and Downloading your  Courses, you can learn anywhere and any time </p>
                    </div>
                </div>
            </div>

            <button className="click-btn">Learn more</button>
        </div>
    </>
  )
}

export default Features