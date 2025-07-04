# EmailJS Setup Guide

To enable email sending functionality in your Career Consultation Form, follow these steps:

## 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account

## 2. Create Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, Yahoo, etc.)
- Follow the setup instructions for your provider

## 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template structure:

```
Subject: New Career Consultation Request - {{course}}

Hi {{to_name}},

You have received a new career consultation request with the following details:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Interested Course: {{course}}

Message:
{{message}}

Best regards,
Career Consultation System
```

## 4. Get Your Credentials
- **Service ID**: Found in Email Services section
- **Template ID**: Found in Email Templates section  
- **Public Key**: Found in Account > API Keys

## 5. Update Configuration
Edit `src/config/emailConfig.js` and replace:
- `service_YOUR_SERVICE_ID` with your actual Service ID
- `template_YOUR_TEMPLATE_ID` with your actual Template ID
- `YOUR_PUBLIC_KEY` with your actual Public Key

## 6. Test the Form
After updating the configuration, test the form to ensure emails are being sent successfully.

## Example Configuration
```javascript
export const emailConfig = {
  serviceID: 'service_abcd1234',
  templateID: 'template_xyz5678', 
  publicKey: 'your_public_key_here',
};
```

## Troubleshooting
- Make sure your email service is properly connected
- Check that template variables match exactly
- Verify your public key is correct
- Check browser console for any error messages
