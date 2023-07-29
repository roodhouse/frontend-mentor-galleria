import React from 'react'
import Logo from '../assets/shared/logo.svg'

function Header() {
  return (
    <>
        <div id="headerContainer" className='flex items-center justify-between'>
            <div id="logoContainer">
                <img src={Logo} alt="Logo" className='h-8'/>
            </div>
            <div id="button" className='text-right text-darkGray text-[9px] font-bold leading-normal tracking-[1.929px]'>
                <button className='uppercase'>Start Slideshow</button>
            </div>
        </div>
    </>
  )
}

export default Header