import express from "express";
import { Submit } from "../models/Submit.js";

const router = express.Router();

// POST route to handle submissions
router.post("/", async (req, res) => {
  try {
    const {
      name,
      rollNumber,
      email,
      dateOfIncident,
      location,
      witnessName,
      typeOfIncident,
      desiredAction,
      frequency,
      incidentDescription,
      perpetratorDetails,
      confidentiality,
    } = req.body;

    const submission = new Submit({
      name,
      rollNumber,
      email,
      dateOfIncident,
      location,
      witnessName,
      typeOfIncident,
      desiredAction,
      frequency,
      incidentDescription,
      perpetratorDetails,
      confidentiality,
    });

    await submission.save();
    res.status(201).json({ message: "Report submitted successfully!" });
  } catch (error) {
    console.error("Error submitting report:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET route to fetch all submissions (optional)
router.get("/", async (req, res) => {
  try {
    const submissions = await Submit.find();
    res.status(200).json(submissions);
  } catch (error) {
    console.error("Error fetching submissions:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
