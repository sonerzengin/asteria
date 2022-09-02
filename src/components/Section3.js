import React from 'react'
import { Image } from 'react-bootstrap'
import footerIcon from '../assets/img/logo_asteria.png'
import Footer from './Footer'
import Owl from './Owl'

function Section3() {
  
    return (
    <div className='section3'>
        <div className="container">
            <div className="row ">
                <div className="col-md-2 section3__items">
                    <Image className='section3__logo' src={footerIcon}  />
                    <p>Our Hotels</p>
                </div>
                <div className="col-md-10 section3__owl">
                    <Owl />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Section3
