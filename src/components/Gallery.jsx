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
      <div id="galleryContainer" className='px-6'>
        {
          Data && Data.map( record => {
            
            const divStyle = {
              backgroundImage: `url(${record.images.thumbnail.image})`,
              height: `${record.images.thumbnail.height}px`
            }

            function handleClick(e) {
              console.log(e)
              console.log(record.name)
              console.log(record.id)
              document.getElementById('galleryContainer').classList.add('hidden')
              document.getElementById('profileContainer').classList.remove('hidden')
              document.getElementById(record.id).classList.remove('hidden')
              document.getElementById('footerContainer').classList.remove('hidden')
              document.getElementById(record.id+'footer').classList.remove('hidden')
            }

            return(
              <div key={record.name} style={divStyle} onClick={handleClick} className='w-[327px] mb-6 pl-8 pr-[49px] pb-8 flex flex-col justify-end' >
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
      <div id="profileContainer" className='hidden px-6'>
        {
          Data && Data.map( record => {

            const divStyle = {
              backgroundImage: `url(${record.images.thumbnail.image})`,
            }

            return(
              <div key={record.id} id={record.id} className='hidden'>
                <div style={divStyle} className='flex flex-col justify-between h-[280px] bg-cover bg-no-repeat bg-center'>
                  <div id='imageButton' className='pt-4 pl-4 cursor-pointer'>
                    <button className='flex items-center text-white uppercase px-4 py-[14px] bg-black opacity-75 hover:bg-darkGray'>
                      <div id="imgButtonContainer" className='mr-[14px]'>
                        <img src={ViewMore} alt="full view" />
                      </div>
                      <div id="buttonCopy" className='text-right text-[10px] font-bold leading-normal tracking-[2.143px]'>
                        <p>View Image</p>
                      </div>
                    </button>
                  </div>
                  <div className='text-black bg-white px-6 py-6 text-2xl leading-[29px] font-bold mr-[47px] pb-2'>
                    <h1 >{record.name}</h1>
                  </div>
                </div>
                  <div className='text-darkGray bg-white px-6 text-[15px] leading-normal font-normal mr-[47px] mb-6'>
                    <p>{record.artist.name}</p>
                  </div>
                  <div id="artImgYear" className='pl-4 flex'>
                    <div id='artImg' className='w-16 h-16 mr-[9px]'>
                      <img src={record.artist.image} alt={record.artist.name} />
                    </div>
                    <div id="artYear" className='text-lightGray text-[100px] font-bold leading-[100px] mt-11'>
                      <p>{record.year}</p>
                    </div>
                  </div>
                  <div id="artCopy" className='text-darkGray text-sm leading-7 font-bold mt-[-25px] mb-[68px]'>
                    <p>{record.description}</p>
                  </div>
                  <div id="source" className='uppercase mb-[68px] text-darkGray text-[9px] font-bold leading-normal tracking-[1.929px] underline'>
                    <a href={record.source}>Go to source</a>
                  </div>
              </div>
              
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
            return(
              <>
                
                <div key={record.id} id={footerId} className='hidden items-center justify-between '>
                  <div id="lineContainer" className='flex'>
                    <div id="darkLine" style={darkLine} className='h-[1px] bg-black' />
                    <div id="lightLine" style={lightLine} className='h-[1px] bg-medGray' />
                  </div>
                  <div id="completeFooter" className='flex justify-between pr-6 pb-4 pt-6'>
                    <div id="footerDetails" className='px-6'>
                      <div id="footerName" className='mb-[9px] text-black text-sm leading-normal font-bold'>
                        <p>{record.name}</p>
                      </div>
                      <div id="footAuthor" className='text-black text-[10px] font-normal leading-normal opacity-75'>
                        <p>{record.artist.name}</p>
                      </div>
                    </div>
                    <div id="footerIcons" className='flex justify-between w-[56px]'>
                      <div id="iconLeft">
                        <img src={
                          record.id === 'one' ? BackDisabled : BackButton
                        } alt="button" className='h-4' /> 
                      </div>
                      <div id="iconRight">
                        <img src={
                          record.id === 'fifteen' ? ForwardDisabled : ForwardButton
                        } alt="button" className='h-4' />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }

      </div>
    </>
  )
}

export default Gallery