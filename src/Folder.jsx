
// import React from "react";

// // Import your images
// import img1 from "./assets/sir.png";
// import img2 from "./assets/sir2.png";
// import img3 from "./assets/sir3.png";
// import img4 from "./assets/sir4.png";
// import img5 from "./assets/lap.png";
// import img6 from "./assets/panel.png";
// import galary from './assets/gallery_2-512.webp'
// const cards = [
//   { src: img1, text: "Image description 1" },
//   { src: img2, text: "Image description 2" },
//   { src: img3, text: "Image description 3" },
//   { src: img4, text: "Image description 4" },
//   { src: img5, text: "Image description 5" },
//   { src: img6, text: "Image description 6" },
// ];

// const CardGallery = () => {
//   return (
// <>
//  <div className="flex flex-col items-center  bg-white"> {/* Adjust mt if needed */}
//           <img src={galary} alt="Ring Icon" className="w-[58px] h-[59px] mb-4" />
//            <h1 className="text-5xl font-black text-gray-900">Our Media Talks</h1>
//        </div>

//     <div className="min-h-screen px-10 py-16 bg-white">
//       <h2 className="text-4xl font-bold mb-12 text-center">Image Gallery</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {cards.map((card, index) => (
//           <div key={index} className="bg-white border rounded-2xl shadow-lg p-4 flex flex-col items-center text-center">
//             <img
//               src={card.src}
//               alt={`card-${index}`}
//               className="w-[200px] h-[200px] object-cover rounded-xl mb-4"
//             />
//             <p className="text-gray-700 text-base">{card.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default CardGallery;







import React from "react";

 import img1 from "./assets/sir.png";
import img2 from "./assets/sir2.png";
 import img3 from "./assets/sir3.png";
import img4 from "./assets/sir4.png";
import img5 from "./assets/lap.png";
import img6 from "./assets/panel.png";
import galary from './assets/gallery_2-512.webp'

const cards = [
  {
    src: img1,
    heading: "Redefining Success with Anant Vaish – Building a Truly Inclusive Future",
    text: "At Startup Charcha 4, we had the privilege of hosting Anant Vaish, Founder & CEO of Euphelity Private Limited, who shared his inspirin..."
  },
  {
    src: img2,
    heading: "UDYAMOTSAV 2025 – Empowering Young Entrepreneurs, Building a Sustainable Startup Ecosystem",
    text: "What could be more fulfilling than celebrating National Startup Day with 325+ startups, 90 investors, and 14 institutes across the countr..."
  },
  {
    src: img3,
    heading: "Empowering Careers with Data Visualization – Workshop at PGDAV Delhi University",
    text: "On 21st December, I had the incredible opportunity to conduct an online workshop on Data Visualization as part of the Career Readine..."
  },
  {
    src: img4,
    heading: "Knowledge & Growth: A Learning Experience in Bangalore",
    text: "Last week, I had the incredible opportunity to visit Bangalore, the Silicon Valley of India, for an insightful and enriching experience! 🌆..."
  },
  {
    src: img5,
    heading: "A Transformative Visit to Bangalore – Learning & Leadership in Action",
    text: "Last week, I had the incredible opportunity to visit Bangalore, the Silicon Valley of India, for an enriching professional experience! 🌆..."
  },
  {
    src: img6,
    heading: "Empowering PwDs – A Panel Discussion on Inclusion & Accessibility",
    text: "I am always passionate about advocating for Persons with Disabilities (PwDs) and exploring ways to empower them. As a PwD..."
  },
];

const CardGallery = () => {
  return (
    <>
     <div className="flex flex-col items-center  bg-white"> {/* Adjust mt if needed */}
          <img src={galary} alt="Ring Icon" className="w-[58px] h-[59px] mb-4" />
           <h1 className="text-5xl font-black text-gray-900">Our Media Talks</h1>
       </div>
    <div className="min-h-screen px-10 py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={card.src}
              alt={`card-${index}`}
              className="w-[700px] h-[300px] object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{card.heading}</h3>
            <p className="text-gray-600 text-sm">{card.text}</p>
          </div>
          
        ))}
          <button className=' block mx-130 h-[50px] w-[400px] rounded-[30px] bg-[#00A76F] text-white px-6 py-3 '>View All</button>
      </div>
    </div>
    </>
  );
};

export default CardGallery;
