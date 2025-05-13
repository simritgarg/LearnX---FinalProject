import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/contact', async (req, res) => {
  console.log('Received POST /contact');
  console.log('Request body:', req.body); // ✅ Log to check if req.body is being parsed

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Check if email environment variables are set
  if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD || !process.env.RECIPIENT_EMAIL) {
    return res.status(500).json({
      message: 'Email configuration is missing in environment variables.'
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your actual email service
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'New Contact Us Message from LearnX',
    text: `You have received a message from ${name} (${email}):\n\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Thank you for your feedback! Email sent successfully');
    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
  console.error('❌ Error sending email:', error); // Change this line
  return res.status(500).json({
    message: 'Error sending message.',
    error: error.message,
  });
}


});

export default router;
