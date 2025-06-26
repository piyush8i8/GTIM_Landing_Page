import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Testimonials List
const testimonialList = [
  {
    name: "Rohit Sharma",
    role: "Data Scientist",
    company: "Google",
    salary: "₹25 LPA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The AI-powered curriculum helped me transition from mechanical engineering to data science seamlessly.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Software Engineer",
    company: "Microsoft",
    salary: "₹30 LPA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Global Tech Institute's hands-on approach prepared me perfectly for my dream job at Microsoft.",
    rating: 5,
  },
  {
    name: "Anjali Verma",
    role: "Product Manager",
    company: "Amazon",
    salary: "₹35 LPA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "The industry connections and real-world projects gave me the edge I needed to land my dream role.",
    rating: 5,
  },
  {
    name: "Karan Patel",
    role: "AI Researcher",
    company: "NVIDIA",
    salary: "₹40 LPA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "Thanks to the deep learning modules, I cracked my interview with confidence and expertise.",
    rating: 5,
  },
  {
    name: "Simran Kaur",
    role: "UX Designer",
    company: "Adobe",
    salary: "₹28 LPA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Systems_logo_and_wordmark.svg",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    quote:
      "Their design thinking sessions and portfolio reviews were game changers in my career.",
    rating: 5,
  },
  {
    name: "Aman Raj",
    role: "Backend Developer",
    company: "Flipkart",
    salary: "₹22 LPA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flipkart_logo.png",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    quote:
      "Real-world assignments helped me understand architecture and deployment better than any textbook.",
    rating: 5,
  },
];

// Star Rating
const StarRating = ({ rating }) => (
  <div className="flex justify-center mt-4">
    {Array.from({ length: 5 }).map((_, idx) => (
      <FontAwesomeIcon
        key={idx}
        icon={faStar}
        className={`text-yellow-400 ${idx < rating ? "" : "opacity-30"}`}
      />
    ))}
    <span className="ml-2 text-sm text-gray-500">Verified Graduate</span>
  </div>
);

// Testimonial Card
const TestimonialCard = ({ t }) => (
  <div className="bg-white shadow-xl rounded-xl p-6 mx-2 min-w-[280px] max-w-[300px] hover:shadow-2xl transition-all duration-300 relative">
    <div className="flex justify-between items-start mb-4">
      <img
        src={t.image}
        alt={t.name}
        className="w-14 h-14 rounded-full border-2 border-white shadow-md"
      />
      <div className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
        {t.salary}
      </div>
    </div>

    <h4 className="text-lg font-bold text-gray-800">{t.name}</h4>
    <p className="text-sm text-blue-600 font-medium">{t.role}</p>
    <p className="text-sm text-gray-500">{t.company}</p>

    <p className="text-sm text-gray-600 mt-3 leading-relaxed italic">
      “{t.quote}”
    </p>

    <div className="flex justify-start items-center mt-4">
      <img src={t.logo} alt={t.company} className="w-12 h-auto" />
    </div>

    <StarRating rating={t.rating} />
  </div>
);

TestimonialCard.propTypes = {
  t: PropTypes.object.isRequired,
};

// Testimonial Section
const Testimonial = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const autoScroll = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
        scrollAmount += 1;

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    }, 20);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Real People. Real Success.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our graduates are transforming their careers and shaping the future.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="overflow-hidden relative"
        >
          <div className="flex space-x-4 w-max pr-6">
            {testimonialList.map((t, index) => (
              <TestimonialCard key={index} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
