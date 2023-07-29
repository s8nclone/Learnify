import React from 'react'
import './TutorSection.css'
import tutorsectionimg from '../../assets/tutorsectionimg.png'
function TutorSection (){

  return(
    <>
    <div className="tutor-container">
      <div className='b-tutor'>
        <h1>Become a Tutor</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> 
          Aperiam qui error veritatis sed molestias cupiditate exercitationem.<br/> 
          Nemo cum odit asperiores saepe, tenetur nisi totam dolor aspernatur<br/> 
          praesentium soluta a quibusdam dolore impedit quam.<br/> 
          Quae molestiae mollitia, culpa eum architecto debitis!</p>
         <button className='tutor-btn'>Join us Now</button>
      </div>
      <div className='ts-img'>
      <img src={tutorsectionimg}  height='500rem' width='600rem' alt="tutorsectionimage" />
      </div>
    </div>
    </>
  )
}
export default TutorSection;




