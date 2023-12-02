import React, { useContext } from 'react'
import './login.css'
import google from '../../assets/googleLogo.svg'
import { Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../hooks/context.jsx'
import { useState } from 'react'

function Login() {
  const [isClick, setIsClicked] = useState(false);
  const {setIsLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(!false);
    navigate("/");
  }

  const setLoginUser = e => {
    setIsClicked(current => !current)
  }
  
  return (
    <>
      <aside className="login-page">
        <div className="form-wrapper">
          <h3 className="form-h3">Log In</h3>
          <div className="user-selection-box">
            <button className={`user-selection-btn ${isClick ? "login-active" : null }`} onClick={setLoginUser} >As Student</button>
            <button className={`user-selection-btn ${isClick ? null : "login-active" }`} onClick={setLoginUser} >As Tutor</button>
          </div>
          <form className="login-form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="forget-remember-box">
              <div className='check-box'>
                <input type='checkbox' alt='checkbox' className="checkbox"/>
                <p className="tandc" style={{color: "#005584", fontWeight: "500"}}> Remember me</p>
              </div>
              <Link to="forgotpassword" className="forgot-pass-link">Forgot Password?</Link>
            </div>
            <input type="submit" value="Login" className="login-btn" onClick={login}/>
            <p className="member-para">Not a member yet? <a href="#" className="create-acct-link">Create Account</a></p>
          </form>
          <div className="or-container">
            <div><hr className="line-left"/></div>
            <p>or</p>
            <div><hr className="line-right" /></div>
            
          </div>
          <div className="login-apps">
            <a href="#"><button className="apps-button">
                  <img src={google} alt="google logo"/>
                  <p className="app-name">G<span className="o">o</span><span className="oo">o</span><span className="g">g</span>le</p>
              </button>
            </a>
          </div>
          <p className="footer-center">2023 Learnify. All Rights Reserved</p>
        </div>

      </aside>
    </>
  )
}

export default Login;