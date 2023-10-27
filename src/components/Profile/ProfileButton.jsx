import React from 'react'
import './profileButton.css'
import profilePhoto from '../../assets/user-dp-5.png'
import Arrow from '../../assets/forwardArrow.svg'
import logoutBtn from '../../assets/logout.svg'


function ProfileButton() {
  return (
    <div className="profile-photo"><img src={profilePhoto} alt="profile photo" />
        <div className="dropdown">
            <ul>
                <li><a href="#"><h5>Profile </h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                {/* <li><Link to="/dashboard"><h5>My Dashboard</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></Link></li> */}
                <li><a href="#"><h5>Accomplishments</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                <li><a href="#"><h5>Settings</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                <li><a href="#"><h5>Help Center</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                <li><a href="#"><h5>Log Out</h5> <img src={logoutBtn} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default ProfileButton