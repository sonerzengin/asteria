import React from 'react'
import Logo from './Logo'

import Navbar from './Navbar'

function Header() {
  return (
    <div className='header'>
      <div className="container header__content">
            <div className="row">
                <div className="col-md-2"><Logo /></div>
                <div className="col-md-10"><Navbar /></div>
            </div>
      </div>
    </div>
  )
}

export default Header
