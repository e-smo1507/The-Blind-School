import React from 'react'
import ring from './assets/ringss.jpg'
import redblue from './assets/redblue.png'
import startinup from './assets/startinup.png'
import up from './assets/up.png'
import vadhvani from './assets/vadhvani.png'
import mahakumbh from './assets/mahakumbh.png'
import emblemb from './assets/emblemb.png'
import dpiit from './assets/dpiit.png'
import aicra from './assets/aicra.png'
import hub from './assets/hub.png'
import voice from './assets/voice.png'
import green from './assets/green.png'
const Appreciate = () => {
  return (
    <>
<div className="w-full h-[818px] bg-white relative ">
  <div className="w-[1320px] h-[738px] rounded-[24px] p-[40px] absolute top-[40px] left-[60px]">
    
    {/* Centered Image + Heading */}
    <div className="flex flex-col items-center mt-[10px]"> {/* Adjust mt if needed */}
      <img src={ring} alt="Ring Icon" className="w-[58px] h-[59px] mb-4" />
      <h1 className="text-5xl font-black text-gray-900">Appreciated By</h1>
    </div>

    {/* Image Grid */}
    <section className="flex flex-wrap justify-center gap-4 max-w-[1100px] mt-[74px] mx-auto">
      <img src={green} alt="Image 1" className="w-[200px] h-auto rounded" />
      <img src={voice} alt="Image 2" className="w-[200px] h-auto rounded" />
      <img src={redblue} alt="Image 3" className="w-[200px] h-auto rounded" />
      <img src={emblemb} alt="Image 4" className="w-[200px] h-auto rounded" />
      <img src={vadhvani} alt="Image 5" className="w-[200px] h-auto rounded" />
      <img src={hub} alt="Image 6" className="w-[200px] h-auto rounded" />
      <img src={aicra} alt="Image 7" className="w-[200px] h-auto rounded" />
      <img src={startinup} alt="Image 8" className="w-[200px] h-auto rounded" />
      <img src={dpiit} alt="Image 9" className="w-[200px] h-auto rounded" />
      <img src={mahakumbh} alt="Image 10" className="w-[200px] h-auto rounded" />
      <img src={up} alt="Image 11" className="w-[200px] h-auto rounded" />
    </section>
  </div>
</div>


    </>
  )
}

export default Appreciate