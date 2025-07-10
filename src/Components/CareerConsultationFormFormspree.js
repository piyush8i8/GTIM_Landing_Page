// import React, { useState } from "react";

// const CareerConsultationFormFormspree = () => {
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
//       // Using Formspree - replace YOUR_FORM_ID with actual Formspree form ID
//       const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           course: formData.course,
//           message: formData.message,
//         }),
//       });

//       if (response.ok) {
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
//         throw new Error("Form submission failed");
//       }
//     } catch (error) {
//       console.error("Form submission error:", error);
//       setErrors({
//         submit:
//           "Failed to send message. Please try again or contact us directly.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20 px-4">
//       {/* Rest of the component is the same as the original form */}
//       {/* This is just showing the handleSubmit function change for Formspree */}
//     </section>
//   );
// };

// export default CareerConsultationFormFormspree;



import React, { useState } from "react";

const CareerConsultationFormFormspree = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    mode: "", // Added mode field
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
      // Using Formspree - replace YOUR_FORM_ID with actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
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
          mode: formData.mode, // Send mode to backend
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
          mode: "",
        });
        setErrors({});

        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
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
      <form
        className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-2 text-center text-blue-700">
          Book a Free Career Consultation
        </h2>
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded px-3 py-2"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded px-3 py-2"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block font-semibold mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            className="w-full border rounded px-3 py-2"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
        <div>
          <label className="block font-semibold mb-1">Course Interested In</label>
          <select
            name="course"
            className="w-full border rounded px-3 py-2"
            value={formData.course}
            onChange={handleChange}
            disabled={isSubmitting}
          >
            <option value="">Select a course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MBA">MBA</option>
            <option value="MBBS">MBBS</option>
            <option value="Law">Law</option>
            <option value="Other">Other</option>
          </select>
          {errors.course && (
            <p className="text-red-500 text-sm mt-1">{errors.course}</p>
          )}
        </div>
        {/* New input for online/offline preference */}
        <div>
          <label className="block font-semibold mb-1">
            Prefer Online or Offline
          </label>
          <select
            name="mode"
            className="w-full border rounded px-3 py-2"
            value={formData.mode}
            onChange={handleChange}
            disabled={isSubmitting}
          >
            <option value="">Select preference</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
          {errors.mode && (
            <p className="text-red-500 text-sm mt-1">{errors.mode}</p>
          )}
        </div>
        <div>
          <label className="block font-semibold mb-1">Message</label>
          <textarea
            name="message"
            className="w-full border rounded px-3 py-2"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
        {errors.submit && (
          <p className="text-red-500 text-sm mt-1">{errors.submit}</p>
        )}
        {submitted && (
          <p className="text-green-600 text-center font-semibold">
            Thank you! Your request has been submitted.
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Book Consultation"}
        </button>
      </form>
    </section>
  );
};

export default CareerConsultationFormFormspree;