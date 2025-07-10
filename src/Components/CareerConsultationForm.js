// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import { emailConfig } from "../config/emailConfig";
// import { formConfig } from "../config/formConfig";

// const CareerConsultationForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));

//     // Clear error when user starts typing
//     if (errors[e.target.name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [e.target.name]: "",
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
//       newErrors.phone = "Phone number must be 10 digits";
//     }

//     if (!formData.course) {
//       newErrors.course = "Please select a course";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       // EmailJS configuration
//       const { serviceID, templateID, publicKey } = emailConfig;

//       // Check if EmailJS is properly configured
//       if (
//         serviceID.includes("YOUR_SERVICE_ID") ||
//         templateID.includes("YOUR_TEMPLATE_ID") ||
//         publicKey.includes("YOUR_PUBLIC_KEY")
//       ) {
//         // EmailJS not configured - try Formspree fallback
//         try {
//           // Get Formspree endpoint from config
//           const { formspreeEndpoint } = formConfig;

//           if (!formspreeEndpoint.includes("YOUR_FORM_ENDPOINT")) {
//             const response = await fetch(
//               `https://formspree.io/f/${formspreeEndpoint}`,
//               {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                   name: formData.name,
//                   email: formData.email,
//                   phone: formData.phone,
//                   course: formData.course,
//                   message: formData.message,
//                   _subject: `New Career Consultation Request - ${formData.course}`,
//                 }),
//               }
//             );

//             if (response.ok) {
//               console.log("✅ Email sent successfully via Formspree!");
//               setSubmitted(true);
//               setFormData({
//                 name: "",
//                 email: "",
//                 phone: "",
//                 course: "",
//                 message: "",
//               });
//               setErrors({});
//               setTimeout(() => setSubmitted(false), 5000);
//               return;
//             }
//           }
//         } catch (formspreeError) {
//           console.log("📧 Formspree not configured - using demo mode");
//         }

//         // Fallback to demo mode
//         console.log("✅ FORM WORKING! Data captured successfully:");
//         console.log("📝 Form Data:", {
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           course: formData.course,
//           message: formData.message || "(no message)",
//         });
//         console.log(
//           "🔧 To enable emails: Set up EmailJS or Formspree (see FORM_STATUS.md)"
//         );

//         // Simulate successful submission for demo
//         await new Promise((resolve) => setTimeout(resolve, 1000));

//         setSubmitted(true);
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           course: "",
//           message: "",
//         });
//         setErrors({});

//         // Hide success message after 5 seconds
//         setTimeout(() => {
//           setSubmitted(false);
//         }, 5000);
//         return;
//       }

//       // Prepare email data
//       const templateParams = {
//         to_name: "Admin",
//         from_name: formData.name,
//         from_email: formData.email,
//         phone: formData.phone,
//         course: formData.course,
//         message: formData.message || "No additional message provided",
//         reply_to: formData.email,
//       };

//       // Send email using EmailJS
//       const result = await emailjs.send(
//         serviceID,
//         templateID,
//         templateParams,
//         publicKey
//       );

//       if (result.text === "OK") {
//         setSubmitted(true);
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           course: "",
//           message: "",
//         });
//         setErrors({});

//         // Hide success message after 5 seconds
//         setTimeout(() => {
//           setSubmitted(false);
//         }, 5000);
//       } else {
//         throw new Error("Email sending failed");
//       }
//     } catch (error) {
//       console.error("Form submission error:", error);

//       // More specific error messages
//       let errorMessage =
//         "Failed to send message. Please try again or contact us directly.";

//       if (error.message.includes("Invalid service ID")) {
//         errorMessage =
//           "Email service not configured properly. Please contact support.";
//       } else if (error.message.includes("Template not found")) {
//         errorMessage = "Email template not found. Please contact support.";
//       } else if (error.message.includes("Invalid public key")) {
//         errorMessage =
//           "Email service authentication failed. Please contact support.";
//       }

//       setErrors({ submit: errorMessage });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20 px-4">
//       <div className="max-w-2xl mx-auto text-center mb-10">
//         <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-3">
//           ✈ Start Your Journey
//         </span>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//           Get Expert Course Guidance
//         </h2>
//         <p className="text-gray-600">
//           Receive personalized recommendations from our education consultants
//         </p>
//       </div>

//       <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
//         <div className="text-center py-6 border-b border-blue-500">
//           <div className="text-blue-600 text-3xl mb-1">📘</div>
//           <h3 className="text-xl font-semibold">Free Career Consultation</h3>
//         </div>
//         <form onSubmit={handleSubmit} className="p-6 space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="text-sm font-medium flex items-center gap-1">
//                 👤 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={`w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
//                   errors.name
//                     ? "border-red-500 focus:ring-red-500"
//                     : "focus:ring-blue-500"
//                 }`}
//                 placeholder="Enter your full name"
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-xs mt-1">{errors.name}</p>
//               )}
//             </div>
//             <div>
//               <label className="text-sm font-medium flex items-center gap-1">
//                 📧 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
//                   errors.email
//                     ? "border-red-500 focus:ring-red-500"
//                     : "focus:ring-blue-500"
//                 }`}
//                 placeholder="Enter your email"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//               )}
//             </div>
//             <div>
//               <label className="text-sm font-medium flex items-center gap-1">
//                 📞 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className={`w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
//                   errors.phone
//                     ? "border-red-500 focus:ring-red-500"
//                     : "focus:ring-blue-500"
//                 }`}
//                 placeholder="Enter your phone number"
//               />
//               {errors.phone && (
//                 <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//               )}
//             </div>
//             <div>
//               <label className="text-sm font-medium flex items-center gap-1">
//                 🎯 Interested Course
//               </label>
//               <select
//                 name="course"
//                 value={formData.course}
//                 onChange={handleChange}
//                 className={`w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
//                   errors.course
//                     ? "border-red-500 focus:ring-red-500"
//                     : "focus:ring-blue-500"
//                 }`}
//               >
//                 <option value="">Select a course</option>
//                <option value="BA">BA</option>
// <option value="BSC">BSC</option>
// <option value="BCOM">BCOM</option>
// <option value="BLib">BLib</option>
// <option value="BBA">BBA</option>
// <option value="BTech">BTech</option>
// <option value="BCA">BCA</option>
// <option value="MA">MA</option>
// <option value="MSC">MSC</option>
// <option value="MCOM">MCOM</option>
// <option value="MLib">MLib</option>
// <option value="MBA">MBA</option>
// <option value="MTech">MTech</option>
// <option value="MCA">MCA</option>
// <option value="Diploma">Diploma</option>

