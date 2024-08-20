import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-top">
            <h2>Our Social Media Accounts</h2>
            <div className="tools">
            <FaFacebook />
            <CiInstagram />
            <FaTwitter />
            </div>
            
        </div>
        <hr />
        <div className="footer-bottom">
            <h2>Copyright 2024 </h2>
            <FaCopyright className='fac'/>
        </div>
    </div>
  )
}

export default Footer