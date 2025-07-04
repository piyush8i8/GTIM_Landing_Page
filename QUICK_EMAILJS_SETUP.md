# Quick EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (easiest option)
4. Click "Connect Account" and authorize EmailJS to use your Gmail
5. Your Service ID will be shown (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** `New Career Consultation Request - {{course}}`

**Content:**
```
Hello,

You have received a new career consultation request:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Interested Course: {{course}}

Message:
{{message}}

Best regards,
Career Consultation System
```

4. Save the template - note the Template ID (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your "Public Key" (e.g., `abcdefghij`)

## Step 5: Update Configuration
Edit `src/config/emailConfig.js`:

```javascript
export const emailConfig = {
  serviceID: "service_abc123",      // Your actual Service ID
  templateID: "template_xyz789",    // Your actual Template ID  
  publicKey: "abcdefghij",          // Your actual Public Key
};
```

## Step 6: Test
1. Save the file
2. Test the form
3. Check your email for the message

## Alternative: Use Demo Mode
If you don't want to set up EmailJS right now, the form will work in demo mode (it logs data to console instead of sending emails).

---

**Need Help?** 
- EmailJS Documentation: https://www.emailjs.com/docs/
- Video Tutorial: Search "EmailJS setup tutorial" on YouTube
