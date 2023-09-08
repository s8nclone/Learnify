import React from 'react'
import './login.css'
import google from '../../assets/googleLogo.svg'
import facebook from '../../assets/facebookLogo.svg'
import loginBackground from '../../assets/loginBackgroundImage.jpeg'

function Login() {
  return (
    <>
      <div className="login-page">
        <div className="login-image" 
            style={{ background: `linear-gradient(0deg, rgba(77, 77, 77, 0.44) 0%, rgba(77, 77, 77, 0.44) 100%), url(${loginBackground})`, 
            backgroundRepeat: "no-repeat", 
            backgroundSize: "cover",
            backgroundPosition: "30%"}}>
          <div className="login-note">
            <h3 className="H3">Welcome!</h3>
            <p>Borem ipsum dolor sit amet, consectetur 
              adipiscing elit.Nunc vulputate libero et vel
              it interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
        <aside className="form-section">
          <div className="form-wrapper">
            <h3 className="H3">Log In</h3>
            <form className="login-form">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#" className="forgot-pass-link">Forgot Password?</a>
              <input type="submit" value="Login" className="login-btn"/>
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
              <a href="#"><button className="apps-button">
                    <img src={facebook} alt="facebook logo" />
                    <p className="app-name">Facebook</p>
                </button>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}

export default Login;