
import React from "react";

import img1 from './assets/img1,1.png'
import img2 from './assets/img1.png'
import img3 from './assets/img12.png'
import img4 from './assets/img20.png'
import img5 from './assets/img21.png'
import img6 from './assets/img22.png'
import img7 from './assets/img30.png'
import img8 from './assets/img31.png'
import img9 from './assets/img42.png'
const ImageTextLayout = () => {
  const column1 = [img1, img2, img3, img4];
  const column2 = [img5, img6, img7, img8];
  const column3 = [img9, img9, img9, img9];

  return (
    <div className="flex px-10 py-10 bg-white min-h-screen items-center mt-[100px]">
      {/* Left: Text Content */}
      <div className="w-1/2 pr-10">
        <h1 className="absolute w-[339px] h-[120px] top-[3800px] left-[60px] font-[Outfit] font-bold text-[48px] leading-[100%] tracking-[0%]">Your Feedback,
Our Inspiration</h1>
        <p className="absolute w-[369px] h-[390px] top-[3950px] left-[60px] font-[Outfit] font-normal text-[24px] leading-[100%] tracking-[0%]">
        Thank you for the love and support you’ve shown to our learning app for specially-abled kids! Your encouragement fuels our journey to make education accessible and engaging for every child.
We’d love to hear from you—your thoughts, suggestions, and feedback help us improve and grow. Keep sharing your valuable insights; together, we can create a brighter future for young learners!
        </p>
      </div>

      {/* Right: Image Columns */}
      <div className="w-[100] flex  gap-9 ">
        {/* Column 1 */}
        <div className="flex flex-col gap-6 mt-0">
          {column1.map((src, idx) => (
              <div key={`col1-img${idx}`} className="flex flex-col items-center">
              <p className="text-sm font-medium text-gray-700 mb-1">Simrat Kaur</p>
              <img
                src={src}
                alt={`col1-img-${idx}`}
                className="w-[200px] h-[200px] object-cover rounded-xl shadow-md"
              />
            </div>

          ))}
        </div>

        {/* Column 2 - Staggered */}
        <div className="flex flex-col gap-6 mt-10">
          {column2.map((src, idx) => (
         <div key={`col2-img${idx}`} className="flex flex-col items-center">
              <p className="text-sm font-medium text-gray-700 mb-1">Simrat Kaur</p>
              <img
                src={src}
                alt={`col2-img-${idx}`}
                className="w-[200px] h-[200px] object-cover rounded-xl shadow-md"
              />
            </div>

          ))}
        </div>

        {/* Column 3 - More Staggered */}
        <div className="flex flex-col gap-6 mt-20">
          {column3.map((src, idx) => (
            <div key={`col3-img${idx}`} className="flex flex-col items-center">
              <p className="text-sm font-medium text-gray-700 mb-1">Simrat Kaur</p>
              <img
                src={src}
                alt={`col3-img-${idx}`}
                className="w-[200px] h-[200px] object-cover rounded-xl shadow-md"
              />
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageTextLayout;
