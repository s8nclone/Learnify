import React from 'react'
import tutorImg from '../../assets/TutorPhoto.png'

function Tutors({author, title}) {
  return (
    <>
        <div className="tutor_card_container">
            <div className="tutor_image_container">
                <img src={tutorImg} alt="tutor photo" className="tutor_image"/>
            </div>
            <div className="tutor_information">
                <p className="tutor_name">{author}</p>
                <p className="tutor_roles">{title}</p>
                <p className="tutor_rating_no"><span>200</span> Courses</p>
            </div>
        </div>
    </>
  )
}

export default Tutors