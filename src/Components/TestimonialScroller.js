import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Rohit Kumar",
    role: "Full Stack Developer at Microsoft",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Best investment in my career. The practical projects and industry mentorship made all the difference.",
  },
  {
    name: "Anita Patel",
    role: "Cybersecurity Analyst at Amazon",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "From zero coding background to landing a top job — this program made it happen.",
  },
  {
    name: "Yash Verma",
    role: "Data Engineer at Google",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    quote:
      "The structure, mentorship, and hands-on projects helped me level up quickly.",
  },
  {
    name: "Neha Sharma",
    role: "UI/UX Designer at Adobe",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    quote:
      "I loved the practical focus and design challenges—it pushed me to be better.",
  },
  {
    name: "Arjun Mehta",
    role: "DevOps Engineer at Flipkart",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    quote:
      "From deployment pipelines to cloud infrastructure, I learned it all here.",
  },
  {
    name: "Sneha Reddy",
    role: "AI Specialist at NVIDIA",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    quote:
      "Truly transformative — the AI modules and real-world case studies were excellent.",
  },
];

const TestimonialCard = ({ t }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 p-8 w-[900px] shrink-0 mx-4">
    <div className="flex items-center mb-4">
      <img
        src={t.image}
        alt={t.name}
        className="w-14 h-14 rounded-full mr-4 object-cover"
      />
      <div>
        <h4 className="font-semibold text-gray-800 text-lg">{t.name}</h4>
        <p className="text-sm text-blue-600">{t.role}</p>
      </div>
    </div>
    <div className="flex text-yellow-400 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} />
      ))}
    </div>
    <p className="text-gray-600 italic text-base">"{t.quote}"</p>
  </div>
);

const TestimonialScroller = () => {
  return (
    <section className="bg-[#f8fbff] py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          What Our Students Say
        </h2>
        <p className="text-gray-500 mb-8">
          Real stories from real career transformations
        </p>

        <div className="overflow-hidden relative">
          <div className="flex animate-slide gap-6 w-max">
            {[...testimonials, ...testimonials].map((t, index) => (
              <TestimonialCard key={index} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialScroller;
