import React from 'react'
import { Image } from 'react-bootstrap'
import img from '../assets/img/desktop-img.jpg'

function Img() {
  return (
    <div >
        <Image src={img} className='asteriahotel__img' />
    </div>
  )
}

export default Img
