import React, { useState } from "react";

const CareerConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.course) {
      alert("Please fill all required fields.");
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20 px-4">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-3">
          ✈️ Start Your Journey
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Get Expert Course Guidance
        </h2>
        <p className="text-gray-600">
          Receive personalized recommendations from our education consultants
        </p>
      </div>

      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="text-center py-6 border-b border-blue-500">
          <div className="text-blue-600 text-3xl mb-1">📘</div>
          <h3 className="text-xl font-semibold">Free Career Consultation</h3>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium flex items-center gap-1">
                👤 Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="text-sm font-medium flex items-center gap-1">
                📧 Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-sm font-medium flex items-center gap-1">
                📞 Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="text-sm font-medium flex items-center gap-1">
                🎯 Interested Course
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a course</option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Cloud Computing">Cloud Computing</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium flex items-center gap-1">
              💬 Additional Message (Optional)
            </label>
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about your career goals..."
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition"
          >
            🚀 Get Free Consultation
          </button>

          {submitted && (
            <p className="text-green-600 text-center font-medium mt-2">
              ✅ Form submitted successfully!
            </p>
          )}
        </form>

        <div className="bg-green-50 text-sm text-gray-700 text-center px-4 py-3 border-t">
          ✅ <span className="text-green-600 font-medium">100% Free</span> &nbsp;&bull;&nbsp;
          🔒 <span className="text-blue-600 font-medium">Secure</span> &nbsp;&bull;&nbsp;
          ⚡ <span className="text-purple-600 font-medium">Quick Response</span>
        </div>
      </div>
    </section>
  );
};

export default CareerConsultationForm;
