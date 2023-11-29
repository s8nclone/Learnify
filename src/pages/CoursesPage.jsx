import React from 'react'
import '../components/Courses/courses.css'
import CoursesList from '../components/Courses/CoursesList'
import FaqSection from '../components/FAQSection/FaqSection'
import LearnersSection from '../components/LearnersSection/LearnersSection'

function CoursesPage() {
  return (
    <>
      <CoursesList />
      <FaqSection className="courses-faq"/>
      <LearnersSection />
    </>
  )
}

export default CoursesPage