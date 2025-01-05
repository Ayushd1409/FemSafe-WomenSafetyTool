import mongoose from "mongoose";

const submitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: Number, required: true },
  email: { type: String, required: true },
  dateOfIncident: { type: Date, required: true },
  location: { type: String, required: true },
  witnessName: { type: String },
  typeOfIncident: { type: String, required: true },
  desiredAction: { type: String },
  frequency: { type: String },
  incidentDescription: { type: String, required: true },
  perpetratorDetails: { type: String, required: true },
  confidentiality: { type: Boolean, default: true },
}, { timestamps: true });

export const Submit = mongoose.model("Submit", submitSchema);