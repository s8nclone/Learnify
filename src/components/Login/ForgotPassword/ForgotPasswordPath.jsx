import React from 'react'
import forgotPassLine from '../../../assets/forgotPasswordLine.svg'

function ForgotPasswordPath() {
  return (
    <>
        <div className="forgot-pass-progress">
            <div className="forgot-pass-milestone">1</div>
            <div className="forgot-pass-line"><img src={forgotPassLine} /></div>
            <div className="forgot-pass-milestone">2</div>
            <div className="forgot-pass-line"><img src={forgotPassLine} /></div>
            <div className="forgot-pass-milestone">3</div>
            <div className="forgot-pass-line"><img src={forgotPassLine} /></div>
            <div className="forgot-pass-milestone">4</div>
        </div>
    </>
  )
}

export default ForgotPasswordPath