import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../hooks/context';

function ForgotPasswordStepFour() {
    const { setIsLoggedIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const login = () => {
        setIsLoggedIn(!false);
        navigate("/");
    }

  return (
    <>
        <section className="reset-pass-steps">
            <div className="reset-pass-step-header">
                <h3>Password reset successful</h3>
                <p>Continue into your account with your new password</p>
            </div>
            <div className="reset-pass-step-input">
                <input type="submit" value="Continue" className="reset-step-btn" onClick={login}/>
            </div>
        </section>
    </>
  )
}

export default ForgotPasswordStepFour