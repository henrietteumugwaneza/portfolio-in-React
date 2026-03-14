import React from "react"
import "../styles/contact.css"

function Contact(){
  return(
    <section className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name"/>
        <input type="email" placeholder="Email"/>
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>
    </section>
  )
}

export default Contact