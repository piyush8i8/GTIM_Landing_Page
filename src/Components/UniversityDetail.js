// import React from "react";
// import { FaStar, FaClock, FaUserGraduate, FaMoneyBill } from "react-icons/fa";

// const programs = [
//   {
//     title: "Master of Business Administration (MBA)",
//     desc: "Comprehensive business program for future leaders",
//     duration: "2 years",
//     students: "900+",
//     fee: "$73,440/year",
//     rating: "4.8",
//   },
//   {
//     title: "Master of Computer Applications (MCA)",
//     desc: "Advanced computer science and applications program",
//     duration: "3 years",
//     students: "750+",
//     fee: "$45,000/year",
//     rating: "4.7",
//   },
//   {
//     title: "Bachelor of Business Administration (BBA)",
//     desc: "Undergraduate business foundation program",
//     duration: "4 years",
//     students: "1200+",
//     fee: "$52,656/year",
//     rating: "4.6",
//   },
//   {
//     title: "Bachelor of Arts (BA)",
//     desc: "Liberal arts education with diverse specializations",
//     duration: "4 years",
//     students: "2000+",
//     fee: "$52,659/year",
//     rating: "4.5",
//   },
//   {
//     title: "Master of Science in Computer Science",
//     desc: "Advanced computer science with research focus",
//     duration: "2 years",
//     students: "600+",
//     fee: "$51,000/year",
//     rating: "4.9",
//   },
//   {
//     title: "Doctor of Medicine (MD)",
//     desc: "Comprehensive medical education program",
//     duration: "4 years",
//     students: "700+",
//     fee: "$65,203/year",
//     rating: "4.9",
//   },
// ];

// const UniversityDetail = () => {
//   return (
//     <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="flex flex-col md:flex-row items-center gap-6">
//           <div className="w-16 h-16 bg-white rounded-xl"></div>
//           <div>
//             <h1 className="text-4xl font-bold">Harvard University</h1>
//             <p className="text-sm text-white/80">
//               World-renowned institution offering comprehensive academic programs
//             </p>
//             <div className="flex gap-6 mt-2 text-sm text-white/70">
//               <span>⭐ 4.9 Rating</span>
//               <span>📍 Cambridge, MA</span>
//               <span>🎓 6 Programs</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-50 text-gray-800 rounded-t-3xl py-16 px-6">
//         <div className="max-w-6xl mx-auto text-center mb-12">
//           <h2 className="text-3xl font-bold">Available Programs</h2>
//           <p className="text-gray-500 mt-2">Choose from our comprehensive range of academic programs</p>
//         </div>

//         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//           {programs.map((program, index) => (
//             <div
//               key={index}
//               className="bg-white border-t-4 border-purple-600 rounded-2xl shadow hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between"
//             >
//               <div>
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="text-purple-600 text-xl">📘</div>
//                   <span className="text-green-600 font-semibold text-sm flex items-center gap-1">
//                     <FaStar className="text-green-500" /> {program.rating}
//                   </span>
//                 </div>
//                 <h3 className="text-lg font-semibold mb-1">{program.title}</h3>
//                 <p className="text-sm text-gray-500 mb-4">{program.desc}</p>
//                 <div className="text-sm text-gray-600 space-y-1">
//                   <div className="flex items-center gap-2">
//                     <FaClock className="text-blue-500" /> Duration: <strong>{program.duration}</strong>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaUserGraduate className="text-emerald-500" /> Students: <strong>{program.students}</strong>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaMoneyBill className="text-orange-500" /> Fee: <strong className="text-blue-700">{program.fee}</strong>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 space-y-2">
//                 <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl transition">
//                   Apply Now
//                 </button>
//                 <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold py-2 rounded-xl">
//                   Download Brochure
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UniversityDetail;


import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaClock, FaUserGraduate, FaMoneyBill } from "react-icons/fa";
import CareerFormModal from "./CareerFormModal";

