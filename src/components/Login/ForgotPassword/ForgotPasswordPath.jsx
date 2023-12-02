import React from 'react'
import forgotPassLine from '../../../assets/forgotPasswordLine.svg'
import { useLocation } from 'react-router-dom';
import { AiOutlineCheck } from 'react-icons/ai'

function ForgotPasswordPath() {

  const location = useLocation();

  const isTwoOpen = location.pathname >= "/login/forgotpassword/2"

  const isThreeOpen = location.pathname >= "/login/forgotpassword/3"

  const isFourOpen = location.pathname >= "/login/forgotpassword/complete"

  return (
    <>
        <div className="forgot-pass-progress">
            <div className="forgot-pass-milestone pass-progress">1</div>
            <div className="forgot-pass-line"><img src={forgotPassLine} className={ isTwoOpen ? "pass-progress-bar" : null}/></div>
            <div className={`forgot-pass-milestone ${ isTwoOpen ? "pass-progress" : null }`}>2</div>
            <div className="forgot-pass-line"><img src={forgotPassLine} className={ isThreeOpen ? "pass-progress-bar" : null}/></div>
            <div className={`forgot-pass-milestone ${ isThreeOpen ? "pass-progress" : null }`}>3</div>
            <div className="forgot-pass-line"><img src={forgotPassLine} className={isFourOpen ? "pass-progress-bar" : null}/></div>
            <div className={`forgot-pass-milestone ${isFourOpen ? "pass-progress" : null }`}>{isFourOpen ? <AiOutlineCheck /> : 4}</div>
        </div>
    </>
  )
}

export default ForgotPasswordPath