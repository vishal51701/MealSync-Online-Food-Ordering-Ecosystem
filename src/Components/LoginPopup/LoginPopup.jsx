import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin, onLoginSuccess }) => {

  const [currState, setCurrentState] = useState("Login")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onLoginSuccess) onLoginSuccess()
  }

  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
        </div>
        <div className='login-popup-inputs'>
          {currState === "Login" ? null : (
            <input type="text" placeholder='Your Name' required />
          )}
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use &amp; privacy policy.</p>
        </div>
        {currState === "Login"
          ? <p>Don't have an account? <span onClick={() => setCurrentState("Sign Up")}>Sign up here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup