import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../hooks/context';

function ForgotPasswordStepOne() {
  const { setPasswordProgress } = useContext(AuthContext);

  const navigate = useNavigate();

  const setProgress = () => {
      setPasswordProgress(!false);
      navigate("/login/forgotpassword/2");
  }

  return (
    <>
        <section className="reset-pass-steps">
            <div className="reset-pass-step-header">
                <h3>Forgot Password</h3>
                <p>Enter the email you used to create your account so we can send you a link for reseting your password.</p>
            </div>
            <div className="reset-pass-step-input">
                <input type="email" placeholder="example@email.com" className="reset-input-box"/>
                <input type="submit" value="Login" className="reset-step-btn" onClick={setProgress} />
            </div>
        </section>
    </>
  )
}

export default ForgotPasswordStepOne