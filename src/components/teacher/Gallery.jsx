import React from 'react'
import Container from '../Container'

const Gallery = () => {
  const circle = [1,1,1,1,1,1]

  return (
    <div>
      <div className='w-full py-[170px] bg-[#04090F] flex items-center justify-center'>
        <h2 className='text-white font-bold text-5xl'>Gallery</h2>
      </div>
     <Container className="py-16 grid grid-cols-3 gap-25 ">
     
     {circle.map((item, index) => (
         <div key={index} className='w-[400px] h-[550px] bg-neutral-400 rounded-full after:h-1/2'></div>
     ))}
     </Container>
    </div>
  )
}

export default Gallery
