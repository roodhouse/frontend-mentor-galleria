import React from 'react'
import Logo from '../assets/shared/logo.svg'
import Data from '../data.json'

function Header() {

  function handleClick(e) {
    
    console.log(e)
    console.log(Data[0])
    let slideshow = document.getElementById('button').firstChild
    console.log(slideshow.innerHTML)
      Data.map( record => {
        if (slideshow.innerHTML === 'Start Slideshow') {
            document.getElementById('galleryContainer').classList.add('hidden')
            document.getElementById('profileContainer').classList.remove('hidden')
            document.getElementById('one').classList.remove('hidden')
            document.getElementById('footerContainer').classList.remove('hidden')
            document.getElementById('onefooter').classList.remove('hidden')
            document.getElementById('button').firstChild.innerHTML = 'Stop Slideshow'
        } else if (slideshow.innerHTML === 'Stop Slideshow') {
          console.log('stop')
            document.getElementById('galleryContainer').classList.remove('hidden')
            document.getElementById('profileContainer').classList.add('hidden')
            document.getElementById('one').classList.add('hidden')
            document.getElementById('footerContainer').classList.add('hidden')
            document.getElementById('onefooter').classList.add('hidden')
            console.log(record.id)
            document.querySelectorAll('.child').forEach((kid)=> {
              kid.classList.add('hidden')
            })
            document.querySelectorAll('.footer').forEach((foot)=> {
              foot.classList.add('hidden')
            })
            document.getElementById(record.id).classList.add('hidden')
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