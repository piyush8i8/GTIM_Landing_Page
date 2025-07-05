import React from "react";
import { Globe, BookOpen, Wrench, Zap,ListChecks } from "lucide-react";

const modes = [
  {
    title: "Online Education",
    description: "Learn anywhere with AI tutors",
    color: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    Icon: Globe,
  },
  {
    title: "Distance Learning",
    description: "Structured curriculum with live support",
    color: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    Icon: BookOpen,
  },
  {
    title: "Vocational Training",
    description: "Industry-aligned practical programs",
    color: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    Icon: Wrench,
  },
  {
    title: "Regular Courses",
    description: "Regular classes for career readiness",
    color: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    Icon: ListChecks,
  },
];

const LearningModesSection = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Flexible Learning for Every Goal
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Choose from our comprehensive range of AI-powered educational programs designed for the modern learner
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {modes.map(({ title, description, color, iconBg, iconColor, Icon }, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-6 ${color} text-center transition-all transform hover:scale-105 hover:shadow-lg duration-300`}
          >
            <div className="flex justify-center">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${iconBg} mb-4`}>
                <Icon className={`w-6 h-6 ${iconColor}`} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningModesSection;
