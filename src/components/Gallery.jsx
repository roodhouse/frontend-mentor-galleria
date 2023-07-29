import React from 'react'
import Data from '../data.json'

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
            return(
              <div key={record.id} id={record.id} className='hidden'>
                <h1>{record.name}</h1>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Gallery