import React from 'react'
import '../css/home.css'
import '../css/text.css'
import '../css/general.css'
import home from '../jsonfiles/home.json'
import spiral from '../images/spiral-photo.png'

export default function Home() {
  return (
    <>
      {home.map((home) => {
        return (
          <div id="page-container">
            <div id="container">
              <h2 href="#" id="second-title">{home.secondTitle}</h2>
              <h1 href="#" id="title">{home.title}</h1>
              <p href="#" className="paragraph">{home.paragraph}</p>
            </div>
              <img src={spiral} className='animation image not-selectable' alt="spiral"/>            
            </div>
        )
      })}
    </>
  )
}
