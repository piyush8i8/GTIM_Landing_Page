import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  GraduationCap,
  FileText,
  Zap,
  Award,
  Users,
  Target,
  Handshake,
  Star,
  BadgeCheck,
} from "lucide-react";

const certifications = [
  {
    title: "DEB Approved",
    description: "Distance Education Bureau",
    icon: <CheckCircle className="text-green-500" />,
    bg: "bg-green-50",
  },
  {
    title: "AIU Member",
    description: "Association of Indian Universities",
    icon: <GraduationCap className="text-orange-500" />,
    bg: "bg-orange-50",
  },
  {
    title: "UGC Recognized",
    description: "University Grants Commission",
    icon: <FileText className="text-indigo-500" />,
    bg: "bg-indigo-50",
  },
  {
    title: "AICTE Approved",
    description: "All India Council for Technical Education",
    icon: <Zap className="text-yellow-500" />,
    bg: "bg-yellow-50",
  },
  {
    title: "NBA Accredited",
    description: "National Board of Accreditation",
    icon: <Award className="text-purple-500" />,
    bg: "bg-purple-50",
  },
  {
    title: "NAAC Accredited",
    description: "Accreditation Council",
    icon: <BadgeCheck className="text-pink-500" />,
    bg: "bg-pink-50",
  },
  {
    title: "ISO Certified",
    description: "Quality Management Standard",
    icon: <CheckCircle className="text-blue-500" />,
    bg: "bg-blue-50",
  },
  {
    title: "Ministry Recognized",
    description: "Ministry of Education",
    icon: <Award className="text-sky-500" />,
    bg: "bg-sky-50",
  },
  {
    title: "Global Ranking",
    description: "Top 1000 Universities",
    icon: <Star className="text-cyan-500" />,
    bg: "bg-cyan-50",
  },
  {
    title: "NIRF Ranked",
    description: "National Institutional Ranking Framework",
    icon: <Target className="text-red-500" />,
    bg: "bg-red-50",
  },
];

const stats = [
  {
    icon: <Users className="text-blue-600 w-8 h-8" />,
    title: "50,000+",
    desc: "Students Enrolled",
  },
  {
    icon: <Target className="text-blue-600 w-8 h-8" />,
    title: "95%",
    desc: "Placement Rate",
  },
  {
    icon: <Handshake className="text-blue-600 w-8 h-8" />,
    title: "500+",
    desc: "Industry Partners",
  },
  {
    icon: <Star className="text-blue-600 w-8 h-8" />,
    title: "4.8/5",
    desc: "Student Rating",
  },
];

const Certifications = () => {
  // Duplicate certifications to ensure seamless scrolling
  const extendedCerts = [
    ...certifications,
    ...certifications,
    ...certifications,
  ];

  return (
    <section className="bg-[#f9fafb] py-14 px-4 md:px-12">
      {/* Section Header */}
      <div className="flex items-center justify-center mb-8 gap-3 flex-wrap text-center">
        <Award className="text-orange-400 w-6 h-6" />
        <h2 className="text-3xl font-bold text-gray-900">
          Government Approved Certifications
        </h2>
        <span className="bg-blue-100 text-blue-600 text-sm px-4 py-1 rounded-full">
          Ministry of Education Recognized
        </span>
      </div>

      {/* Scrolling Certifications Strip */}
      <div className="overflow-hidden py-4">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {extendedCerts.map((item, idx) => (
            <div
              key={idx}
              className={`min-w-[220px] flex-shrink-0 rounded-xl p-4 shadow-md ${item.bg}`}
            >
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 rounded-xl shadow-sm">
                  {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-base">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {item.icon}
            <h4 className="text-2xl font-bold text-gray-900 mt-2">
              {item.title}
            </h4>
            <p className="text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
