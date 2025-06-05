import React from 'react'
import girl from './assets/girls.png'
import hi from './assets/hii.png'
import wheel from './assets/wheel.png'
import blind from './assets/blind.png'
import mute from './assets/mute.png'
const About = () => {
  return (
    <>
  
  <div class="relative w-full h-[110vh]">
 
  <img src={mute} class="w-50 h-50   bg-blue-500 rounded-full absolute top-12 left-1/2 transform -translate-x-1/2" />


  <img src={girl} class="w-50 h-50 bg-pink-500 rounded-full absolute top-52 left-10" />

  <img src={blind} class="w-50 h-50 bg-green-500 rounded-full absolute top-52 right-10" />

  <img src={hi} class="w-50 h-50 bg-blue-500 rounded-full absolute top-[40rem] left-10" />


  <img src={wheel} class="w-50 h-50 bg-yellow-500 rounded-full absolute top-[40rem] right-10" />
  <div class="absolute top-[16rem] left-1/2 transform -translate-x-1/2 text-center px-4">
    <h1 class="font-[Outfit]   leading-[142px] tracking-[-0.03em] text-center  text-8xl font-bold text-gray-800">About The 
Special School</h1>
    <p class="mt-2 text-gray-600">Our application can help any type of specially-abled like Cerebral Palsy, Dyslexia, Blind, Deaf, Voiceless, etc students for their education till class 5th. We are creating the whole curriculum in mindmaps, podcasts, GIFs, animation, small quizzes, and games so the visualization and comprehension power can be developed. Especially for the blind, the whole application will run by speech recognition.</p>
    <button className='"w-[900px] h-[64px] min-w-0 rounded-[25px] px-[16px] py-[8px] mt-[15px] gap-2 bg-green-600 text-white font-outfit font-bold text-[18px] leading-[24px]'>Download App</button>
  </div>
</div>
 

    </>
  )
}

export default About