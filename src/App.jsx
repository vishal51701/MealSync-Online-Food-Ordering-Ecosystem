import React, { useState, useEffect, useContext } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import OrderTracking from './pages/OrderTracking/OrderTracking'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import WelcomeAlert from './Components/WelcomeAlert/WelcomeAlert'
import Toast from './Components/Toast/Toast'
import { StoreContext } from './Context/StoreContext'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  const [showWelcomeAlert, setShowWelcomeAlert] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const { searchQuery, setSearchQuery } = useContext(StoreContext)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoggedIn) setShowWelcomeAlert(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleWelcomeLogin = () => {
    setShowWelcomeAlert(false)
    setShowLogin(true)
  }

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
    setShowLogin(false)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <>
      {showWelcomeAlert && (
        <WelcomeAlert
          onLoginClick={handleWelcomeLogin}
          onSkip={() => setShowWelcomeAlert(false)}
        />
      )}

      {showLogin && (
        <LoginPopup
          setShowLogin={setShowLogin}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {showToast && <Toast message="🎉 You're logged in successfully! Welcome back!" />}

      <div className='app'>
        <Navbar
          setShowLogin={setShowLogin}
          isLoggedIn={isLoggedIn}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/track' element={<OrderTracking />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App