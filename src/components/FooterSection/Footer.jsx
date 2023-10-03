import React from 'react'
import './footer.css'
import appleLogo from '../../assets/apple-logo.svg'
import googlePlay from '../../assets/google-playstore.svg'
import fb from '../../assets/facebook-logo.svg'
import ig from '../../assets/instagram-logo.svg'
import ldi from '../../assets/linkedin-logo.svg'
import yt from '../../assets/youtube-logo.svg'
import tw from '../../assets/twitter-logo.svg'
import searchIcon from '../../assets/search-icon.svg'

function Footer() {
  return (
    <>
        <section className="footer-section">
            <section className="search-section">
                <div className="search-wrapper">
                    <p>Sorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.</p>
                    <form className="search-container">
                        <input className="search-field" type="search" placeholder="what do you want to learn?" />
                        <button type="submit"><img src={searchIcon} alt="search icon" /></button>
                    </form>
                    
                </div>
            </section>

            <footer className="footer-links-section">
                <div className="footer-wrapper">
                    <div className="mobile-download">
                        <h3>Mobile</h3>
                        <div className="mobile-icons">
                            <a href="#"><button className="app-button">
                                <img src={appleLogo} alt="apple logo" />
                                <p>Available on <br/><span>App store</span></p>
                                </button>
                            </a>
                            <a href="#"><button className="app-button">
                                <img src={googlePlay} alt="apple logo" />
                                <p>Available on <br/> <span>App store</span></p>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links-wrapper">
                        <div className="footer-links">
                            <h3>Learnify</h3>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">What we offer</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Leadership</a></li>
                                <li><a href="#">Professional Certificate</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h3>Community</h3>
                            <ul>
                                <li><a href="#">Learners</a></li>
                                <li><a href="#">Tech Blog</a></li>
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Affiliates</a></li>
                                <li><a href="#">Become a Tutor</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h3>Support</h3>
                            <ul>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Help and FAQs</a></li>
                                <li><a href="#">Service status</a></li>
                                <li><a href="#">Tech Requirements</a></li>
                                <li><a href="#">Email</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h3>More</h3>
                            <ul>
                                <li><a href="#">Press</a></li>
                                <li><a href="#">Investors</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Accessibility</a></li>
                                <li><a href="#">Articles</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="legal">
                    <div className="legal-links">
                        <ul>
                            <li>Learnify, Inc. 2023</li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Sitemaps</a></li>
                        </ul>
                    </div>
                    <div className="legal-links">
                        <ul>
                            <li><a href="#"><img src={tw} alt="twitter logo"/></a></li>
                            <li><a href="#"><img src={yt} alt="youtube logo"/></a></li>
                            <li><a href="#"><img src={fb} alt="facebook logo"/></a></li>
                            <li><a href="#"><img src={ig} alt="instagram logo"/></a></li>
                            <li><a href="#"><img src={ldi} alt="linkedin logo"/></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </section>   
    </>
  )
}

export default Footer;