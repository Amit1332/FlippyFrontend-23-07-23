import React from 'react'
import {Link } from "react-router-dom"
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
    <div className="navbar">
    <div className="left_nav">
      <img className='company_logo' src="flippyLogo.png" alt="img" />
    <div className='whywhy text-nowrap'>
        <li>Why Sell on flippy 7</li>
        <li>How it works</li>
        <li>Pricing & Commission</li>
        <li>Price Calculator</li>
      </div>
    </div>
    <div className="right_nav">
      <Link to="/login"><button className='login_btn btn btn-sm text-capitalize rounded-pill'>Login</button></Link>
      <Link to="/signup"><button className='supplier_btn btn btn-sm text-capitalize rounded-pill' >Be a Supplier</button></Link>
    </div>
    </div>
    </div>
  )
}

export default Navbar
