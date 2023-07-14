import React, { useState } from 'react'
import arrowDown from '../../assets/keyboardArrowDown.svg'
import arrowUp from '../../assets/keyboardArrowUp.svg'

const Accordion = ({ question, answers }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        {isActive ?<div className="active">{question}</div> : <div>{question}</div>}
        <div>{isActive ? <img src={arrowUp} /> : <img src={arrowDown} />}</div>
      </div>
      {isActive && <div className="accordion-content">{answers}</div>}
    </div>
  );
};

export default Accordion;