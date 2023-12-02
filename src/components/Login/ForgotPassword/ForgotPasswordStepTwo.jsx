import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../hooks/context'

function ForgotPasswordStepTwo() {
    const { setPasswordProgress } = useContext(AuthContext);

    const navigate = useNavigate();

    const setProgress = () => {
        setPasswordProgress(!false);
        navigate("/login/forgotpassword/3");
    }

  return (
    <>
        <section className="reset-pass-steps">
            <div className="reset-pass-step-header">
                <h3>Check your email</h3>
                <p>We have sent a link with a one time password reset information to ****************@gmail.com</p>
                <p>Didn't receive the mail? <a>Resend</a></p>
            </div>
            <div className="reset-pass-step-input">
                <input type="password" placeholder="Enter password" className="reset-input-box"/>
                {/* <Link to={"/login/forgotpassword/3"}><input type="submit" value="Send" className="reset-step-btn" /></Link> */}
                <input type="submit" value="Send" className="reset-step-btn" onClick={setProgress} />
            </div>
        </section>
    </>
  )
}

export default ForgotPasswordStepTwo