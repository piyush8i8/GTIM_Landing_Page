import React from "react";

const header = {
  title: "Explore Our Top Trending Courses",
  subtitle: "Stay ahead with the most in-demand skills of tomorrow",
};

const categories = [
  { label: "Data Science", img: "https://source.unsplash.com/40x40/?data" },
  { label: "Digital Marketing", img: "https://source.unsplash.com/40x40/?marketing" },
  { label: "Full Stack Development", img: "https://source.unsplash.com/40x40/?code" },
  { label: "Cloud Computing", img: "https://source.unsplash.com/40x40/?cloud" },
  { label: "Cybersecurity", img: "https://source.unsplash.com/40x40/?cyber" },
  { label: "Blockchain", img: "https://source.unsplash.com/40x40/?blockchain" },
  { label: "UI/UX Design", img: "https://source.unsplash.com/40x40/?design" },
];

const courses = [
  {
    title: "Blockchain Developer",
    tag: "Trending",
    domain: "Fintech",
    match: "92%",
    skills: ["Web3", "Smart Contracts", "Solidity"],
    image: "https://source.unsplash.com/80x80/?blockchain",
  },
  {
    title: "Data Science & Analytics",
    tag: "",
    domain: "Business Intelligence",
    match: "88%",
    skills: ["R", "SQL", "Python"],
    image: "https://source.unsplash.com/80x80/?data",
  },
  {
    title: "Cloud Architecture",
    tag: "",
    domain: "Cloud Computing",
    match: "86%",
    skills: ["AWS", "Docker", "Kubernetes"],
    image: "https://source.unsplash.com/80x80/?cloud",
  },
  {
    title: "AI & Automation",
    tag: "Trending",
    domain: "Automation",
    match: "85%",
    skills: ["Computer Vision", "Robotics", "Neural Networks"],
    image: "https://source.unsplash.com/80x80/?ai",
  },
  {
    title: "Full Stack Developer",
    tag: "Best",
    domain: "Software Engineering",
    match: "98%",
    skills: ["React", "Node.js", "MongoDB"],
    image: "https://source.unsplash.com/80x80/?programming",
  },
];

const Scroller = ({ items, speed = 40 }) => (
  <div className="overflow-hidden relative mb-8">
    <div
      className="flex gap-4 animate-scroll w-max"
      style={{
        animationDuration: `${speed}s`,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
      }}
    >
      {[...items, ...items].map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 px-5 py-2 rounded-xl bg-green-50 border border-green-100 hover:shadow-md transition min-w-[180px] flex items-center gap-3"
        >
          {/* <img src={item.img} alt={item.label} className="h-10 w-10 rounded-full object-cover" /> */}
          <span className="font-medium text-sm text-gray-800">{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const CourseCardScroller = ({ items, speed = 60 }) => (
  <div className="overflow-hidden relative mt-4">
    <div
      className="flex gap-6 animate-scroll w-max"
      style={{
        animationDuration: `${speed}s`,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
      }}
    >
      {[...items, ...items].map((c, index) => (
        <div
          key={index}
          className="flex-shrink-0 p-6 w-[320px] rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all bg-white min-h-[300px]"
        >
          <div className="flex items-center gap-4 mb-4">
            {/* <img src={c.image} alt={c.title} className="w-14 h-14 rounded-md object-cover border" /> */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-base text-gray-900">{c.title}</h4>
                {c.tag && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
                    ⭐ {c.tag}
                  </span>
                )}
              </div>
              <p className="text-sm text-green-600 mt-1">{c.domain}</p>
            </div>
          </div>

          <div className="text-xs text-gray-500 font-medium mb-1">Match</div>
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-xl text-gray-800">{c.match}</span>
            <div className="w-full ml-3 bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: c.match }}
              ></div>
            </div>
          </div>

          <ul className="text-sm text-gray-700 space-y-1 mt-2">
            {c.skills.map((s, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                <span>{s}</span>
                {i === 0 && <span className="text-orange-500 text-xs ml-1">+1</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const TrendingCoursesSection = () => {
  return (
    <section className="py-24 bg-white px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900">{header.title}</h2>
        <p className="text-gray-600 mt-3 text-lg">{header.subtitle}</p>
      </div>
      <Scroller items={categories} speed={50} />
      <CourseCardScroller items={courses} speed={70} />
    </section>
  );
};

export default TrendingCoursesSection;
