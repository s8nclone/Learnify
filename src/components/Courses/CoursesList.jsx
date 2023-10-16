import React, { useEffect, useState } from 'react'
import frontArrow from '../../assets/moreFrontArrow.svg'
// import playLogo from '../../assets/playLogo.svg'
// import gstar from '../../assets/goldStarRatings.svg'
// import bstar from '../../assets/blankStarRatings.svg'
import axios from 'axios'
import CoursesCard from './CoursesCard'
import Tutors from './Tutors'

function CoursesList() {
  const [courses, setCourses] = useState([])
  const [loading, isLoading] = useState(true)

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get("https://learnify-csrv.onrender.com/courses/");
        console.log("called data" ,response);
        setCourses(response.data.data);
        isLoading(false)
      } catch (err){
        console.error(err)
        isLoading(false)
      }

    }
    getCourses();
  }, [])

  const frontendCourses = courses
  .filter((course) => course.subject === "Frontend")
  .slice(0, 4);

  console.log("courses array", courses);

  return (
    <>
      <div className="all-courses">
        <ul className="all-courses-list">
          <li className="all-courses-list-item"><a href="#" className="courses-list-link active">All</a></li>
          <li className="all-courses-list-item"><a href="#" className="courses-list-link">UiUx Design</a></li>
          <li className="all-courses-list-item"><a href="#" className="courses-list-link">Cyber Security</a></li>
          <li className="all-courses-list-item"><a href="#" className="courses-list-link">Cloud Computing</a></li>
          <li className="all-courses-list-item"><a href="#" className="courses-list-link">FrontEnd Development</a></li>
          <li className="all-courses-list-item"><a href="#" className="courses-list-link">BackEnd Development</a></li>
          <li className="all-courses-list-item"><a href="#" className="courses-list-link">Technical Writing</a></li>
          <li className="all-courses-list-item"><a href="#" className="courses-list-link">Project Manangement</a></li>
        </ul>
        <button className="all-courses-btn"><img src={frontArrow} alt="forward arrow button" /></button>
      </div>

      <section className="courses-main-body">
        <section className="courses-section">
          <h2 className="recommend-courses">Recommended Courses</h2>

          <div className="all_courses_list">
            <h3>Design Courses</h3>

            <div className="courses-list-container">
              {loading 
              ? (
                <div>Loading...</div>
              ) 
              : courses.length > 0 
                ? (
                  courses.map((course) => (
                    course.subject === "Design"
                    ? <CoursesCard {...course} key={course._id} />
                    : null
                  ))
                ) : (
                  <div>No courses available.</div>
                )}
            </div>

            <button className="click-btn">view more</button>
          </div>

          <div className="all_courses_list">
            <h3>Frontend Development Courses</h3>

            <div className="courses-list-container">
              {loading 
                ? (
                <div>Loading...</div>
                ) 
                : frontendCourses.length > 0 
                  ? (
                  frontendCourses.map((course) => (
                    <CoursesCard {...course} key={course._id} />
                  ))
                ) : (
                  <div>No frontend courses available.</div>
              )}
            </div>

            <button className="click-btn">view more</button>
          </div>

          <div className="all_courses_list">
            <h3>Backend Development Courses</h3>

            <div className="courses-list-container">
              {loading 
              ? (
                <div>Loading...</div>
              ) 
              : courses.length > 0 
                ? (
                  courses.map((course) => (
                    course.subject === "Backend"
                    ? <CoursesCard {...course} key={course._id} />
                    : null
                  ))
                ) : (
                  <div>No courses available.</div>
                )}
            </div>

            <button className="click-btn">view more</button>
          </div>
          
        </section>

        <button className="click-btn">Browse All Programs</button>

        <section>
          <h3>Popular Instructors</h3>

          <div className="courses-list-container">
              {loading 
              ? (
                <div>Loading...</div>
              ) 
              : courses.length > 0 
                ? (
                  courses.map((course) => (
                    course.subject === "Design"
                    ? <Tutors {...course} key={course._id} />
                    : null
                  ))
                ) : (
                  <div>No courses available.</div>
                )}
            </div>
        </section>
      </section>
    </>
  )
}

export default CoursesList