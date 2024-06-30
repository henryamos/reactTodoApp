import React from 'react'
import "./Tag.css"
function Tag({tagName}) {
  return (
    <>
    <button className='tag'>{tagName}</button>
    {/* <button className='tag'>HTML</button>
     <button className='tag'>CSS</button>
     <button className='tag'>Javascript</button>
     <button className='tag'>React</button> */}
    </>          
  )
}

export default Tag
