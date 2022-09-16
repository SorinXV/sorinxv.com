import React from 'react'
import '../css/text.css'
import '../css/contact.css'

export default function Contact() {
  return (
    <>
      <div id="mail-container">
        <p className="paragraph" id="mb">
          I’m currently open to any new opportunities, I’ll try my best to get
          back to you asap!<br/>
          You can get in touch with me by sending an email at
          contact@sorinxv.com or message me on instagram
        </p>
        <h2> Contact</h2>
        <input type="text" name="firstname" placeholder="Name" />
        <input type="text" name="youremail" placeholder="Email" />
        <textarea
          type="text"
          name="Message"
          placeholder="Message"
          id="message"
        />
        <input type="submit" value="Submit" id="submit" />
      </div>
    </>
  )
}
