import '../css/home.css'
import '../css/text.css'
import home from '../jsonfiles/home.json'
import spiral from '../images/spiral-photo.png'

export default function Home() {
  return (
    <>
      {home.map((home) => {
        return (
          <div id="page-container">
            <div id="container">
              <a id="second-title">{home.secondTitle}</a>
              <a id="title">{home.title}</a>
              <a className="paragraph">{home.paragraph}</a>
            </div>
              <img src={spiral} className='animation image not-selectable' alt="spiral"/>            
            </div>
        )
      })}
    </>
  )
}
