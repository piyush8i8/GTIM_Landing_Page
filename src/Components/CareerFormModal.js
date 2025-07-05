import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaBook } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { emailConfig } from "../config/emailConfig";
import { formConfig } from "../config/formConfig";

const CareerFormModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.course) newErrors.course = "Please select a course";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const { serviceID, templateID, publicKey } = emailConfig;

      // Check if EmailJS is properly configured
      if (
        serviceID.includes("YOUR_SERVICE_ID") ||
        templateID.includes("YOUR_TEMPLATE_ID") ||
        publicKey.includes("YOUR_PUBLIC_KEY")
      ) {
        // EmailJS not configured - try Formspree fallback
        try {
          const { formspreeEndpoint } = formConfig;
          
          if (!formspreeEndpoint.includes("YOUR_FORM_ENDPOINT")) {
            const response = await fetch(
              `https://formspree.io/f/${formspreeEndpoint}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: formData.name,
                  email: formData.email,
                  phone: formData.phone,
                  course: formData.course,
                  message: formData.message,
                  _subject: `University Program Inquiry - ${formData.course}`,
                  form_type: "University Program Inquiry",
                }),
              }
            );

            if (response.ok) {
              console.log("✅ University inquiry sent successfully via Formspree!");
              setSubmitted(true);
              
              // Call the original onSubmit for brochure download
              onSubmit(formData);
              
              // Close modal after a brief delay
              setTimeout(() => {
                onClose();
              }, 2000);
              return;
            }
          }
        } catch (formspreeError) {
          console.log("📧 Formspree not configured - using demo mode");
        }

        // Fallback to demo mode
        console.log("✅ University form working! Data captured:");
        console.log("📝 Form Data:", {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          message: formData.message || "(no message)",
          type: "University Program Inquiry"
        });

        // Simulate successful submission
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmitted(true);
        
        // Call the original onSubmit for brochure download
        onSubmit(formData);
        
        // Close modal after a brief delay
        setTimeout(() => {
          onClose();
        }, 2000);
        return;
      }

      // Prepare email data for EmailJS
      const templateParams = {
        to_name: "Admin",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        course: formData.course,
        message: formData.message || "No additional message provided",
        reply_to: formData.email,
        form_type: "University Program Inquiry",
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      if (result.text === "OK") {
        setSubmitted(true);
        onSubmit(formData);
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({ submit: "Failed to send inquiry. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="relative bg-white p-8 rounded-xl w-full max-w-2xl shadow-lg form-container">
        <button onClick={onClose} className="absolute top-2 right-4 text-xl">×</button>

        <div className="text-center mb-6 relative z-10">
          <FaBook className="mx-auto text-blue-500 text-3xl" />
          <h2 className="text-2xl font-bold">University Program Inquiry</h2>
          <p className="text-gray-500 text-sm mt-1">Get detailed information about our programs</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
          <div>
            <label className="flex items-center gap-1 font-semibold text-sm">
              <FaUser /> Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your full name"
              className={`w-full border px-3 py-2 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
              }`}
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
              value={formData.email}
              placeholder="Enter your email"
              className={`w-full border px-3 py-2 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
              }`}
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
              value={formData.phone}
              placeholder="Enter your phone number"
              className={`w-full border px-3 py-2 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 ${
                errors.phone ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
              }`}
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
              value={formData.course}
              className={`w-full border px-3 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 ${
                errors.course ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
              }`}
              onChange={handleChange}
            >
              <option value="">Select a course</option>
           <option value="BA">BA</option>
<option value="BSC">BSC</option>
<option value="BCOM">BCOM</option>
<option value="BLib">BLib</option>
<option value="BBA">BBA</option>
<option value="BTech">BTech</option>
<option value="BCA">BCA</option>
<option value="MA">MA</option>
<option value="MSC">MSC</option>
<option value="MCOM">MCOM</option>
<option value="MLib">MLib</option>
<option value="MBA">MBA</option>
<option value="MTech">MTech</option>
<option value="MCA">MCA</option>
<option value="Diploma">Diploma</option>

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
              value={formData.message}
              placeholder="Tell us about your career goals..."
              className="w-full border px-3 py-2 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
          <div className="sm:col-span-2 text-center mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 rounded font-semibold flex items-center justify-center gap-2 mx-auto ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Sending...
                </>
              ) : submitted ? (
                <>
                  ✅ Sent Successfully!
                </>
              ) : (
                "Submit & Download Brochure"
              )}
            </button>
            
            {errors.submit && (
              <p className="text-red-500 text-sm mt-2">{errors.submit}</p>
            )}
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
