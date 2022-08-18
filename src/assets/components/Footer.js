import instagram from '../images/socials/instagram.png'
import github from '../images/socials/github.png'
import dev from '../images/socials/dev.png'
import '../css/footer.css'
export default function Footer() {
  return (
    <>
    <div className='test'>
    <div id="footer-container">
        <a id='footer-text'>Made by <span><a href='https://github.com/SorinXV'>SorinXV</a></span>, 2022</a>
        <div id="socialmedia-icons">
          <a href='https://www.instagram.com/sorinxv/'><img src={instagram} className="icon" alt="instagram socialmedia icon" /></a>
          <a href="https://github.com/SorinXV"></a><img src={github} className="icon" alt="github icon" />
          <a href="https://dev.to/sorinxv"><img src={dev} className="icon" alt="dev socialmedia icon" /></a>
        </div>
      </div>
    </div>
    </>
  )
}
