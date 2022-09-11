import React from 'react'
import '../css/blog.css'
import '../css/text.css'
import blog from '../jsonfiles/blog.json'
export default function Blog() {
  return (
    <>
      {blog.map((blog) => {
        return (
          <div className='container'>
            
            <a className='small-title ' id='margin-top'>{blog.articleName}</a>
            <a className='date'>{blog.articleDate}</a>
            <a className='description'>{blog.description}</a>
            <a className='date' id='color'>{blog.tech}</a>
            
          </div>
        )
      })}
    </>
  )
}
