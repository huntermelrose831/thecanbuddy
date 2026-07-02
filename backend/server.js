require("dotenv").config();
const express = require("express");
const { Resend } = require("resend");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors({
  origin: ["https://thecanbuddy.co", "https://www.thecanbuddy.co"],
}));
app.use(express.json());

// Content Security Policy middleware
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://googletagmanager.com; connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com;"
  );
  next();
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, address, bins, details } =
      req.body;

    await resend.emails.send({
      from: "The Can Buddy <onboarding@resend.dev>",
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission - The Can Buddy`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Number of Bins:</strong> ${bins}</p>
        <p><strong>Details:</strong></p>
        <p>${details}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
