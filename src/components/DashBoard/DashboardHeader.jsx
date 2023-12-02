import React from 'react'
import ProfileButton from '../Profile/ProfileButton'
import SearchBar from '../searchBar/SearchBar'

function DashboardHeader() {
  return (
    <>
      <SearchBar />

      <div className="courses-nav-btn">
        <button className="darkmodeBtn button"><img src={daylight} alt="daylight icon" /></button>
        <button className="notifyBtn button"><img src={bell} alt="notification icon" /></button>
        <ProfileButton />
      </div>
    </>
  )
}

export default DashboardHeader