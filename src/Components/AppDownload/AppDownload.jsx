import React from 'react'
import'./AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='appDownload' id='appDownload'>
        <p>For BetterExperience Download <br/> Arshas App</p>
        <div className="app-dowload-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>

    </div>
  )
}

export default AppDownload