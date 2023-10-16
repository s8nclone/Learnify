import React, { useState } from 'react'
import './faqSection.css'
import Accordion from './Accordion';
import { FaqQuestions } from './faqQuestions';

function FaqSection() {

    const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
        <div className="accordion tutor_accordion">
            <h1 className="faq-h1">Frequently asked questions</h1>

            <div>
                {FaqQuestions.map(({ question, answers }, index) => (
                    <Accordion 
                        key={index}
                        question={question} 
                        answers={answers}
                        index={index}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    />
                ))}
            </div>
        </div>
    </>
  );
}

export default FaqSection