import React from 'react'
import { Link } from 'react-router-dom'

function ForgotPasswordStepThree() {
  return (
    <>
        <section className="reset-pass-steps">
            <div className="reset-pass-step-header">
                <h3>Reset Password</h3>
                <p>Choose a new password for your account.</p>
            </div>
            <div className="reset-pass-step-input">
                <input type="password" placeholder="Enter password" className="reset-input-box"/>
                <Link to={"/login/forgotpassword/complete"}><input type="submit" value="Send" className="reset-step-btn" /></Link>
            </div>
        </section>
    </>
  )
}

export default ForgotPasswordStepThree