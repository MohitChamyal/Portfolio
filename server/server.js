const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// For production CORS: set your frontend deploy URL here!
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://mohitchamyal-portfolio.vercel.app',
  ],
  credentials: true,
}));
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      }
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `Portfolio Contact Form: New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>Contact form message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ success: false, error: "Server error, mail not sent." });
  }
});

app.get('/', (req, res) => {
  res.send('Server is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
