import React from 'react'
import secondLogo from '../../assets/images/react.svg'
import './pageheader.css'

export default function Pageheader() {
  return (
    <header>
      <div className="hlogo">
        <img src={secondLogo} alt="second logo" />
      </div>
      <div className="rightmenu">
        <p>Sign in/Register</p>
      </div>
    </header>
  )
}
