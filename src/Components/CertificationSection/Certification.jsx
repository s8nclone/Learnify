import React from 'react'
import './certification.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import productDesignImg from '../../assets/productDesignImage.png'
import uxWritingImg from '../../assets/uxWritingImage.png'
import backendDevImg from '../../assets/backendDevImage.png'
import cybersecImg from '../../assets/cyberSecurityImage.png'
import productmgmtImg from '../../assets/productManagementImage.png'

function Certification() {
  return (
    <>
        <div className="certification-container">
            <div className="cert-header">
                <h2>Get professional certifications</h2>
            </div>

            <div className="certification-grid">
                <div className="cert-card">
                    <div className="card-img"><img alt="card image" src={productDesignImg}/></div>
                    <div className="card-text">
                        <h3>Product Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis, sed earum laboriosam amet ab modi. Dicta vero 
                            eligendi error adipisci.
                        </p>
                        <a><p className="enrol-btn">Enrol now <AiOutlineArrowRight /></p></a>
                    </div>
                    
                </div>

                <div className="cert-card">
                    <div className="card-img"><img alt="card image" src={uxWritingImg}/></div>
                    <div className="card-text">
                        <h3>UX Writing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis, sed earum laboriosam amet ab modi. Dicta vero 
                            eligendi error adipisci.
                        </p>
                        <a><p className="enrol-btn">Enrol now <AiOutlineArrowRight /></p></a>
                    </div>
                    
                </div>

                <div className="cert-card">
                    <div className="card-img"><img alt="card image" src={backendDevImg}/></div>
                    <div className="card-text">
                        <h3>Backend Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis, sed earum laboriosam amet ab modi. Dicta vero 
                            eligendi error adipisci.
                        </p>
                        <a><p className="enrol-btn">Enrol now <AiOutlineArrowRight /></p></a>
                    </div>
                    
                </div>

                <div className="cert-card">
                    <div className="card-img"><img alt="card image" src={cybersecImg}/></div>
                    <div className="card-text">
                        <h3>Cyber Security</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis, sed earum laboriosam amet ab modi. Dicta vero 
                            eligendi error adipisci.
                        </p>
                        <a><p className="enrol-btn">Enrol now <AiOutlineArrowRight /></p></a>
                    </div>
                    
                </div>

                <div className="cert-card">
                    <div className="card-img"><img alt="card image" src={productmgmtImg}/></div>
                    <div className="card-text">
                        <h3>Product Management</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis, sed earum laboriosam amet ab modi. Dicta vero 
                            eligendi error adipisci.
                        </p>
                        <a><p className="enrol-btn">Enrol now <AiOutlineArrowRight /></p></a>
                    </div>
                    
                </div>

                <div className="cert-card">
                    <div className="card-img"><img alt="card image" src={backendDevImg}/></div>
                    <div className="card-text">
                        <h3>FrontEnd Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis, sed earum laboriosam amet ab modi. Dicta vero 
                            eligendi error adipisci.
                        </p>
                        <a><p className="enrol-btn">Enrol now <AiOutlineArrowRight /></p></a>
                    </div>
                    
                </div>
            </div>

                <button className="click-btn">Discover more</button>
        </div>
    </>
  )
}

export default Certification