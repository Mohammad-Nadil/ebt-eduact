import React from 'react'
import Container from '../Container'

const Teacher = () => {

    const teachers = [1,1,1,1,1,1]

  return (
    <div>
      <div className='w-full py-[170px] bg-[#04090F] flex items-center justify-center'>
        <h2 className='text-white font-bold text-5xl'>Teacher</h2>
      </div>
     <Container className="py-16 grid grid-cols-3 gap-25 ">
     
     {teachers.map((item, index) => (
         <div key={index} className='w-[400px] h-[550px] bg-neutral-400 rounded-full after:h-1/2 relative after:w-[110%]  after:bg-secondary after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:z-[-1]  after:rounded-b-full after:translate-y-5'></div>
     ))}
     </Container>
    </div>
  )
}

export default Teacher
