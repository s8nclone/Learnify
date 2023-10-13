import React from 'react'
import { Link } from 'react-router-dom'
import searchIcon from '../../assets/search-icon.svg'
import Arrow from '../../assets/forwardArrow.svg'
import logoutBtn from '../../assets/logout.svg'
import daylight from '../../assets/daylighSwitch.svg'
import bell from '../../assets/notificationComponent.svg'
import profilePhoto from '../../assets/user-dp-5.png'

function CoursesHeader() {
  return (
    <>
        <nav className="courses-nav">
            <div className='logo'>
                <h1><Link to={"/"}>Learnify</Link></h1>
            </div>

            <form className="courses-search-form">
                <input className="courses-search-field" type="search" placeholder="what do you want to learn?" name="search" />
                <button type="submit"><img src={searchIcon} alt="search icon" className="courses-search-icon"/></button>
            </form>

            <div className="courses-nav-btn">
              <button className="darkmodeBtn button"><img src={daylight} alt="daylight icon" /></button>
              <button className="notifyBtn button"><img src={bell} alt="notification icon" /></button>
              <div className="profile-photo"><img src={profilePhoto} alt="profile photo" />
                <div className="dropdown">
                    <ul>
                        <li><a href="#"><h5>Profile </h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                        <li><a href="#"><h5>My Dashboard</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                        <li><a href="#"><h5>Accomplishments</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                        <li><a href="#"><h5>Settings</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                        <li><a href="#"><h5>Help Center</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                        <li><a href="#"><h5>Log Out</h5> <img src={logoutBtn} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                    </ul>
                </div>
              </div>
            </div>
        </nav>
    </>
  )
}

export default CoursesHeader