import React from 'react'
import Data from '../data.json'
import ViewMore from '../assets/shared/icon-view-image.svg'
import BackButton from '../assets/shared/icon-back-button.svg'
import BackDisabled from '../assets/shared/icon-back-button-disabled.svg'
import ForwardButton from '../assets/shared/icon-next-button.svg'
import ForwardDisabled from '../assets/shared/icon-next-button-disabled.svg'

function Gallery() {

  return (
    <>
      <div id="galleryContainer" className='px-6 md:pl-0 md:pr-0 md:flex md:flex-wrap'>
        {
          Data && Data.map( record => {
            
            const divStyle = {
              backgroundImage: `url(${record.images.thumbnail.image})`,
              height: `${record.images.thumbnail.height}px`
            }

            function handleClick(e) {
              document.getElementById('mainWrapper').scrollIntoView()
              document.getElementById('galleryContainer').classList.add('hidden', 'md:hidden')
              document.getElementById('profileContainer').classList.remove('hidden', 'md:hidden')
              document.getElementById(record.id+'profile').classList.remove('hidden', 'md:hidden')
              document.getElementById('footerContainer').classList.remove('hidden')
              document.getElementById(record.id+'footer').classList.remove('hidden', 'md:hidden')
              document.getElementById('button').firstChild.innerHTML = 'Stop Slideshow'
            }

            return(
              <div key={record.name} id={record.id} style={divStyle} onClick={handleClick} className='galleryCard w-[327px] mb-6 pl-8 pr-[49px] pb-8 flex flex-col justify-end md:mb-10 md:ml-10 md:w-[324px] lg:w-[206px] xl:!static'>
                <div className='name text-white text-2xl leading-normal font-bold mb-[7px]'>
                  <h2>{record.name}</h2>
                </div>
                <div className='author text-white text-[13px] font-normal leading-normal opacity-75'>
                  <h3>{record.artist.name}</h3>
                </div>
              </div>
            )
          })
        }
      </div>
      <div id="profileContainer" className='hidden'>
        {
          Data && Data.map( record => {

            const lightbox = record.id+'box'
            const imageBox = record.id+'imgBox'

            function handleClick() {
              document.getElementById(record.id+'box').classList.remove('hidden')
              document.getElementById(record.id+'imgBox').classList.remove('hidden')
              document.getElementById('mainWrapper').scrollIntoView()
              function disableScroll() {
                // Get the current page scroll position
               let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
               let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
                    // if any scroll is attempted, set this to the previous value
                      window.onscroll = function() {
                      window.scrollTo(scrollLeft, scrollTop);
                    };
            };
            disableScroll()
            };

            function handleClose() {
              document.getElementById(record.id+'box').classList.add('hidden')
              document.getElementById(record.id+'imgBox').classList.add('hidden')
              // revert the disable scroll function above
              function enableScroll() {
                window.onscroll = function() {};
            }
            enableScroll()
            }

            return(
              <React.Fragment key={record.id}>
                <style>{`

                  #${record.id+'img'} {
                    background-image: url(${record.images.thumbnail.image})
                  }

                  @media (min-width: 768px) {
                    #${record.id+'img'} {
                      background-image: url(${record.images.hero.small})
                    }
                  }

                  @media (min-width: 1280px) {
                    #${record.id+'img'} {
                      background-image: url(${record.images.hero.large})
                    }
                
                `}
                </style>
                <div key={record.id} id={record.id+'profile'} className='child hidden md:hidden px-6 md:px-10 md:flex md:flex-wrap xl:px-0 xl:justify-start'>
                  <div id={record.id+'img'} className='flex flex-col justify-between h-[280px] bg-cover bg-no-repeat bg-center md:w-[475px] md:h-[560px] md:mb-16'>
                    <div id='imageButton' onClick={handleClick} className='pt-4 pl-4 cursor-pointer md:order-2 md:pb-4'>
                      <button className='flex items-center text-white uppercase px-4 py-[14px] bg-black opacity-75 hover:bg-darkGray'>
                        <div id="imgButtonContainer" className='mr-[14px]'>
                          <img src={ViewMore} alt="full view" />
                        </div>
                        <div id="buttonCopy" className='text-right text-[10px] font-bold leading-normal tracking-[2.143px]'>
                          <p>View Image</p>
                        </div>
                      </button>
                    </div>
                    {/* profile picture name */}
                    <div id="artistSection">
                      <div id='artistWork' className='text-black bg-white px-6 py-6 text-2xl leading-[29px] font-bold mr-[47px] pb-2 md:order-1 md:w-[428px] md:pl-[65px] md:ml-[243px] md:pt-0 md:pb-6 md:mr-0 md:pr-0 md:text-[56px] md:leading-[64px] xl:ml-[410px] xl:w-[445px] xl:pr-[17px]'>
                        <h1 >{record.name}</h1>
                      </div>
                      <div id='artistName'className='hidden md:block md:text-darkGray md:bg-white md:text-[15px] md:leading-normal md:font-normal md:ml-[243px] md:pl-[65px] md:pb-[67px] xl:ml-[410px] xl:w-[445px]'>
                        <p>{record.artist.name}</p>
                    </div>
                    </div>
                  </div>
                  {/* profile artist name */}
                    <div className='text-darkGray bg-white px-6 text-[15px] leading-normal font-normal mr-[47px] mb-6 md:hidden'>
                      <p>{record.artist.name}</p>
                    </div>
                    <div id="picOfArtist" className='hidden md:block md:w-32 md:h-32 md:ml-[30px] md:mt-[242px] xl:mt-[496px]'>
                     <img src={record.artist.image} alt={record.artist.name} />
                    </div>
                    {/* profile art year */}
                    <div id="yearCopy" className='xl:flex'>
                      <div id="artImgYear" className='pl-4 flex md:pl-0'>
                        {/* profile image of artist */}
                        <div id='artImg' className='w-16 h-16 mr-[9px] md:hidden'>
                          <img src={record.artist.image} alt={record.artist.name} />
                        </div>
                        {/* profile year work was done */}
                        <div id="artYear" className='text-lightGray text-[100px] font-bold leading-[100px] mt-11 md:mt-0 md:text-right md:text-[200px] md:leading-[150px]'>
                          <p>{record.year}</p>
                        </div>
                      </div>
                      <div id="artCopy" className='text-darkGray text-sm leading-7 font-bold mt-[-25px] mb-[68px] md:pl-[115px] md:pr-[117px] md:mt-[-75px] md:mb-10'>
                        <p>{record.description}</p>
                      </div>
                    </div>
                    <div id="source" className='uppercase mb-[68px] text-darkGray text-[9px] font-bold leading-normal tracking-[1.929px] underline md:pl-[115px] md:mb-[53px]'>
                      <a href={record.source}>Go to source</a>
                    </div>
                </div>
                    <div id={lightbox} key={lightbox} className='hidden h-screen bg-black opacity-[.85] absolute top-0 left-0 w-full' />
                    <div id={imageBox} key={imageBox} className='hidden flex flex-col items-center justify-center h-screen absolute top-0 left-0 w-full md:items-center'>
                    <div id={record.id+'Close'} className='self-end'>
                        <button onClick={handleClose} className='uppercase text-white text-right text-sm font-bold leading-normal tracking-[3px] mb-[33px] md:mb-[41px]' >close</button>
                      </div>
                      <div id='galleryImage'>
                        <img src={record.images.gallery} alt={record.name} id={record.id+'largeLightBoxImg'} className='' />
                      </div>
                    </div>
                    
              </React.Fragment>
            )
          })
        }
      </div>
      <div id="footerContainer" className='hidden'>
        
        {
          Data && Data.map( record => {
            const footerId = record.id+'footer'
            const lightLine = {
              width: `${record.light.width}`
            }
            const darkLine = {
              width: `${record.dark.width}`
            }

            function backClick() {
              document.getElementById('mainWrapper').scrollIntoView()
              if ( record.id === 'one' ) {
                console.log('one is the only number')
              } else {
                let currentIndex = Data.indexOf(record)
                let previousIndex = currentIndex - 1
                
                currentIndex = currentIndex.toString()
                previousIndex = previousIndex.toString()
                let currentEl = document.getElementById(Data[currentIndex].id+'profile')
                let previousEl = document.getElementById(Data[previousIndex].id+'profile')
                
                currentEl.classList.add('hidden', 'md:hidden')
                previousEl.classList.remove('hidden', 'md:hidden')

                let currentFooter = document.getElementById(Data[currentIndex].id+'footer')
                let previousFooter = document.getElementById(Data[previousIndex].id+'footer')
                currentFooter.classList.add('hidden', 'md:hidden')
                previousFooter.classList.remove('hidden', 'md:hidden')
              }
            }

            function forwardClick() {
              document.getElementById('mainWrapper').scrollIntoView()
              if ( record.id === 'fifteen') {
                console.log('i guess fifteen is also a number')
              } else {
                let currentIndex = Data.indexOf(record)
                let nextIndex = currentIndex + 1 

                currentIndex = currentIndex.toString()
                nextIndex = nextIndex.toString()
                let currentEl = document.getElementById(Data[currentIndex].id+'profile')
                let nextEl = document.getElementById(Data[nextIndex].id+'profile')
                
                currentEl.classList.add('hidden', 'md:hidden')
                nextEl.classList.remove('hidden', 'md:hidden')

                let currentFooter = document.getElementById(Data[currentIndex].id+'footer')
                let nextFooter = document.getElementById(Data[nextIndex].id+'footer')
                currentFooter.classList.add('hidden', 'md:hidden')
                nextFooter.classList.remove('hidden', 'md:hidden')
              }
            }

            return(
              
                
                <div key={record.id} id={footerId} className='footer hidden items-center justify-between '>
                  <div id="lineContainer" className='flex'>
                    <div id="darkLine" style={darkLine} className='h-[1px] bg-black' />
                    <div id="lightLine" style={lightLine} className='h-[1px] bg-medGray' />
                  </div>
                  <div id="completeFooter" className='flex justify-between pr-6 pb-4 pt-6 md:pb-6 md:items-center md:pr-10'>
                    <div id="footerDetails" className='px-6 md:pl-10'>
                      <div id="footerName" className='mb-[9px] text-black text-sm leading-normal font-bold md:text-lg md:leading-normal'>
                        <p>{record.name}</p>
                      </div>
                      <div id="footAuthor" className='text-black text-[10px] font-normal leading-normal opacity-75 md:text-[13px]'>
                        <p>{record.artist.name}</p>
                      </div>
                    </div>
                    <div id="footerIcons" className='flex justify-between w-[56px] md:w-[90px]'>
                      <div id="iconLeft" onClick={backClick}>
                        <img src={
                          record.id === 'one' ? BackDisabled : BackButton
                        } alt="button" className='h-4 md:h-6' /> 
                      </div>
                      <div id="iconRight" onClick={forwardClick}>
                        <img src={
                          record.id === 'fifteen' ? ForwardDisabled : ForwardButton
                        } alt="button" className='h-4 md:h-6' />
                      </div>
                    </div>
                  </div>
                </div>
              
            )
          })
        }

      </div>
    </>
  )
}

export default Gallery