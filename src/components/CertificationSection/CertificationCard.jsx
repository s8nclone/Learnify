import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

function CertificationCard({certCourse, certImage}) {
  return (
    <div className="cert-card">
        <img alt="card image" src={certImage} className='card-img'/>
        <div className="card-text">
            <h3>{certCourse}</h3>
            <a href="#"><p className="enrol-btn">Enrol now <AiOutlineArrowRight /></p></a>
        </div>
        
    </div>
  )
}

export default CertificationCard