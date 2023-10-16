import React from 'react'
import gstar from '../../assets/goldStarRatings.svg'
import bstar from '../../assets/blankStarRatings.svg'

function Tutors({author, title, rating}) {
  return (
    <>
        <div className="tutor_card_container">
            <div className="tutor_image">
                <img src="#" alt="play logo" className="tutor_image"/>
            </div>
            <div className="tutor_information">
                <p className="tutor_name">{author}</p>
                <p className="tutor_roles">{title}</p>
                <div className="tutor_rating">
                    <p className="tutor_rate">{rating}</p>
                    <p className="tutor_rating_stars">
                        <span role='star'><img src={gstar} alt="gold start" /></span>
                        <span role='star'><img src={gstar} alt="gold start" /></span>
                        <span role='star'><img src={gstar} alt="gold start" /></span>
                        <span role='star'><img src={gstar} alt="gold start" /></span>
                        <span role='star'><img src={bstar} alt="blank start" /></span>
                    </p>
                    <p className="tutor_rating_no">(450)</p>

                </div>
                <p className="tutor_rating_no">200 Courses</p>
            </div>
        </div>
    </>
  )
}

export default Tutors