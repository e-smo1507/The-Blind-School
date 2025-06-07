import React from 'react'
import jj from './assets/JJ.png'
import scan from './assets/scanner.png'
import google from './assets/google.webp'
import apple from './assets/apple.png'
const scanner = () => {
  return (
    <>
      <div className="w-[1280px] h-[578px] absolute top-[6511px] left-[80px] rounded-[48px]
      border-l-[2px]  border-white  bg-gradient-to-r from-[#FEF5DB] to-[#FFDFDF]">
        <h1 className='w-[430px] h-[96px] font-[Outfit] font-semibold text-[48px] leading-[48px] tracking-[0] flex justify-center items-center text-center ml-[70px] mt-[50px]'>Become a
smart learner today</h1>
<h1 className='ml-[170px] mt-[15px]'>Get The Special School Ap</h1>
<div className='w-[267.83px] h-[357.19px]'>
<div className="w-[240px] h-[226px] rounded-[24px] absolute left-[180px] bg-[#FFFFFF47]">
<img src ={scan} className='w-[140px] h-[140px] absolute top-[30px] left-[50px] rounded-[12px]' />
  <h5 className='w-[114.47px] h-[17px] absolute top-[180px] left-[60px] 
                font-[Outfit] font-normal text-[14px] leading-[20px] 
                tracking-[0] flex justify-center items-center text-center'>scan & Download</h5>
</div>
   
</div>
<div className="absolute top-[490px] left-[150px] flex gap-[10px]">
  <div className='w-[126px] h-[38.69px] bg-white flex'> 
    <img src ={google} className='w-[40px] h-[40px]'/>
    <h4 className='mt-[5px]'>Google Play</h4>
  </div>
  <div className='w-[126px] h-[38.69px] bg-white flex'> 
        <img src ={apple} className='w-[40px] h-[40px]'/>
        <h4 className='mt-[5px]'>Apple Store</h4>
  </div>
</div>
</div>

<div className="w-[507px] h-[751px] absolute top-[6338px] left-[773px] 
                rounded-tl-[40px] rounded-tr-[40px] 
                border-t-[2px] border-r-[2px] border-l-[2px] 
               border-white flex justify-center items-center">
                  <img src ={jj} className=' w-[500px] h-[751px]  rounded-tl-[40px] rounded-tr-[40px] 
                border-t-[2px] border-r-[2px] border-l-[2px] border-#F45B49'/>
           

</div>
    </>
  )
}

export default scanner