import React from 'react'
import './certification.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import productDesignImg from '../../assets/productDesignImage.png'
import uxWritingImg from '../../assets/uxWritingImage.png'
import backendDevImg from '../../assets/backendDevImage.png'
import cybersecImg from '../../assets/cyberSecurityImage.png'
import productmgmtImg from '../../assets/productManagementImage.png'
import ArrowBackIcon from '../../assets/keyboardArrowLeft.svg'
import ArrowForwardIcon from '../../assets/keyboardArrowRight.svg'

function Certification() {
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
                <div className="cert-card">
                    <img alt="card image" src={productDesignImg} className='card-img'/>
                    <div className="card-text">
                        <h3>Product Design</h3>
                        <a href="#"><p className="enrol-btn">Enrol now <AiOutlineArrowRight /></p></a>
                    </div>
                    
                </div>

                <div className="cert-card hide">
                    <img alt="card image" src={uxWritingImg} className='card-img'/>
                    <div className="card-text">
                        <h3>UX Writing</h3>
                        <a href="#"><p className="enrol-btn">Enrol now <AiOutlineArrowRight /></p></a>
                    </div>
                    
                </div>

                <div className="cert-card hide">
                    <img alt="card image" src={backendDevImg} className='card-img' />
                    <div className="card-text">
                        <h3>Backend Development</h3>
                        <a href="#"><p className="enrol-btn">Enrol now <AiOutlineArrowRight /></p></a>
                    </div>
                    
                </div>

                <div className="cert-card hide">
                    <img alt="card image" src={cybersecImg} className='card-img'/>
                    <div className="card-text">
                        <h3>Cyber Security</h3>
                        <a href="#"><p className="enrol-btn">Enrol now <AiOutlineArrowRight /></p></a>
                    </div>
                    
                </div>

                <div className="cert-card hide">
                    <img alt="card image" src={productmgmtImg} className='card-img'/>
                    <div className="card-text">
                        <h3>Product Management</h3>
                        <a href="#"><p className="enrol-btn">Enrol now <AiOutlineArrowRight /></p></a>
                    </div>
                    
                </div>

                <div className="cert-card hide">
                    <img alt="card image" src={backendDevImg} className='card-img'/>
                    <div className="card-text">
                        <h3>FrontEnd Development</h3>
                        <a href="#"><p className="enrol-btn">Enrol now <AiOutlineArrowRight /></p></a>
                    </div>
                    
                </div>

                <div className="cert-card hide">
                    <img alt="card image" src={uxWritingImg} className='card-img'/>
                    <div className="card-text">
                        <h3>UX Writing</h3>
                        <a href="#"><p className="enrol-btn">Enrol now <AiOutlineArrowRight /></p></a>
                    </div>
                    
                </div>

                <div className="cert-card hide">
                    <img alt="card image" src={backendDevImg} className='card-img'/>
                    <div className="card-text">
                        <h3>Backend Development</h3>
                        <a href="#"><p className="enrol-btn">Enrol now <AiOutlineArrowRight /></p></a>
                    </div>
                    
                </div>

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