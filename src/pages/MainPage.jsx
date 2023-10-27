import React from "react";
import HeroSection from '../Components/HeroSection/HeroSection'
import ReviewFrame from '../Components/ReviewSection/ReviewFrame'
import Certification from '../Components/CertificationSection/Certification'
import Features from '../Components/FeatureSection/Features'
import CollectionVideo from '../Components/CollectionVideoSection/CollectionVideo'
import LearnersSection from '../Components/LearnersSection/LearnersSection'
import FaqSection from '../Components/FAQSection/FaqSection'
import TutorSection from '../Components/TutorSection/TutorSection'
import LeaderSection from '../Components/LeaderSection/LeaderSection'
import AddedCourses from "../components/CertificationSection/AddedCourses";

export default function MainPage() {
    return (
        <>
            <HeroSection />
            <ReviewFrame/>
            <Features />
            <Certification />
            <CollectionVideo />
            <AddedCourses />
            <LearnersSection />
            <FaqSection className="homepage-faq"/>
            <TutorSection />
            <LeaderSection />
        </>
    )
}