// Static university data
const universities = [
  {
    slug: "uttaranchal-university",
    fullName: "Uttaranchal University",
    location: "Dehradun, India",
  },
  {
    slug: "graphic-era-university",
    fullName: "Graphic Era University",
    location: "Dehradun, India",
  },
  {
    slug: "jamia-hamdard-online",
    fullName: "Jamia Hamdard Online University",
    location: "New Delhi, India",
  },
  {
    slug: "amu-online",
    fullName: "AMU Online University",
    location: "Aligarh, India",
  },
  {
    slug: "rit-college",
    fullName: "RIT College, Roorkee",
    location: "Roorkee, India",
  },
  {
    slug: "lpu-online",
    fullName: "Lovely Professional University",
    location: "Phagwara, India",
  },
  {
    slug: "srm-university",
    fullName: "SRM Institute of Science and Technology",
    location: "Chennai, India",
  },
  {
    slug: "ignou",
    fullName: "Indira Gandhi National Open University",
    location: "New Delhi, India",
  },
  {
    slug: "amity-university",
    fullName: "Amity Online University",
    location: "Noida, India",
  },
  {
    slug: "chandigarh-university",
    fullName: "CU Online Programs",
    location: "Chandigarh, India",
  },
];

// Example program data
const programs = [
  {
    title: "Master of Business Administration (MBA)",
    desc: "Comprehensive business program for future leaders",
    duration: "2 years",
    students: "900+",
    fee: "$73,440/year",
    rating: "4.8",
  },
  {
    title: "Master of Computer Applications (MCA)",
    desc: "Advanced computer science and applications program",
    duration: "3 years",
    students: "750+",
    fee: "$45,000/year",
    rating: "4.7",
  },
  {
    title: "Bachelor of Business Administration (BBA)",
    desc: "Undergraduate business foundation program",
    duration: "4 years",
    students: "1200+",
    fee: "$52,656/year",
    rating: "4.6",
  },
  {
    title: "Bachelor of Arts (BA)",
    desc: "Liberal arts education with diverse specializations",
    duration: "4 years",
    students: "2000+",
    fee: "$52,659/year",
    rating: "4.5",
  },
  {
    title: "Master of Science in Computer Science",
    desc: "Advanced computer science with research focus",
    duration: "2 years",
    students: "600+",
    fee: "$51,000/year",
    rating: "4.9",
  },
  {
    title: "Doctor of Medicine (MD)",
    desc: "Comprehensive medical education program",
    duration: "4 years",
    students: "700+",
    fee: "$65,203/year",
    rating: "4.9",
  },
];

const UniversityDetail = () => {
  const { slug } = useParams();
  const university = universities.find((u) => u.slug === slug);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleApplyClick = () => {
    setShowForm(true);
  };

  const handleDownloadClick = () => {
    if (!formData) {
      setShowForm(true);
    } else {
      const link = document.createElement("a");
      link.href = "/downloadBrochure.pdf";
      link.download = "brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
    const link = document.createElement("a");
    link.href = "/downloadBrochure.pdf";
    link.download = "brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div>
            <h1 className="text-4xl font-bold text-left">
              {university ? university.fullName : "University Not Found"}
            </h1>
            <p className="text-sm text-white/80">
              World-renowned institution offering comprehensive academic programs
            </p>
            <div className="flex gap-6 mt-2 text-sm text-white/70">
              <span>⭐ 4.9 Rating</span>
              <span>📍 {university?.location || "Location unavailable"}</span>
              <span>🎓 6 Programs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="bg-gray-50 text-gray-800 rounded-t-3xl py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Available Programs</h2>
          <p className="text-gray-500 mt-2">
            Choose from our comprehensive range of academic programs
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white border-t-4 border-purple-600 rounded-2xl shadow hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-purple-600 text-xl">📘</div>
                  <span className="text-green-600 font-semibold text-sm flex items-center gap-1">
                    <FaStar className="text-green-500" /> {program.rating}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{program.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{program.desc}</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-blue-500" /> Duration:{" "}
                    <strong>{program.duration}</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUserGraduate className="text-emerald-500" /> Students:{" "}
                    <strong>{program.students}</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMoneyBill className="text-orange-500" /> Fee:{" "}
                    <strong className="text-blue-700">{program.fee}</strong>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <button
                  onClick={handleApplyClick}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl transition"
                >
                  Apply Now
                </button>
                <button
                  onClick={handleDownloadClick}
                  className="w-full border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold py-2 rounded-xl"
                >
                  Download Brochure
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <CareerFormModal
          onClose={() => setShowForm(false)}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default UniversityDetail;
