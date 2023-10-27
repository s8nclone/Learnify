import React from 'react'
import './certification.css'
import ArrowBackIcon from '../../assets/keyboardArrowLeft.svg'
import ArrowForwardIcon from '../../assets/keyboardArrowRight.svg'
import CertificationCard from './CertificationCard'
import { certificateData } from './cetificationData'

function Certification() {

   const certificationItems = [...certificateData];
   while (certificationItems.length < 8) {
    for (let i = 0; i < certificateData.length; i++) {
        if (certificationItems.length < 8) {
            certificationItems.push(certificateData[i]);
        } else {
            break;
        }
    }
   }
   console.log(certificationItems)

  return (
    <>
        <div className="certification-container">
            <div className="cert-header">
                <h2>Get professional certifications</h2>
            </div>

            <div className="certification-grid">
                <button
                    className="cert-button"
                    // onClick={() => ref.current?.goBack()}
                >
                    <img src={ArrowBackIcon} />
                </button>
                
                {certificationItems.map((item, index)=>(
                    <CertificationCard key={index} certImage={item.certImage} certCourse={item.certCourse}/>
                ))}

                <button
                    className="cert-button"
                    // onClick={() => ref.current?.goNext()}
                >
                    <img src={ArrowForwardIcon} />
                </button>
            </div>

            <button className="click-btn">Discover more</button>
        </div>
    </>
  )
}

export default Certification