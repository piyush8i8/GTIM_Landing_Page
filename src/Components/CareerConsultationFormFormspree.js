import React, { useState } from "react";

const CareerConsultationFormFormspree = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
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
      {/* Rest of the component is the same as the original form */}
      {/* This is just showing the handleSubmit function change for Formspree */}
    </section>
  );
};

export default CareerConsultationFormFormspree;
