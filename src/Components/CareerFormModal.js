import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaBook } from "react-icons/fa";

const CareerFormModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Required";
    if (!formData.email) newErrors.email = "Required";
    if (!formData.phone) newErrors.phone = "Required";
    if (!formData.course) newErrors.course = "Required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    onSubmit(formData);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="relative bg-white p-8 rounded-xl w-full max-w-2xl shadow-lg form-container">
        <button onClick={onClose} className="absolute top-2 right-4 text-xl">×</button>

        <div className="text-center mb-6 relative z-10">
          <FaBook className="mx-auto text-blue-500 text-3xl" />
          <h2 className="text-2xl font-bold">Free Career Consultation</h2>
          <p className="text-gray-500 text-sm mt-1">Get expert advice from our counselors</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
          <div>
            <label className="flex items-center gap-1 font-semibold text-sm">
              <FaUser /> Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full border px-3 py-2 rounded text-gray-800 placeholder-gray-500"
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="flex items-center gap-1 font-semibold text-sm">
              <FaEnvelope /> Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border px-3 py-2 rounded text-gray-800 placeholder-gray-500"
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="flex items-center gap-1 font-semibold text-sm">
              <FaPhone /> Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full border px-3 py-2 rounded text-gray-800 placeholder-gray-500"
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div>
            <label className="flex items-center gap-1 font-semibold text-sm">
              🎯 Interested Course
            </label>
            <select
              name="course"
              className="w-full border px-3 py-2 rounded text-gray-800"
              onChange={handleChange}
              defaultValue=""
            >
              <option value="" disabled>Select a course</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
              <option value="BBA">BBA</option>
              <option value="BA">BA</option>
            </select>
            {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
          </div>
          <div className="sm:col-span-2">
            <label className="flex items-center gap-1 font-semibold text-sm">
              <FaCommentDots /> Additional Message (Optional)
            </label>
            <textarea
              name="message"
              rows="3"
              placeholder="Tell us about your career goals..."
              className="w-full border px-3 py-2 rounded text-gray-800 placeholder-gray-500"
              onChange={handleChange}
            />
          </div>
          <div className="sm:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Watermark */}
        <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none select-none z-0">
          <h1 className="text-6xl font-extrabold text-gray-900 whitespace-nowrap">GTIM</h1>
        </div>
      </div>
    </div>
  );
};

export default CareerFormModal;
