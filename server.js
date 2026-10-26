const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGODB_URI || "mongodb+srv://rohitcomfygen:rohitcomfygen@cluster0.t5cnc.mongodb.net/portfolio?retryWrites=true&w=majority";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Connection Error:", err.message));

app.use("/", router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || "rohitkumar0526946@gmail.com",
    pass: process.env.EMAIL_PASS || ""
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Email Service Warning:", error.message);
  } else {
    console.log("Email Service Ready to Send");
  }
});

const userMailSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phone: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userMailSchema);

router.post("/contact", async (req, res) => {
  try {
    const name = `${req.body.firstName || ''} ${req.body.lastName || ''}`.trim();
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;

    const mail = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER || "rohitkumar0526946@gmail.com",
      subject: "Contact Form Submission - Rohit Kumar's Portfolio",
      html: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
               <h2>New Message from Portfolio Website</h2>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
               <p><strong>Message:</strong></p>
               <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</div>
             </div>`,
    };

    let userDetails = null;
    try {
      userDetails = await User.create(req.body);
    } catch (dbErr) {
      console.log("DB save note:", dbErr.message);
    }

    await contactEmail.sendMail(mail);
    res.json({ code: 200, status: "Message Sent", data: userDetails });
  } catch (error) {
    console.error("Error sending mail:", error);
    res.json({ code: 400, status: error.message });
  }
});
