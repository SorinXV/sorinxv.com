import React from 'react'
import '../css/text.css'
import '../css/contact.css'
import emailjs from 'emailjs-com'
export default function Contact() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm(
      'service_iwdtbcy',
      'template_mew9h9r',
      e.target,
      'yH5zSHqkbFs3LlDQI',
    ).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }
  return (
    <>
      <div id="mail-container">
        <p className="paragraph" id="mb">

          You can get in touch with me by sending an email at
          contact@sorinxv.com or message me on instagram 
          I’m currently open to any new opportunities, I’ll try my best to get
          back to you asap!
        </p>
        <h2> Contact</h2>
        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="user_email" placeholder="Email" />
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            id="message"
          />
          <input type="submit" value="send" id="submit" />
        </form>
      </div>
    </>
  )
}
