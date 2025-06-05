import React from 'react'
import open from "./assets/open.png"
const Footer = () => {
  return (
    <div className='w-full h-[300px] bg-[#fef3d1]'>
      <div className='w-[1000px] h-[243px] bg-[#fef3d1] ml-[227px] mt-[60px]'>
        <img src ={open} width='61.37' height ='38.12' className='ml-[45%]'/>
        <h1 className=' relative items-center font-extrabold text-[30px] ml-[210px] justify-items-center'>Join millions of confident learners </h1>
        <div className='flex gap-15' >
        <div className='ml-[10px] mt-[40px] '>
          <h4 className='ml-[20px] text-gray-500'>Loved by over</h4>
          <h3 className='font-extrabold text-xl'>30 million learners</h3>
        </div>
        <div className='border-l border-gray-400 h-25 mt-[25px]'></div>
           <div className='ml-[10px] mt-[40px] '>
          <h4 className='ml-[20px] text-gray-500'>Browse over</h4>
          <h3 className='font-extrabold text-xl'>50 million games</h3>
        </div>
            <div className='border-l border-gray-400 h-25 mt-[25px]'></div>
           <div className='ml-[10px] mt-[40px] '>
          <h4 className='ml-[20px] text-gray-500'>80% learners show</h4>
          <h3 className='font-extrabold text-xl'>increased confidence in 2 weeks</h3>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer