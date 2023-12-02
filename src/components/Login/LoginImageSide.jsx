import React from 'react'
import loginBackground from '../../assets/loginBackgroundImage.jpeg'

function LoginImageSide() {
  return (
    <div className="login-image" 
        style={{ background: `linear-gradient(0deg, rgba(2, 36, 63, 0.70) 0%, rgba(2, 36, 63, 0.70) 100%), url(${loginBackground})`, 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover",
        backgroundPosition: "30%"}}
    >
        <header className="login-header">Learnify</header>
        <div className="login-note">
            <h3 className="H3">A Smart Way To <br></br>Start Your Journey In Tech</h3>
            <p>A comprehensive approah to navigating your 
            career for a better future
            </p>
        </div>
    </div>
  )
}

export default LoginImageSide