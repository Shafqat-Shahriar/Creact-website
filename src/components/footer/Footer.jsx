import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
    {/* Column 1: Logo */}
    <div className="footer-column">
        <img src="logo.png" alt="Company Logo" className="footer-logo" />
        <h5>We are a consultancy @digital Web <br/>agecncy for content makers</h5>
    </div>

    {/* Column 2: Navigation */}
    <div className="footer-column">
        <div className="footer-navigation">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Our Work</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </div>

     <div className='footer-column'>
        <div className="contact-info">
            <p>123 Main Street, City</p>
            <p>Phone: +1 123-456-7890</p>
        </div>
     </div>

    {/* Column 4: Contact Info, Newsletter, and Social Icons */}
    <div className="footer-column">
        <div className="newsletter">
            <h4>Subscribe to Our Newsletter</h4>
            <form action="#">
                <input type="email" placeholder="Your email address" />
                <input type="submit" value="Send" />
            </form>
        </div>

        <div className="social-icons">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <a href="https://facebook.com" target="_blank"><BsFacebook/></a>
    </div>
    </div>
</footer>
  )
}

export default Footer