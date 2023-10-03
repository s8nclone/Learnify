import React from 'react'
import './TutorSection.css'
import tutorsectionimg from '../../assets/tutorsectionimg.png'


function TutorSection (){

  return(
    <>
    <div className="tutor-container">
      <div className='b-tutor'>
        <h1>Become a Tutor</h1>
        <p>Are you a passionate and qualified teacher who 
            adapts to student needs, can have an open and
            honest relationship with students?
            Learnify might be the best place for you.
        </p>
         <button className='tutor-btn'>Join us now</button>
      </div>
      <div className='ts-img'>
        <img src={tutorsectionimg} alt="tutor image" />
      </div>
    </div>
    </>
  )
}
export default TutorSection;




