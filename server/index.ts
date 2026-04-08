import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/User.js";
import Contact from "./models/Contact.js";
import Appointment from "./models/Appointment.js";

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/solaro";
const PORT = process.env.PORT || 5000;

// ─── Connect to MongoDB ─────────────────────────────────
mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log("✅ Connected to MongoDB");
    // Seed admin if not exists
    const admin = await User.findOne({ email: "admin@solaro.com" });
    if (!admin) {
      await User.create({
        fullName: "Solaro Admin",
        email: "admin@solaro.com",
        phone: "+1 234 567 8900",
        password: "admin123",
        role: "admin",
      });
      console.log("✅ Admin account seeded (admin@solaro.com / admin123)");
    }
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ═══════════════════════════════════════════════════════════
// AUTH ROUTES
// ═══════════════════════════════════════════════════════════

// POST /api/auth/signup
app.post("/api/auth/signup", async (req, res) => {
  try {
    const { fullName, email, phone, password } = req.body;
    if (!fullName || !email || !phone || !password) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ success: false, message: "An account with this email already exists." });
    }
    const user = await User.create({ fullName, email, phone, password, role: "user" });
    const safeUser = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      role: user.role,
      joinedDate: (user as any).createdAt,
    };
    return res.json({ success: true, message: "Account created successfully!", user: safeUser });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/auth/login
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email or password." });
    }
    const safeUser = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      role: user.role,
      joinedDate: (user as any).createdAt,
    };
    return res.json({ success: true, message: "Login successful!", user: safeUser });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// PUT /api/auth/profile/:id
app.put("/api/auth/profile/:id", async (req, res) => {
  try {
    const { fullName, phone } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { fullName, phone }, { new: true });
    if (!user) return res.status(404).json({ success: false, message: "User not found." });
    const safeUser = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      role: user.role,
      joinedDate: (user as any).createdAt,
    };
    return res.json({ success: true, user: safeUser });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// ═══════════════════════════════════════════════════════════
// CONTACT ROUTES
// ═══════════════════════════════════════════════════════════

// POST /api/contacts
app.post("/api/contacts", async (req, res) => {
  try {
    const { firstName, lastName, phone, email, message } = req.body;
    if (!firstName || !lastName || !phone || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }
    const contact = await Contact.create({ firstName, lastName, phone, email, message });
    return res.json({ success: true, message: "Message sent successfully!", contact });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/contacts
app.get("/api/contacts", async (_req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.json({ success: true, contacts });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE /api/contacts/:id
app.delete("/api/contacts/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    return res.json({ success: true, message: "Contact deleted." });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// ═══════════════════════════════════════════════════════════
// APPOINTMENT ROUTES
// ═══════════════════════════════════════════════════════════

// POST /api/appointments
app.post("/api/appointments", async (req, res) => {
  try {
    const { name, email, phone, dateTime, service, expert, message } = req.body;
    if (!name || !email || !phone || !dateTime || !service || !expert) {
      return res.status(400).json({ success: false, message: "All required fields must be filled." });
    }
    const appointment = await Appointment.create({ name, email, phone, dateTime, service, expert, message });
    return res.json({ success: true, message: "Appointment booked successfully!", appointment });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/appointments
app.get("/api/appointments", async (_req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    return res.json({ success: true, appointments });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// PUT /api/appointments/:id
app.put("/api/appointments/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!appointment) return res.status(404).json({ success: false, message: "Appointment not found." });
    return res.json({ success: true, appointment });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE /api/appointments/:id
app.delete("/api/appointments/:id", async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    return res.json({ success: true, message: "Appointment deleted." });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// ═══════════════════════════════════════════════════════════
// ADMIN — USERS
// ═══════════════════════════════════════════════════════════

// GET /api/users
app.get("/api/users", async (_req, res) => {
  try {
    const users = await User.find({}, "-password").sort({ createdAt: -1 });
    return res.json({ success: true, users });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE /api/users/:id
app.delete("/api/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ success: true, message: "User deleted." });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// ═══════════════════════════════════════════════════════════
// START SERVER
// ═══════════════════════════════════════════════════════════
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
