import React from "react"
import playLogo from '../../assets/playLogo.svg'
import gstar from '../../assets/goldStarRatings.svg'
import bstar from '../../assets/blankStarRatings.svg'

const CoursesCard = ({ thumbnail_url, title, level, rating, author }) => {
    return (
        <div className="courses_card_container">
            <div className="video-container course_video_container" style={{ background: `linear-gradient(0deg, rgba(77, 77, 77, 0.44) 0%, rgba(77, 77, 77, 0.44) 100%), url(${thumbnail_url})`, 
            backgroundRepeat: "no-repeat", 
            backgroundSize: "cover",
            backgroundPosition: "50% 45%"}}
            >
                <div className="play-container courses_play_container"><img src={playLogo} alt="play logo" className="play-logo"/></div>
            </div>
            <div className="course_information">
                <p className="courses_title">{title}</p>
                <p className="courses_level">{level}</p>
                <div className="courses_rating">
                    <p className="courses_rate">{rating}</p>
                    <p className="courses_rating_stars">
                    <span role='star'><img src={gstar} alt="gold start" /></span>
                    <span role='star'><img src={gstar} alt="gold start" /></span>
                    <span role='star'><img src={gstar} alt="gold start" /></span>
                    <span role='star'><img src={gstar} alt="gold start" /></span>
                    <span role='star'><img src={bstar} alt="blank start" /></span>
                    </p>
                    <p className="courses_rating_no">(350)</p>
                </div>
                <p className="courses_author">{author}</p>
            </div>
        </div>
    )
}

export default CoursesCard