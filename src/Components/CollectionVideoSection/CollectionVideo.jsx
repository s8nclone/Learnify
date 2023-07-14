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
                backgroundSize: "cover",
                backgroundPosition: "50% 30%"}}
            >
                <div className="video-container-content">
                    <p className="video-content-text">"Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Non velit illum sit numquam minima nihil ipsum impedit porro."
                    </p>
                    <div className="watch-video-flex">
                        <img src={playLogo} alt="play logo" className="play-logo"/>
                        <p className="watch-video-text">Watch the video</p>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </>
  )
}

export default CollectionVideo;