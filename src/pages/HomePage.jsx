import React from "react";
import HeroSection from '../Components/HeroSection/HeroSection'
import ReviewFrame from '../Components/ReviewSection/ReviewFrame'
import Certification from '../Components/CertificationSection/Certification'
import Features from '../Components/FeatureSection/Features'
import CollectionVideo from '../Components/CollectionVideoSection/CollectionVideo'
import LearnersSection from '../Components/LearnersSection/LearnersSection'
import FaqSection from '../Components/FAQSection/FaqSection'

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <ReviewFrame/>
            <Features />
            <Certification />
            <CollectionVideo />
            <LearnersSection/>
            <FaqSection />
        </>
    )
}