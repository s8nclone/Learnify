import React from 'react'
import './SignUp.css'
import Button from '../../assets/Button.svg'
import gl from '../../assets/google-logo.svg'
import fl from '../../assets/fl.svg'
import spbimg from '../../assets/signupBackgroundImage.jpg'


function SignUp() {
  return (
    <>
      <div className='signup-container'>

        <div className='paragraph-container'>
          <div className='spbimg'>
         </div>
          <div className='signup-note'>
            <h3 className='h3'>Welcome!!</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Provident, expedita.
              Quidem laudantium asperiores voluptatem  magnam cum blanditiis,
              optio natus totam!
            </p>
          </div>
        </div>
        <div className='details-container'> 
        
            <div className='txt-h'>
              <h1>Create Account</h1>
            </div>


          <form className='signup-form' action='' method='' >
            <div className='nam'>
              <input className='nam1' type="text" placeholder='First Name' />
              <input className='nam2' type="text" placeholder='Last Name' />
            </div>
            
              <input type="text" placeholder='email' />
              <input type="password" placeholder='Password' />
            <div className='checkbox'>
              <img src={Button} alt='checkbox' />
              <label for='checkbox'> Accept Learnify<a href="#">Terms and Condition</a>  </label>
            </div>
              <input type='submit' value='Create Account' className='createacct-btn' />
          </form>
           
          <p  className = 'memlink'>Already a member? <a href="#">Log In</a></p>
          
          <div className='hr' style={{ display: 'flex', width: '50rem', alignItems: 'center', gap: '10px' }}>
            <hr style={{ width: '24rem', height: '0.5px' }} /><h3>or</h3><hr style={{ width: '24rem' }} />
          </div>

          <div className='social-logo'>
            <a href="#"><button className="apps-button">
              <img src={gl} alt="google logo" />
              <p className="app-name">G<span className="o">o</span><span className="oo">o</span><span className="g">g</span>le</p>
            </button>
            </a>
            <a href="#"><button className="apps-button">
              <img src={fl} alt="facebook logo" />
              <p className="app-name">Facebook</p>
            </button>
            </a>
          </div>

        </div>

      </div>
    </>
  )
}

export default SignUp;
