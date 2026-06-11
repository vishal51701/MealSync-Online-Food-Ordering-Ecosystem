import React from 'react'
import './WelcomeAlert.css'

const WelcomeAlert = ({ onLoginClick, onSkip }) => {
  return (
    <div className='welcome-overlay'>
      <div className='welcome-box'>
        <span className='welcome-icon'>🍽️</span>
        <h2>Welcome to FoodHub! 👋</h2>
        <p>
          Please <span>log in</span> for a better experience —
          track your orders, save your favourite dishes, and
          explore <span>exclusive deals</span> made just for you!
        </p>
        <div className='welcome-buttons'>
          <button className='welcome-btn-login' onClick={onLoginClick}>
            Login / Sign Up
          </button>
          <button className='welcome-btn-skip' onClick={onSkip}>
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  )
}

export default WelcomeAlert