import React from 'react'

function Tutors({author, title}) {
  return (
    <>
        <div className="tutor_card_container">
            <div className="tutor_image_container">
                <img src="#" alt="play logo" className="tutor_image"/>
            </div>
            <div className="tutor_information">
                <p className="tutor_name">{author}</p>
                <p className="tutor_roles">{title}</p>
                <p className="tutor_rating_no">200 Courses</p>
            </div>
        </div>
    </>
  )
}

export default Tutors