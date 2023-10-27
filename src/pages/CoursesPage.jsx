import React from 'react'
import '../components/Courses/courses.css'
import CoursesList from '../components/Courses/CoursesList'
import Footer from '../components/FooterSection/Footer'
import FaqSection from '../components/FAQSection/FaqSection'

function CoursesPage() {
  return (
    <>
      <CoursesList />
      <FaqSection className="courses-faq"/>
    </>
  )
}

export default CoursesPage