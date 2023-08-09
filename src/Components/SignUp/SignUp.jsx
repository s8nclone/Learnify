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
            <sup>
              <label for='checkbox'> Accept Learnify<u>Terms and Condition</u>  </label>
            </sup>
          </div>
          <div className='c-btn'>
            <button>Create Account</button>
            <p>Already a member? <a href="#">Log In</a></p>
          </div>
          <div className='hr' style={{ display: 'flex', width: '450px', alignItems: 'center', gap: '10px' }}>
            <hr style={{ width: '23rem', height: '0.5px' }} /><p>or</p><hr style={{ width: '23rem' }} />
          </div>

          <div className='social-logo'>
            <div className='gl'>
              <img src={gl} width='20rem' height='18rem' alt="google-logo" />
              <h2>Google</h2>
            </div>

            <div className='fb'>
              <img src={fl} width='20rem' height='18rem' alt="facebook-logo" />
              <h2>Facebook</h2>
            </div>
          </div>

        </form>

      </div>
    </>
  )
}

export default SignUp;
