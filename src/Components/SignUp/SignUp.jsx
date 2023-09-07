import React from 'react'
import './SignUp.css'
import Button from '../../assets/Button.svg'
import gl from '../../assets/google-logo.svg'
import fl from '../../assets/fl.svg'
import spbimg from '../../assets/card.png'

function SignUp() {
  return (
    <>
      <div className='signup-container'>

        <div className='paragraph-container'>
          <img src={spbimg} height='646rem' width='600rem' alt='backgound image' />
        </div>

        <form action='' method='' className='details-container'>
          <div>
            <h1>Create Account</h1>
          </div>
          <div className='nam'>

            <div>
              <input className='nam1' type="text" placeholder='First Name' />
            </div>
            <div>
              <input className='nam2' type="text" placeholder='Last Name' />
            </div>
          </div>
          <div className='email'>
            <input type="text" placeholder='email' />
          </div>
          <div className='password'>
            <input type="password" placeholder='Password' />
          </div>
          <div className='checkbox'>
            <img src={Button} alt='checkbox' />
            <label for='checkbox'> Accept Learnify<a href="#">Terms and Condition</a>  </label>
          </div>
          <div className='c-btn'>
            <button>Create Account</button>
            <p>Already a member? <a href="#">Log In</a></p>
          </div>
          <div className='hr' style={{ display: 'flex', width: '450px', alignItems: 'center', gap: '10px' }}>
            <hr style={{ width: '23rem', height: '0.5px' }} /><p>or</p><hr style={{ width: '23rem' }} />
          </div>

          <div className='social-logo'>
            <a href="#"><button className="apps-button">
                    <img src={gl} alt="google logo"/>
                    <p className="app-name">G<span className="o">o</span><span className="oo">o</span><span className="g">g</span>le</p>
                </button>
              </a>
            <a href="#"><button className="apps-button">
                    <img src={fl} alt="facebook logo" />
                    <p className="app-name">Facebook</p>
                </button>
              </a>
          </div>

        </form>

      </div>
    </>
  )
}

export default SignUp;
