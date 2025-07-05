import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Rohit Kumar",
    role: "Full Stack Developer at Microsoft",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "GTIM made it easy for me to balance my job and studies. Their distance education program was well-structured and career-oriented. I finally completed my BCA without compromising on work.",
  },
  {
    name: "Anita Patel",
    role: "Cybersecurity Analyst at Amazon",
    image: "https://img.freepik.com/free-photo/closeup-content-attractive-indian-business-lady_1262-2094.jpg",
    quote:
      "GTIM made it easy for me to balance my job and studies. Their distance education program was well-structured and career-oriented. I finally completed my BCA without compromising on work.",
  },
  {
    name: "Yash Verma",
    role: "Bussiness Analyst at Infosys",
    image: "https://wallpapercave.com/wp/wp5047332.jpg",
    quote:
      "The structure, mentorship, and hands-on projects helped me level up quickly.",
  },
  {
    name: "Neha Sharma",
    role: "UI/UX Designer at Adobe",
    image: "https://img.freepik.com/premium-photo/indian-woman-with-crossed-arms-wearing-formal-shirt_856987-1888.jpg",
    quote:
      "The counselors at GTIM guided me to pick the right specialization. Their assistance didn’t stop after admission—they followed up and ensured I stayed on track. Very helpful team!",
  },
  {
    name: "Arjun Mehta",
    role: "DevOps Engineer at Flipkart",
    image: "https://tse3.mm.bing.net/th/id/OIP.MZtUHIIZTklw6RxCZK5mawHaJi?rs=1&pid=ImgDetMain&o=7&rm=3",
    quote:
      "I was looking for a cost-effective yet recognized program and GTIM delivered. Got my B.Com degree and even got placement assistance. Highly valuable for career-focused students.",
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
