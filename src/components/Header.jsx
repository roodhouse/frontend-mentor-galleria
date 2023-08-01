import React from 'react'
import Logo from '../assets/shared/logo.svg'
import Data from '../data.json'

function Header() {

  function handleClick(e) {
    let slideshow = document.getElementById('button').firstChild
      Data.map( record => {
        if (slideshow.innerHTML === 'Start Slideshow') {
            document.getElementById('galleryContainer').classList.add('hidden', 'md:hidden')
            document.getElementById('profileContainer').classList.remove('hidden', 'md:hidden')
            document.getElementById('oneprofile').classList.remove('hidden', 'md:hidden')
            document.getElementById('footerContainer').classList.remove('hidden')
            document.getElementById('onefooter').classList.remove('hidden')
            document.getElementById('button').firstChild.innerHTML = 'Stop Slideshow'
        } else if (slideshow.innerHTML === 'Stop Slideshow') {
         
            document.getElementById('galleryContainer').classList.remove('hidden', 'md:hidden')
            document.getElementById('profileContainer').classList.add('hidden', 'md:hidden')
            document.getElementById('oneprofile').classList.add('hidden', 'md:hidden')
            document.getElementById('footerContainer').classList.add('hidden')
            document.getElementById('onefooter').classList.add('hidden')
            document.querySelectorAll('.child').forEach((kid)=> {
              kid.classList.add('hidden', 'md:hidden')
            })
            document.querySelectorAll('.footer').forEach((foot)=> {
              foot.classList.add('hidden')
            })
            document.getElementById(record.id+'profile').classList.add('hidden')
            document.getElementById(record.id+'footer').classList.add('hidden')
            document.getElementById('button').firstChild.innerHTML = 'Start Slideshow'
        }

      })
  }

  return (
    <>
        <div id="headerContainer" className='flex items-center justify-between'>
            <div id="logoContainer">
                <img src={Logo} alt="Logo" className='h-8'/>
            </div>
            <div id="button" onClick={handleClick} className='text-right text-darkGray text-[9px] font-bold leading-normal tracking-[1.929px]'>
                <button className='uppercase'>Start Slideshow</button>
            </div>
        </div>
    </>
  )
}

export default Header