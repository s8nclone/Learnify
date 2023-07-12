import React from 'react'
import './collectionVideo.css'
import tutorImg from '../../assets/courseTutorImg.png'
import playLogo from '../../assets/playLogo.svg'

function CollectionVideo() {
  return (
    <>
        <div className="video-collection-flex">
            <div className="video-container" style={{ background: `linear-gradient(0deg, rgba(77, 77, 77, 0.44) 0%, rgba(77, 77, 77, 0.44) 100%), url(${tutorImg})`, 
                backgroundRepeat: "no-repeat", 
                backgroundSize: "cover"}}
            >
                <img src={playLogo} alt="play logo" className="play-logo"/>
            </div>
            <div className="meet-tutors">
                <h2 className="meet-tutors_h2">Meet our tutors</h2>
                <blockquote className="meet-tutors_blockquote">"Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non velit illum sit numquam minima nihil ipsum impedit porro?
                    Dolor tempora illo maxime libero assumenda optio unde beatae molestias dolorum magni.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae dignissimos."
                </blockquote>
                <h4 className="meet-tutors_h4">Aisha Garba</h4>
                <cite className="meet-tutors_cite">Cybersecurity Tutor</cite>
            </div>
        </div>
    </>
  )
}

export default CollectionVideo;