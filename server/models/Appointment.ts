import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    dateTime: { type: String, required: true },
    service: { type: String, required: true },
    expert: { type: String, required: true },
    message: { type: String, default: "" },
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", appointmentSchema);
