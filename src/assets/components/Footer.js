import React from 'react'
import github from '../images/socials/github.svg'
import linkedin from '../images/socials/linkedin.svg'
import instagram from '../images/socials/instagram.svg'
import '../css/footer.css'
export default function Footer() {
  return (
    <>
    <div className='test'>
    <div id="footer-container">
        <a href='#' id='footer-text'>Made by <span><a href='https://github.com/SorinXV'>SorinXV</a></span>, 2022</a>
        <div id="socialmedia-icons">
        <a href="https://github.com/SorinXV" target={'_blank'}><img src={github} className="icon" alt="github icon" /></a>
        <a href='https://www.instagram.com/sorinxv/'target={'_blank'}><img src={instagram} className="icon" alt="instagram socialmedia icon" /></a>
        <a  href='https://www.linkedin.com/in/sorin-martinescu-07149a216/' target={'_blank'}><img src={linkedin} className="linkedin icon" alt="linkedin socialmedia icon" /></a>     
        </div>
      </div>
    </div>
    </>
  )
}
