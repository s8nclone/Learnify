import React, { useState } from 'react'
import './faqSection.css'
import Accordion from './Accordion';
import { FaqQuestions } from './faqQuestions';

function FaqSection() {

    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenAccordion(index === openAccordion ? null : index);
    };

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
                        isOpen = {index === openAccordion}
                        onClick = {() => handleAccordionClick(index)} 
                    />
                ))}
            </div>
        </div>
    </>
  );
}

export default FaqSection