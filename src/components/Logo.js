import React from 'react'
import { Image } from 'react-bootstrap'
import logo from '../assets/img/logo_blue.png'


function Logo() {
  return (
    <div >
      <Image className='logo' src={logo} alt="AsteriaLogo" />
    </div>
  )
}

export default Logo
