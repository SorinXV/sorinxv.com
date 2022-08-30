import '../css/home.css'
import home from '../jsonfiles/home.json'
export default function Home() {
  return (
    <>
      {home.map((home) => {
        return (
          <div>
            <div id="container">
              <a id="second-title">{home.secondTitle}</a>
              <a id="title">{home.title}</a>
              <a id="paragraph">{home.paragraph}</a>
            </div>
          </div>
        )
      })}
    </>
  )
}
