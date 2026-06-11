import React from 'react'
import './Toast.css'

const Toast = ({ message }) => {
  return (
    <div className='toast'>
      <span className='toast-icon'>✅</span>
      <span>{message}</span>
    </div>
  )
}

export default Toast