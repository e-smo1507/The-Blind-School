import { useState } from 'react'
import logo from "./assets/Logo.png"
import bag from "./assets/bag.png"
import books from "./assets/books.png"
import brain from "./assets/brain.png"
import comp1 from "./assets/comp1.png"
import left from "./assets/left-top.png"
import pencil from "./assets/pencil.png"
import cloud from "./assets/cloud.png"
import note from "./assets/note.png"
import en from "./assets/en.png"
import calc from "./assets/calc.png"
import  study from "./assets/study.png"
import './App.css'
import Footer from './Footer'
import DottedPath from './DottedPath'
import About from './About.jsx'
import Appreciate from './Appreciate.jsx'
function App() {

  return (
    <div className='page'>
    <div className = 'nav'>
<a href="/">
<img class='logo'src= {logo} alt="loading" width ="40" height = "40" />
</a>
<div className='side-nav'>
<a href='/'>Home</a>
<a href='/About'>About</a>
<a href='/DownloadApp'>DownloadApp</a>
<a href='Contact Us'>
  <button className='contact-btn'>Contact us</button>
</a>
</div>
</div>



<span className='ml-0'>
  <img src = {comp1} height ='116.43' width ='116.43' className=''/>
  <h1 className='flex justify-center   text-[86px]  font-bold relative items-center' >Education For All   <img src = {left} height ='116.43' width ='116.43' className='ml-15'/></h1>
 
   </span>

<h2 className=' text-[44px] font-bold ml-[450px] '>Key to a better future</h2>
<div className='flex mt-0 mb-0 h-[400px]'>
<span> <img src = {bag} alt="bag" height ='116.43' width ='116.43' srcset="" className='ml-[68px] mb-0'/></span>

<span> <img src = {books} alt="bag" height ='116.43' width ='116.43' srcset="" className='ml-[68px] mt-100 bg-#FFDFDF mb-0'/>
</span>
<span> <img src = {pencil} alt="bag" height = '533'  width ='715' srcset="" className='ml-[80px] mt-10 mb-0' ></img>
</span>
<span><img src = {brain} alt="bag" height = '116.43'  width ='116.43' srcset="" className=' ml-[180px] mt-50 bg-#FFDFDF mb-0' /></span>
</div>

<div>
</div>
<span className='flex gap-10 bg-white'> 

  <span className='rounded-[15px] bg-[#FEF5F5] mt-[200px] border-2 border-blue-500'>
<span className='card'> 
  <span><img src = {note} width = '98' height = '88' className='mt-10 ml-3'/></span>
  <span className='mt-[50px] font-bold '>Benefits of our Special School</span>
</span>
 <ul className=''>
  <span className='grid '>
  <li>About description 1 About description 1</li>
  <li>About description 1 About description 1</li>
  <li>About description 1 About description 1</li>
  <li>About description 1 About description 1</li>
  <li>About description 1 About description 1</li>
  </span>
 </ul>
</span>

  <span className='rounded-[15px] bg-[#FFF6D9A3] mt-[200px] border-2 border-blue-500'>
<span className='card'> 
  <span><img src = {en} width = '98' height = '88' className='mt-10 ml-3'/></span>
  <span className='mt-[50px] font-bold '>Benefits of our Special School</span>
</span>
 <ul>
  <span className='grid '>
   <li>About description 1 About description 1</li>
  <li>About description 1 About description 1</li>
  <li>About description 1 About description 1</li>
  <li>About description 1 About description 1</li>
  <li>About description 1 About description 1</li>
  </span>
 </ul>
</span>

  <span className='rounded-[15px] bg-[#F4F2FACC] mt-[200px] border-2 border-blue-500'>
<span className='card'> 
  <span><img src = {calc} width = '98' height = '88' className='mt-10 ml-3'/></span>
  <span className='mt-[50px] font-bold '>Benefits of our Special School</span>
</span>
 <ul>
  <span className='grid'>
   <li>About description 1 About description 1</li>
  <li>About description 1 About description 1</li>
  <li>About description 1 About description 1</li>
  <li>About description 1 About description 1</li>
  <li>About description 1 About description 1</li>
  </span>
 </ul>
</span>
<span><img src = {study} alt="bag" height = '366'  width ='366' srcset="" className='mt-[100px]  bg-#FFDFDF  ' /></span>

</span>

 <Footer/>
 <About/>
 <Appreciate/>
    </div>
  )
}

export default App
