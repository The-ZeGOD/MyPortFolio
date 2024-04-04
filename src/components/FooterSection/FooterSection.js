import "./Footer.css"
import {FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa"
import React from 'react'


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left-side">
                <div className="location">
                  <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                  <div>
                    <p>Motihari, Bihar</p>
                    <p>India</p>
                  </div>
                </div>

                <div className="contact-number">
                  <h4>
                    <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    +91 9660752214
                  </h4>
                </div>

                <div className="email">
                  <h4>
                    <a href="mailto:nihalgupta.nirmal@gmail.com" style={{ textDecoration: 'none', color: '#fff' }}>
                      <FaMailBulk size={20} style={{ marginRight: '2rem' }} />
                        nihalgupta.nirmal@gmail.com
                    </a>
                  </h4>
                </div>
            </div>

            <div className="right-side">
                <h4>Find me on different platforms</h4>
                <div className="social">
                  <a href="https://github.com/The-ZeGOD" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}} />
                  </a>
                  <a href="https://www.linkedin.com/in/nirmalgupta2105/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} />
                  </a>
                  <a href="https://www.instagram.com/nirmal_gupta2105/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}} />
                  </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer