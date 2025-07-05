// import React from "react";

// const header = {
//   title: "Explore Our Top Trending Courses",
//   subtitle: "Stay ahead with the most in-demand skills of tomorrow",
// };

// const categories = [
//   { label: "BBA", img: "https://source.unsplash.com/40x40/?data" },
//   { label: "BCA", img: "https://source.unsplash.com/40x40/?marketing" },
//   { label: "BCOM", img: "https://source.unsplash.com/40x40/?code" },
//   { label: "BA", img: "https://source.unsplash.com/40x40/?cloud" },
//   { label: "MBA", img: "https://source.unsplash.com/40x40/?cyber" },
//   { label: "MCA", img: "https://source.unsplash.com/40x40/?blockchain" },
//   { label: "MCOM", img: "https://source.unsplash.com/40x40/?design" },
//   { label: "MA", img: "https://source.unsplash.com/40x40/?design" },
// ];

// const courses = [
//   {
//     title: "Blockchain Developer",
//     tag: "Trending",
//     domain: "Fintech",
//     match: "92%",
//     skills: ["Web3", "Smart Contracts", "Solidity"],
//     image: "https://source.unsplash.com/80x80/?blockchain",
//   },
//   {
//     title: "Data Science & Analytics",
//     tag: "",
//     domain: "Business Intelligence",
//     match: "88%",
//     skills: ["R", "SQL", "Python"],
//     image: "https://source.unsplash.com/80x80/?data",
//   },
//   {
//     title: "Cloud Architecture",
//     tag: "",
//     domain: "Cloud Computing",
//     match: "86%",
//     skills: ["AWS", "Docker", "Kubernetes"],
//     image: "https://source.unsplash.com/80x80/?cloud",
//   },
//   {
//     title: "AI & Automation",
//     tag: "Trending",
//     domain: "Automation",
//     match: "85%",
//     skills: ["Computer Vision", "Robotics", "Neural Networks"],
//     image: "https://source.unsplash.com/80x80/?ai",
//   },
//   {
//     title: "Full Stack Developer",
//     tag: "Best",
//     domain: "Software Engineering",
//     match: "98%",
//     skills: ["React", "Node.js", "MongoDB"],
//     image: "https://source.unsplash.com/80x80/?programming",
//   },
// ];

// const Scroller = ({ items, speed = 40 }) => (
//   <div className="overflow-hidden relative mb-8">
//     <div
//       className="flex gap-4 animate-scroll w-max"
//       style={{
//         animationDuration: `${speed}s`,
//         animationTimingFunction: "linear",
//         animationIterationCount: "infinite",
//       }}
//     >
//       {[...items, ...items].map((item, index) => (
//        <div
//   key={index}
//   className="flex-shrink-0 px-5 text-center py-2 rounded-xl bg-green-50 border border-green-100 hover:shadow-md transition min-w-[180px] flex items-center justify-center gap-3"
// >
//   <span className="font-medium text-sm text-gray-800">{item.label}</span>
// </div>
//       ))}
//     </div>
//   </div>
// );

// const CourseCardScroller = ({ items, speed = 60 }) => (
//   <div className="overflow-hidden relative mt-4">
//     <div
//       className="flex gap-6 animate-scroll w-max"
//       style={{
//         animationDuration: `${speed}s`,
//         animationTimingFunction: "linear",
//         animationIterationCount: "infinite",
//       }}
//     >
//       {[...items, ...items].map((c, index) => (
//         <div
//           key={index}
//           className="flex-shrink-0 p-6 w-[320px] rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all bg-white min-h-[300px]"
//         >
//           <div className="flex items-center gap-4 mb-4">
//             {/* <img src={c.image} alt={c.title} className="w-14 h-14 rounded-md object-cover border" /> */}
//             <div className="flex-1">
//               <div className="flex justify-between items-center">
//                 <h4 className="font-semibold text-base text-gray-900">{c.title}</h4>
//                 {c.tag && (
//                   <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
//                     ⭐ {c.tag}
//                   </span>
//                 )}
//               </div>
//               <p className="text-sm text-green-600 mt-1">{c.domain}</p>
//             </div>
//           </div>

//           <div className="text-xs text-gray-500 font-medium mb-1">Match</div>
//           <div className="flex items-center justify-between mb-3">
//             <span className="font-bold text-xl text-gray-800">{c.match}</span>
//             <div className="w-full ml-3 bg-gray-200 rounded-full h-2">
//               <div
//                 className="bg-green-500 h-2 rounded-full"
//                 style={{ width: c.match }}
//               ></div>
//             </div>
//           </div>

//           <ul className="text-sm text-gray-700 space-y-1 mt-2">
//             {c.skills.map((s, i) => (
//               <li key={i} className="flex items-center gap-2">
//                 <span className="text-green-500">✔</span>
//                 <span>{s}</span>
//                 {i === 0 && <span className="text-orange-500 text-xs ml-1">+1</span>}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const TrendingCoursesSection = () => {
//   return (
//     <section className="py-24 bg-white px-4">
//       <div className="text-center max-w-2xl mx-auto mb-12">
//         <h2 className="text-4xl font-bold text-gray-900">{header.title}</h2>
//         <p className="text-gray-600 mt-3 text-lg">{header.subtitle}</p>
//       </div>
//       <Scroller items={categories} speed={50} />
//       {/* <CourseCardScroller items={courses} speed={70} /> */}
//     </section>
//   );
// };

// export default TrendingCoursesSection;

// TrendingCourses.jsx
import React from "react";

const courses = [
  {
    title: "BA",
    eligibility: "12th",
    duration: "3 Years",
    highlights: ["Liberal Arts", "Critical Thinking"],
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    title: "BCOM",
    eligibility: "12th",
    duration: "3 Years",
    highlights: ["Accounting", "Economics"],
    gradient: "from-green-400 via-teal-500 to-blue-500",
  },
  {
    title: "B. Tech",
    eligibility: "12th",
    duration: "4 Years",
    highlights: ["Engineering", "Projects"],
    gradient: "from-red-500 via-orange-500 to-yellow-500",
  },
  {
    title: "BCA",
    eligibility: "12th",
    duration: "3 Years",
    highlights: ["Programming", "Software Dev"],
    gradient: "from-purple-400 via-pink-500 to-red-500",
  },
  {
    title: "MBA",
    eligibility: "Graduation",
    duration: "2 Years",
    highlights: ["Management", "Leadership"],
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
  },
  {
    title: "MCA",
    eligibility: "Graduation",
    duration: "2 Years",
    highlights: ["Advanced Coding", "Database"],
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
];

const categories = ["BA", "BCOM", "B. Tech", "BCA", "MBA", "MCA"];

export default function TrendingCourses() {
  return (
    <>
      <style>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        @layer utilities {
          @keyframes scroll {
            from { transform: translateX(0) }
            to   { transform: translateX(-50%) }
          }
          .animate-scroll { animation: scroll var(--tw-duration) linear infinite; }
          .duration-45s { --tw-duration: 45s; }
          .duration-70s { --tw-duration: 70s; }
        }
      `}</style>

      <section className="py-24 bg-gray-50 px-4">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Explore Our Top Trending Courses
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Stay ahead with the most in‑demand courses & qualifications
          </p>
        </header>

        {/* Categories Carousel */}
        <div className="overflow-hidden mb-8">
          <div className="flex gap-4 animate-scroll duration-45s whitespace-nowrap">
            {[...categories, ...categories].map((cat, i) => (
              <div
                key={i}
                className="inline-block px-6 py-2 bg-green-50 hover:bg-green-100 rounded-full text-gray-800 font-medium w-fit text-center mr-4"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Course Cards Carousel */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll duration-70s whitespace-nowrap">
            {[...courses, ...courses].map((c, i) => (
              <div key={i} className="relative inline-block w-fit h-auto p-1 group">
                {/* Gradient border with blur */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${c.gradient} blur opacity-75 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Card content */}
                <div className="relative bg-white rounded-2xl p-6 flex flex-col justify-between shadow-lg group-hover:shadow-xl transition-shadow duration-300 w-fit h-auto">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{c.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      <strong>Eligibility:</strong> {c.eligibility}
                      <br />
                      <strong>Duration:</strong> {c.duration}
                    </p>
                    <ul className="mt-4 space-y-1 text-gray-700 text-sm">
                      {c.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-green-500">✔</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
