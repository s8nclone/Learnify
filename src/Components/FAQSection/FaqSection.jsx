import React, { useState } from 'react'
import './faqSection.css'
import Accordion from './Accordion';
import { FaqQuestions } from './faqQuestions';

function FaqSection() {

    const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
        <div className="accordion">
            <div>
                <h1 className="faq-h1">FAQs</h1>
            </div>

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