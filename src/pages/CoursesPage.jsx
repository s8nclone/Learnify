import React from 'react'
import '../components/Courses/courses.css'
import CoursesList from '../components/Courses/CoursesList' 
import CoursesHeader from '../components/Courses/CoursesHeader'
import Footer from '../components/FooterSection/Footer'
import FaqSection from '../components/FAQSection/FaqSection'

function CoursesPage() {
  return (
    <>
      <CoursesHeader />
      <CoursesList />
      <FaqSection />
      <Footer />
    </>
  )
}

export default CoursesPage