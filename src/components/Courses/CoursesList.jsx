import React, { useEffect, useState } from 'react'
import frontArrow from '../../assets/moreFrontArrow.svg'
import playLogo from '../../assets/playLogo.svg'
import gstar from '../../assets/goldStarRatings.svg'
import bstar from '../../assets/blankStarRatings.svg'
import axios from 'axios'

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


  const CoursesCard = ({ thumbnail_url, title, level, rating, author }) => {
    return (
      <div className="courses_card_container">
        <div className="video-container" style={{ background: `linear-gradient(0deg, rgba(77, 77, 77, 0.44) 0%, rgba(77, 77, 77, 0.44) 100%), url(${thumbnail_url})`, 
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
      </section>
    </>
  )
}

export default CoursesList