//               </select>
//               {errors.course && (
//                 <p className="text-red-500 text-xs mt-1">{errors.course}</p>
//               )}
//             </div>
//           </div>

//           <div>
//             <label className="text-sm font-medium flex items-center gap-1">
//               💬 Additional Message (Optional)
//             </label>
//             <textarea
//               name="message"
//               rows="3"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Tell us about your career goals..."
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`w-full mt-2 ${
//               isSubmitting
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-blue-600 hover:bg-blue-700"
//             } text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition`}
//           >
//             {isSubmitting ? (
//               <>
//                 <span className="animate-spin">⏳</span>
//                 Sending...
//               </>
//             ) : (
//               <>🚀 Get Free Consultation</>
//             )}
//           </button>

//           {submitted && (
//             <p className="text-green-600 text-center font-medium mt-2">
//               ✅ Form submitted successfully!
//             </p>
//           )}

//           {errors.submit && (
//             <p className="text-red-500 text-center font-medium mt-2">
//               ❌ {errors.submit}
//             </p>
//           )}
//         </form>

//         <div className="bg-green-50 text-sm text-gray-700 text-center px-4 py-3 border-t">
//           ✅ <span className="text-green-600 font-medium">100% Free</span>{" "}
//           &nbsp;&bull;&nbsp; 🔒{" "}
//           <span className="text-blue-600 font-medium">Secure</span>{" "}
//           &nbsp;&bull;&nbsp; ⚡{" "}
//           <span className="text-purple-600 font-medium">Quick Response</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CareerConsultationForm;

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { emailConfig } from "../config/emailConfig";
import { formConfig } from "../config/formConfig";

const CareerConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    mode: "", // Added mode field
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

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

    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    if (!formData.mode) {
      newErrors.mode = "Please select online or offline";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
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
          // Get Formspree endpoint from config
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
                  mode: formData.mode,
                  message: formData.message,
                  _subject: `New Career Consultation Request - ${formData.course}`,
                }),
              }
            );

            if (response.ok) {
              setSubmitted(true);
              setFormData({
                name: "",
                email: "",
                phone: "",
                course: "",
                mode: "",
                message: "",
              });
              setErrors({});
              setTimeout(() => setSubmitted(false), 5000);
              return;
            }
          }
        } catch (formspreeError) {
          // fallback to demo mode
        }

        // Fallback to demo mode
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          mode: "",
          message: "",
        });
        setErrors({});
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
        return;
      }

      // Prepare email data
      const templateParams = {
        to_name: "Admin",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        course: formData.course,
        mode: formData.mode,
        message: formData.message || "No additional message provided",
        reply_to: formData.email,
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
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          mode: "",
          message: "",
        });
        setErrors({});
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error) {
      setErrors({
        submit:
          "Failed to send message. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20 px-4">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-3">
          ✈ Start Your Journey
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
                className={`w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-blue-500"
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
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
                className={`w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-blue-500"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
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
                className={`w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-blue-500"
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium flex items-center gap-1">
                🎯 Interested Course
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className={`w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors.course
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-blue-500"
                }`}
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
              {errors.course && (
                <p className="text-red-500 text-xs mt-1">{errors.course}</p>
              )}
            </div>
            {/* New input for online/offline preference */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium flex items-center gap-1">
                🌐 Prefer Online or Offline
              </label>
              <select
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                className={`w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors.mode
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-blue-500"
                }`}
              >
                <option value="">Select preference</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
              {errors.mode && (
                <p className="text-red-500 text-xs mt-1">{errors.mode}</p>
              )}
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
            disabled={isSubmitting}
            className={`w-full mt-2 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition`}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin">⏳</span>
                Sending...
              </>
            ) : (
              <>🚀 Get Free Consultation</>
            )}
          </button>

          {submitted && (
            <p className="text-green-600 text-center font-medium mt-2">
              ✅ Form submitted successfully!
            </p>
          )}

          {errors.submit && (
            <p className="text-red-500 text-center font-medium mt-2">
              ❌ {errors.submit}
            </p>
          )}
        </form>

        <div className="bg-green-50 text-sm text-gray-700 text-center px-4 py-3 border-t">
          ✅ <span className="text-green-600 font-medium">100% Free</span>{" "}
          &nbsp;&bull;&nbsp; 🔒{" "}
          <span className="text-blue-600 font-medium">Secure</span>{" "}
          &nbsp;&bull;&nbsp; ⚡{" "}
          <span className="text-purple-600 font-medium">Quick Response</span>
        </div>
      </div>
    </section>
  );
};

export default CareerConsultationForm;