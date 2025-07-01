

import React from "react";
import { useNavigate } from "react-router-dom";

const universities = [
  {
    slug: "uttaranchal-university",
    name: "Uttaranchal University",
    fullName: "Uttaranchal University",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    slug: "graphic-era-university",
    name: "Graphic Era University",
    fullName: "Graphic Era University",
    img: "https://source.unsplash.com/80x80/?university",
  },
  {
    slug: "jamia-hamdard-online",
    name: "Jamia Hamdard Online",
    fullName: "Jamia Hamdard Online University",
    img: "https://source.unsplash.com/80x80/?library",
  },
  {
    slug: "amu-online",
    name: "AMU Online",
    fullName: "AMU Online University",
    img: "https://source.unsplash.com/80x80/?college",
  },
  {
    slug: "rit-college",
    name: "RIT College",
    fullName: "RIT College, Roorkee",
    img: "https://source.unsplash.com/80x80/?computer",
  },
  {
    slug: "lpu-online",
    name: "LPU Online",
    fullName: "Lovely Professional University",
    img: "https://source.unsplash.com/80x80/?lpu",
  },
  {
    slug: "srm-university",
    name: "SRM University",
    fullName: "SRM Institute of Science and Technology",
    img: "https://source.unsplash.com/80x80/?srm",
  },
  {
    slug: "ignou",
    name: "IGNOU",
    fullName: "Indira Gandhi National Open University",
    img: "https://source.unsplash.com/80x80/?ignou",
  },
  {
    slug: "amity-university",
    name: "Amity University",
    fullName: "Amity Online University",
    img: "https://source.unsplash.com/80x80/?amity",
  },
  {
    slug: "chandigarh-university",
    name: "Chandigarh University",
    fullName: "CU Online Programs",
    img: "https://source.unsplash.com/80x80/?chandigarh",
  },
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
