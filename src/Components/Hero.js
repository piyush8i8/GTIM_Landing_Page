import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  BarChart3,
  Sparkles,
  ArrowRight,
  School,
} from "lucide-react";

const backgrounds = [
  "b1.jpg",
  "b2.jpg",
  "b3.jpg",
  "b4.jpg",
  "b5.jpg",
  "b6.jpg",
];

const stats = [
  {
    title: "500+",
    subtitle: "Premium Courses",
    bg: "bg-blue-100 text-blue-700",
  },
  {
    title: "100+",
    subtitle: "Top Universities",
    bg: "bg-indigo-100 text-indigo-700",
  },
  {
    title: "50K+",
    subtitle: "Success Stories",
    bg: "bg-pink-100 text-pink-700",
  },
  {
    title: "95%",
    subtitle: "Placement Rate",
    bg: "bg-cyan-100 text-cyan-700",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden text-white">
      {/* Rotating background images */}
      <AnimatePresence>
        <motion.img
          key={backgrounds[index]}
          src={backgrounds[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Background"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="mb-4 px-4 py-1 bg-white text-blue-600 rounded-full text-sm flex items-center gap-2 font-medium">
          <Rocket className="w-4 h-4" />
          AI-Powered Course Discovery Platform
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Transform Your <br />
          <span className="text-blue-400">Future Today</span>
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-100">
          Discover • Compare • Excel in Your Dream Career
        </p>
        <p className="mt-2 text-gray-300 max-w-xl">
          Join thousands of students who found their perfect course match
          through our intelligent comparison platform
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center mt-10 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`rounded-xl px-6 py-4 shadow-md text-center ${stat.bg}`}
            >
              <h3 className="text-2xl font-bold">{stat.title}</h3>
              <p className="text-sm font-medium">{stat.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 text-base shadow-lg">
            <Sparkles className="w-5 h-5" />
            Start Your Journey
          </button>
          <button className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-full flex items-center gap-2 text-base shadow-lg">
            <BarChart3 className="w-5 h-5" />
            Explore Rankings
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex gap-2 mt-6">
          {backgrounds.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${
                i === index ? "bg-blue-500" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Trust info */}
        <div className="mt-6 text-sm text-gray-300">
          Trusted by students from{" "}
          <span className="font-semibold text-white">
            Top Universities • Nationwide • Recognition • Excellence
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
