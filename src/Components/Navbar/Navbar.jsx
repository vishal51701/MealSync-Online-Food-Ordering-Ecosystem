import React, { useContext, useState, useRef } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin, isLoggedIn, searchQuery, setSearchQuery }) => {

  const [menu, setMenu] = useState("home")
  const [searchOpen, setSearchOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const searchRef = useRef(null)

  const { getTotalCartAmount } = useContext(StoreContext)

  const toggleDark = () => {
    const next = !darkMode
    setDarkMode(next)
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
  }

  const handleSearchToggle = () => {
    setSearchOpen(prev => !prev)
    if (!searchOpen) {
      setTimeout(() => searchRef.current?.focus(), 100)
    } else {
      setSearchQuery('')
    }
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>

      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#appDownload' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
      </ul>

      <div className="navbar-right">

        <div className="navbar-search-wrapper">
          <img
            src={assets.search_icon}
            alt="search"
            onClick={handleSearchToggle}
            className="search-icon-btn"
          />
          <div className={`search-bar-container ${searchOpen ? 'open' : ''}`}>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="navbar-search-input"
            />
            {searchQuery && (
              <span className="search-clear" onClick={() => setSearchQuery('')}>✕</span>
            )}
          </div>
        </div>

        <button className="dark-toggle" onClick={toggleDark} title="Toggle dark mode">
          {darkMode ? '☀️' : '🌙'}
        </button>

        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="cart" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        <button onClick={() => setShowLogin(true)}>
          {isLoggedIn ? 'My Account' : 'Sign In'}
        </button>
      </div>
    </div>
  )
}

export default Navbar