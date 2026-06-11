import React, { useState, useEffect } from 'react'
import './OrderTracking.css'
import { useNavigate } from 'react-router-dom'

const OrderTracking = () => {

  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className='order-placed-wrapper'>
      <div className={`order-placed-card ${show ? 'visible' : ''}`}>

        <div className='order-check-circle'>
          <svg viewBox='0 0 52 52' className='checkmark-svg'>
            <circle className='checkmark-circle' cx='26' cy='26' r='24' fill='none' />
            <path  className='checkmark-tick'   fill='none' d='M14 27 l8 8 l16-16' />
          </svg>
        </div>

        <h2>Order Placed Successfully! 🎉</h2>
        <p className='order-placed-msg'>
          Your order has been received and is being processed.<br />
          Estimated delivery time: <strong>30 minutes</strong>
        </p>

        <div className='order-placed-details'>
          <div className='order-detail-chip'>🧾 Order #FH-{Math.floor(Math.random()*90000)+10000}</div>
          <div className='order-detail-chip'>📍 Delivery to your address</div>
          <div className='order-detail-chip'>💳 Payment on delivery</div>
        </div>

        <button className='order-back-btn' onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default OrderTracking