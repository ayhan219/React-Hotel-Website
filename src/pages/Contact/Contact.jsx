import React from 'react'
import "./Contact.css"
import { IoCallSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="contact-area">
        <IoCallSharp className="contact-icon" />
        <h4>For Reservation</h4>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required placeholder="Write your message here" />
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        <div className="phone">
            <h4>Phone Number</h4>
            <h3>0555 555 55 55</h3>
        </div>
      </div>
    </div>
  )
}

export default Contact;
