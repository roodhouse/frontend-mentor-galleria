import React from 'react'
import Data from '../data.json'
import ViewMore from '../assets/shared/icon-view-image.svg'

console.log(Data)

function Gallery() {
  return (
    <>
      <div id="galleryContainer" className=''>
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
      <div id="profileContainer" className='hidden'>
        {
          Data && Data.map( record => {

            const divStyle = {
              backgroundImage: `url(${record.images.thumbnail.image})`,
            }

            return(
              // div with background image as picture
              // div has view image button and name of picture
              // name of picture has a white background with padding
              // below is another div with the author name 
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
    </>
  )
}

export default Gallery