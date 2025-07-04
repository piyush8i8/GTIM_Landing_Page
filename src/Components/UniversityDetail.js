// Updated UniversityDetail Component with Real Program Data
// UniversityDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaClock, FaUserGraduate } from "react-icons/fa";
import CareerFormModal from "./CareerFormModal";

const programData = {
  "amu-online": {
    name: "Aligarh Muslim University (AMU)",
    location: "Aligarh, India",
    programs: [
      { title: "BA", eligibility: "12th", duration: "3 Years" },
      { title: "B.COM", eligibility: "12th", duration: "3 Years" },
      { title: "MA", eligibility: "Graduate", duration: "2 Years" },
      { title: "M.COM", eligibility: "B.Com", duration: "2 Years" },
    ],
  },
  "jamia-hamdard-online": {
    name: "Jamia Hamdard Deemed to be University (Delhi)",
    location: "New Delhi, India",
    programs: [
      { title: "B.Com", eligibility: "12th", duration: "3 Years" },
      { title: "BBA", eligibility: "12th", duration: "3 Years" },
      { title: "BCA", eligibility: "12th", duration: "3 Years" },
      { title: "MA Islamic", eligibility: "Graduation", duration: "2 Years" },
      { title: "MBA", eligibility: "Graduation", duration: "2 Years" },
    ],
  },
  "chandigarh-university": {
    name: "Chandigarh University (CU)",
    location: "Chandigarh, India",
    programs: [
      { title: "MBA", eligibility: "Graduation", duration: "2 Years" },
      { title: "BBA", eligibility: "12th", duration: "3 Years" },
      { title: "MCA", eligibility: "Graduation", duration: "2 Years" },
      { title: "BCA", eligibility: "Graduation", duration: "2 Years" },
    ],
  },
  "graphic-era-university": {
    name: "Graphic Era",
    location: "Dehradun, India",
    programs: [
      { title: "BA", eligibility: "12th", duration: "3 Years" },
      { title: "B.Tech", eligibility: "12th", duration: "4 Years" },
      { title: "BCA", eligibility: "12th", duration: "3 Years" },
      { title: "BBA", eligibility: "12th", duration: "3 Years" },
      { title: "B.Com", eligibility: "12th", duration: "3 Years" },
      { title: "BSC Nursing", eligibility: "12th", duration: "4 Years" },
      { title: "MA", eligibility: "Graduation", duration: "2 Years" },
      { title: "M.Tech", eligibility: "Graduation", duration: "2 Years" },
      { title: "MCA", eligibility: "Graduation", duration: "2 Years" },
      { title: "MBA", eligibility: "Graduation", duration: "2 Years" },
      { title: "M.Com", eligibility: "Graduation", duration: "2 Years" },
    ],
  },
  "uttaranchal-university": {
    name: "Uttaranchal University",
    location: "Dehradun, India",
    programs: [
      { title: "B.Tech", eligibility: "12th", duration: "4 Years" },
      { title: "MBA", eligibility: "Graduation", duration: "2 Years" },
    ],
  },
  "rit-college": {
    name: "RIT College, Roorkee",
    location: "Roorkee, India",
    programs: [
      { title: "B.Tech", eligibility: "12th", duration: "4 Years" },
      { title: "BCA", eligibility: "12th", duration: "3 Years" },
      { title: "BBA", eligibility: "12th", duration: "3 Years" },
    ],
  },
  "lpu-online": {
    name: "Lovely Professional University",
    location: "Phagwara, India",
    programs: [
      { title: "MBA", eligibility: "Graduation", duration: "2 Years" },
      { title: "BCA", eligibility: "12th", duration: "3 Years" },
    ],
  },
  "srm-university": {
    name: "SRM Institute of Science and Technology",
    location: "Chennai, India",
    programs: [
      { title: "B.Tech", eligibility: "12th", duration: "4 Years" },
      { title: "M.Tech", eligibility: "Graduation", duration: "2 Years" },
    ],
  },
  ignou: {
    name: "Indira Gandhi National Open University",
    location: "New Delhi, India",
    programs: [
      { title: "BA", eligibility: "12th", duration: "3 Years" },
      { title: "MA", eligibility: "Graduation", duration: "2 Years" },
    ],
  },
  "amity-university": {
    name: "Amity Online University",
    location: "Noida, India",
    programs: [
      { title: "MBA", eligibility: "Graduation", duration: "2 Years" },
      { title: "BBA", eligibility: "12th", duration: "3 Years" },
    ],
  },
  "dev-bhoomi-university": {
    name: "Dev Bhoomi University",
    location: "Dehradun, India",
    programs: [
      { title: "B.Sc Nursing", eligibility: "12th", duration: "4 Years" },
      { title: "MBA", eligibility: "Graduation", duration: "2 Years" },
    ],
  },
  "hrit-university": {
    name: "HRIT University",
    location: "Ghaziabad, India",
    programs: [
      { title: "B.Tech", eligibility: "12th", duration: "4 Years" },
      { title: "MBA", eligibility: "Graduation", duration: "2 Years" },
    ],
  },
  "kl-university": {
    name: "KL University",
    location: "Vijayawada, India",
    programs: [
      { title: "B.Tech", eligibility: "12th", duration: "4 Years" },
      { title: "M.Tech", eligibility: "Graduation", duration: "2 Years" },
    ],
  },
  "mangalayatan-university": {
    name: "Mangalayatan University",
    location: "Aligarh, India",
    programs: [
      { title: "B.Tech", eligibility: "12th", duration: "4 Years" },
      { title: "M.Tech", eligibility: "Graduation", duration: "2 Years" },
    ],
  },
  "mzu-university": {
    name: "MZU University",
    location: "Mizoram, India",
    programs: [
      { title: "BA", eligibility: "12th", duration: "3 Years" },
      { title: "MA", eligibility: "Graduation", duration: "2 Years" },
    ],
  },
};

const UniversityDetail = () => {
  const { slug } = useParams();
  const university = programData[slug];
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleApplyClick = () => setShowForm(true);

  const handleDownloadClick = () => {
    if (!formData) setShowForm(true);
    else {
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
              {university ? university.name : "University Not Found"}
            </h1>
            <p className="text-sm text-white/80">
              World-renowned institution offering comprehensive academic
              programs
            </p>
            <div className="flex gap-6 mt-2 text-sm text-white/70">
              <span>⭐ 4.9 Rating</span>
              <span>📍 {university?.location || "Location unavailable"}</span>
              <span>🎓 {university?.programs?.length || 0} Programs</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 text-gray-800 rounded-t-3xl py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Available Programs</h2>
          <p className="text-gray-500 mt-2">
            Choose from our comprehensive range of academic programs
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {university?.programs?.map((program, index) => (
            <div
              key={index}
              className="bg-white border-t-4 border-purple-600 rounded-2xl shadow hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-purple-600 text-xl">📘</div>
                  <span className="text-green-600 font-semibold text-sm flex items-center gap-1">
                    <FaStar className="text-green-500" /> 4.8
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{program.title}</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-blue-500" /> Duration:{" "}
                    <strong>{program.duration}</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUserGraduate className="text-emerald-500" /> Eligibility:{" "}
                    <strong>{program.eligibility}</strong>
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
