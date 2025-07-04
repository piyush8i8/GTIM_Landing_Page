

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const universities = [
//   {
//     slug: "uttaranchal-university",
//     name: "Uttaranchal University",
//     fullName: "Uttaranchal University",
//     img: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     slug: "graphic-era-university",
//     name: "Graphic Era University",
//     fullName: "Graphic Era University",
//     img: "https://source.unsplash.com/80x80/?university",
//   },
//   {
//     slug: "jamia-hamdard-online",
//     name: "Jamia Hamdard Online",
//     fullName: "Jamia Hamdard Online University",
//     img: "https://source.unsplash.com/80x80/?library",
//   },
//   {
//     slug: "amu-online",
//     name: "AMU Online",
//     fullName: "AMU Online University",
//     img: "https://source.unsplash.com/80x80/?college",
//   },
//   {
//     slug: "rit-college",
//     name: "RIT College",
//     fullName: "RIT College, Roorkee",
//     img: "https://source.unsplash.com/80x80/?computer",
//   },
//   {
//     slug: "lpu-online",
//     name: "LPU Online",
//     fullName: "Lovely Professional University",
//     img: "https://source.unsplash.com/80x80/?lpu",
//   },
//   {
//     slug: "srm-university",
//     name: "SRM University",
//     fullName: "SRM Institute of Science and Technology",
//     img: "https://source.unsplash.com/80x80/?srm",
//   },
//   {
//     slug: "ignou",
//     name: "IGNOU",
//     fullName: "Indira Gandhi National Open University",
//     img: "https://source.unsplash.com/80x80/?ignou",
//   },
//   {
//     slug: "amity-university",
//     name: "Amity University",
//     fullName: "Amity Online University",
//     img: "https://source.unsplash.com/80x80/?amity",
//   },
//   {
//     slug: "chandigarh-university",
//     name: "Chandigarh University",
//     fullName: "CU Online Programs",
//     img: "https://source.unsplash.com/80x80/?chandigarh",
//   },
// ];

// const scrollStyle = {
//   animation: "scroll 40s linear infinite",
// };

// const PartnerUniversities = () => {
//   const navigate = useNavigate();

//   const handleClick = (slug) => {
//     navigate(`/universities/${slug}`);
//   };

//   return (
//     <section className="bg-gray-50 py-16 px-4">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-semibold text-gray-800 mb-2">
//           Our Partner Universities
//         </h2>
//         <div className="mx-auto w-24 h-1 bg-blue-500 rounded mb-2"></div>
//         <p className="text-gray-600 text-lg">Leading institutions across India</p>
//       </div>

//       <div className="overflow-hidden">
//         <div className="flex gap-6 w-max animate-scroll" style={scrollStyle}>
//           {[...universities, ...universities].map((uni, idx) => (
//             <div
//               key={idx}
//               onClick={() => handleClick(uni.slug)}
//               className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:scale-105 p-4 w-64 text-center flex-shrink-0"
//             >
//               <img
//                 src={uni.img}
//                 alt={uni.name}
//                 className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
//               />
//               <h3 className="text-base font-semibold text-gray-800">{uni.name}</h3>
//               <p className="text-sm text-gray-500">{uni.fullName}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>
//         {`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         `}
//       </style>
//     </section>
//   );
// };

// export default PartnerUniversities;


import React from "react";
import { useNavigate } from "react-router-dom";

const universities = [
  {
    slug: "amu-online",
    name: "AMU Online",
    fullName: "Aligarh Muslim University (AMU)",
    img: "https://content.jdmagicbox.com/v2/comp/aligarh/y5/9999px571.x571.230612204539.x5y5/catalogue/aligarh-muslim-university-aligarh-colleges-194v59d8j8.jpg",
  },
  {
    slug: "jamia-hamdard-online",
    name: "Jamia Hamdard Online",
    fullName: "Jamia Hamdard Deemed to be University (Delhi)",
    img: "https://www.mbacollegesdelhi.co.in/wp-content/uploads/2014/03/Jamia-Hamdard-MBA-660x440.jpg",
  },
  {
    slug: "mangalayatan-university",
    name: "Mangalayatan University",
    fullName: "Mangalayatan University",
    img: "https://tse1.mm.bing.net/th/id/OIP.mWGnRTtwMgCjeZ2BxSg3FAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    slug: "kl-university",
    name: "KL University",
    fullName: "KL University NAAC A++",
    img: "https://tse4.mm.bing.net/th/id/OIP.CSaYPxt5i39SsN9mDjVMtgHaFH?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    slug: "mzu-university",
    name: "MZU University",
    fullName: "MZU University NAAC A Central established by an act of parliament",
    img: "https://tse2.mm.bing.net/th/id/OIP.REK_NJ_IWuzbHUKxC_-c0QHaEm?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    slug: "chandigarh-university",
    name: "Chandigarh University",
    fullName: "Chandigarh University (CU)",
    img: "https://media.glassdoor.com/l/ea/7d/00/0f/the-best-university.jpg",
  },
  {
    slug: "dev-bhoomi-university",
    name: "Dev Bhoomi University",
    fullName: "Dev Bhoomi University",
    img: "https://tse2.mm.bing.net/th/id/OIP.TJlMQTarkz8dRdKd_PnTRwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    slug: "hrit-university",
    name: "HRIT University",
    fullName: "HRIT University",
    img: "https://tse4.mm.bing.net/th/id/OIP.oyVk0qc1Q6ATo9A1skh95wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    slug: "rit-college",
    name: "RIT College",
    fullName: "RIT Rorkee",
    img: "https://tse2.mm.bing.net/th/id/OIP.j0DGiUYk1rK8KH4qXw_eTQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    slug: "graphic-era-university",
    name: "Graphic Era",
    fullName: "Graphic Era",
    img: "https://i.ytimg.com/vi/QExH9z2On00/maxresdefault.jpg",
  }
];

const scrollStyle = {
  animation: "scroll 40s linear infinite",
};

const PartnerUniversities = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/universities/${slug}`);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-2">
          Our Partner Universities
        </h2>
        <div className="mx-auto w-24 h-1 bg-blue-500 rounded mb-2"></div>
        <p className="text-gray-600 text-lg">Leading institutions across India</p>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-6 w-max animate-scroll" style={scrollStyle}>
          {[...universities, ...universities].map((uni, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(uni.slug)}
              className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:scale-105 p-4 w-64 text-center flex-shrink-0"
            >
              <img
                src={uni.img}
                alt={uni.name}
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="text-base font-semibold text-gray-800">{uni.name}</h3>
              <p className="text-sm text-gray-500">{uni.fullName}</p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        `}
      </style>
    </section>
  );
};

export default PartnerUniversities;
