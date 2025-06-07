import React from 'react'
import call from './assets/call.png'
import mail from './assets/mail.png'
import location from './assets/location.png'
import logo from "./assets/Logo.png"
import inst from './assets/insta.webp'
import facebook from './assets/facebook.png'
import youtube from './assets/ut.webp'
import linkedin from './assets/linkedin.webp'
import google from './assets/google.webp'
import apple from './assets/apple.png'

const Contact = () => {
  return (
    <>
      <div className="absolute  h-[500px] top-[7149px] w-[100vw] p-[80px] pb-[40px] flex flex-col gap-[30px] bg-black">
      <div className='w-[1300px] h-[100px] flex gap-50'>
        <div className="w-[276px] h-[100px] pt-2 pb-2 flex gap-3">
          <img src ={location} className='w-[40px] h-[40px]'/>
          <div>
            <h3 className='text-white'>Find Us</h3>
            <h3 className='text-green-500'>Triveni Nagar, Cantt, Kanpur, 
Uttar Pradesh 208004</h3>
          </div>
       </div>
      <div className="w-[276px] h-[100px] pt-2 pb-2 flex gap-3">
      <img src ={call} className='w-[40px] h-[40px]'/>
      <div><h3 className='text-white'>Call Us</h3>
            <h3 className='text-green-500'>+91 88401 43751</h3></div>
      </div>
     <div className="w-[276px] h-[100px] pt-2 pb-2 flex gap-3">
 <img src ={ mail} className='w-[40px] h-[40px]'/>
 <div><h3 className='text-white'>Email Us</h3>
            <h4 className='text-green-500'>team@euphelity.in</h4></div>
 
      </div>
      </div>
    <div className="w-[1280px] flex items-center justify-between">
  {/* Left square */}
  <div className="w-2 h-2 bg-gray-500"></div>

  {/* Dotted line */}
  <div className="flex-1 border-t-2 border-dotted border-gray-800 mx-4 h-[8px]"></div>

  {/* Right square */}
  <div className="w-2 h-2 bg-gray-500"></div>

</div>

<div className="w-[1280px] h-[180px] flex justify-between items-center">
 <div className="w-[515px] h-[180px] flex flex-col gap-[30px]">
  <div className='flex'>
    <img src ={logo} className='w-[30px] h-[30px]'/>
    <h3 className='text-white'>The Special School</h3>
  </div>
  <h2 className='text-[#B9BEC6]'>Euphelity Pvt Ltd is an umbrella under which different problems are being addressed and their solutions are natured and developed. We are currently focusing on the Project "THE SPECIAL SCHOOL”.</h2>
 <div className='flex gap-10'> 
  <img src ={inst} className='w-[40px] h-[40px]'/>
  <img src ={facebook} className='w-[40px] h-[40px]'/>
  <img src ={youtube} className='w-[40px] h-[40px]'/>
  <img src ={linkedin} className='w-[40px] h-[40px]'/>
 </div>
</div>

  <div className='text-[#B9BEC6]'>NEXADASH
<ul className='mt-[15px]'>
  <li><a href ='/'/>Home</li>
  <li><a href ='/About'/>About</li>
  <li><a href ='/Blog'/>Blog</li>

</ul>
  </div>
  <div className='text-[#B9BEC6] mt-[0px]'>Download App

 <div className='w-[126px] h-[38.69px] bg-white flex mb-[10px]'> 
    <img src ={google} className='w-[40px] h-[40px]'/>
    <h4 className='mt-[5px]'>Google Play</h4>
  </div>
  <div className='w-[126px] h-[38.69px] bg-white flex'> 
        <img src ={apple} className='w-[40px] h-[40px]'/>
        <h4 className='mt-[5px]'>Apple Store</h4>
  </div>

  </div>
</div>
<div >
<div className="w-[1280px] flex items-center justify-between">
  {/* Left square */}
  <div className="w-2 h-2 bg-gray-500"></div>

  {/* Dotted line */}
  <div className="flex-1 border-t-2 border-dotted border-gray-800 mx-4 h-[8px]"></div>

  {/* Right square */}
  <div className="w-2 h-2 bg-gray-500"></div>

</div>
<h5 className='text-white ml-[40%]'>© 2025 Euphelity.com. All rights reserved</h5>
</div>
</div>
      
      </>
  )
}

export default Contact