import React from 'react'
import { Image } from 'react-bootstrap'
import img from '../assets/img/desktop-img.jpg'
import mobilimg from '../assets/img/desktop-mobil.jpg'

function Img() {
  return (
    <div >
        <center>
        <Image src={img} className='asteriahotel__img' />
        <Image src={mobilimg} className='asteriahotel__mobilimg' />
        </center>
    </div>
  )
}

export default Img
