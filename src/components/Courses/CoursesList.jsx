import React, { useEffect, useState } from 'react'
import frontArrow from '../../assets/moreFrontArrow.svg'
import axios from 'axios'
import CoursesCard from './CoursesCard'
import Tutors from './Tutors'
import Placeholder from '../Placeholder/Placeholder'
import designCourse from '../../assets/productDesignCourseImg.jpg'
import gstar from '../../assets/goldStarRatings.svg'
import bstar from '../../assets/blankStarRatings.svg'

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

      <section className="courses-hero-section">
        <div className="courses-hero" style={{background: `linear-gradient(97deg, rgba(1, 6, 10, 0.20) 8.33%, rgba(2, 36, 63, 0.00) 80.86%), url(${designCourse})`, 
          backgroundRepeat: "no-repeat", 
          backgroundSize: "cover",
          backgroundPosition: "50%"}}
        >
          <div className="courses-hero-description">
            <h1 className="courses-desc-header">Product Design</h1>
            <p className="courses-desc">Porem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc vulputate
              ibero et velit interdum, ac aliquet odio mattis.
            </p>
            <div className="courses_rating">
              <p className="courses_rate">3.5</p>
              <p className="courses_rating_stars">
              <span role='star'><img src={gstar} alt="gold start" /></span>
              <span role='star'><img src={gstar} alt="gold start" /></span>
              <span role='star'><img src={gstar} alt="gold start" /></span>
              <span role='star'><img src={bstar} alt="blank start" /></span>
              <span role='star'><img src={bstar} alt="blank start" /></span>
              </p>
              <p className="courses_rating_no">(350)</p>
            </div>
            <div className="gs-btn">
              <button className="get-started-btn">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      <section className="courses-main-body">
        <section className="courses-section">
          <h2 className="recommend-courses">New Courses</h2>

          <div className="all_courses_list">
            <h3>Design Courses</h3>

            <div className="courses-list-container">
              {loading 
              ? (
                  <Placeholder />
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

            <button className="click-btn view_all">View all</button>
          </div>

          <div className="all_courses_list">
            <h3>Frontend Development Courses</h3>

            <div className="courses-list-container">
              {loading 
                ? (
                    <Placeholder />
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

            <button className="click-btn view_all">View all</button>
          </div>

          <div className="all_courses_list">
            <h3>Backend Development Courses</h3>

            <div className="courses-list-container">
              {loading 
              ? (
                  <Placeholder />
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

            <button className="click-btn view_all">View all</button>
          </div>
          
        </section>

        <button className="click-btn">Browse All Programs</button>

        
      </section>
      
      <section className="tutor_section">
        <h3 className="tutor_section_header">Popular Instructors</h3>

        <div className="all_tutor_list">
          <div className="courses-list-container">
            {loading 
            ? (
                <Placeholder />
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
        </div>
        <button className="click-btn">View all</button>
          
      </section>
    </>
  )
}

export default CoursesList