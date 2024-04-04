import "./ContactMe.css"

import React from 'react'

const ContactMe = () => {
  return (
    <div className="form">
      <h1>Let's Get In Touch</h1>
      <form action="https://formspree.io/f/xleqprgq" method="POST">
        <label>Your Name</label>
        <input type="text" name="name"></input>
        <label>Email</label>
        <input type="email" name="email"></input>
        <label>Message/Feedback</label>
        <textarea rows="6" placeholder="Type Your Message Here" name="message"/>
        <button className="btn" type="submit">Send</button>
      </form>
    </div>
  )
}

export default ContactMe