import React from 'react'
import CertificationCard from './CertificationCard'
import { certificateData } from './cetificationData'

function AddedCourses() {

    const newAddedCourses = certificateData.slice(0, 4);
  return (
    <>
        <div className="certification-container">
            <div className="cert-header">
                <h2>New Added Courses</h2>
            </div>

            <div className="certification-grid">
                
                {newAddedCourses.map((item, index)=>(
                    <CertificationCard key={index} certImage={item.certImage} certCourse={item.certCourse}/>
                ))}

            </div>

            <button className="click-btn">Discover more</button>
        </div>
    </>
  )

}

export default AddedCourses