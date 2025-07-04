// EmailJS Configuration
export const emailConfig = {
  serviceID: process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_YOUR_SERVICE_ID",
  templateID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_YOUR_TEMPLATE_ID", 
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};
