import React from 'react'
import Container from '../Container'

const Gallery = () => {
  const circle = [1, 1, 1, 1, 1, 1]

  return (
    <div>
      <div className="w-full py-[170px] bg-[#04090F] flex items-center justify-center">
        <h2 className="text-white font-bold text-5xl">Gallery</h2>
      </div>

      <Container className="py-16 grid grid-cols-3 gap-10">
        {circle.map((item, index) => (
          <div
            key={index}
            className="group relative w-[400px] h-[550px] rounded-full bg-[#122640] overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-[#3E4DB7] flex items-center justify-center
                            opacity-0 group-hover:opacity-100
                            scale-90 group-hover:scale-100
                            transition-all duration-300 ease-in-out">
              <span className="text-white text-6xl font-light">+</span>
            </div>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default Gallery
