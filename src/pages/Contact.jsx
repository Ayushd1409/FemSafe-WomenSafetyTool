import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserData } from "../context/UserContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const { isAuth } = UserData();
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [witness, setWitness] = useState("");
  const [incidentType, setIncidentType] = useState("");
  const [action, setAction] = useState("");
  const [frequency, setFrequency] = useState("");
  const [description, setDescription] = useState("");
  const [perpetratorDetails, setPerpetratorDetails] = useState("");
  const [confidentiality, setConfidentiality] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reportData = {
      name,
      rollNumber,
      email,
      dateOfIncident: new Date(date),
      location,
      witnessName: witness,
      typeOfIncident: incidentType,
      desiredAction: action,
      frequency,
      incidentDescription: description,
      perpetratorDetails,
      confidentiality,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/submit", reportData);

      if (response.status === 200 || response.status === 201) {
        toast.success("Report submitted successfully!");
        console.log(response.data);
      } else {
        throw new Error("Unexpected response status: " + response.status);
      }
    } catch (error) {
      console.error("Error submitting the report:", error);
      toast.error("Error submitting the report!");
    }
  };

  // Voice to text logic
  const startListening = (field) => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (field === "description") {
        setDescription(transcript);
      } else if (field === "perpetratorDetails") {
        setPerpetratorDetails(transcript);
      }
    };

    recognition.onerror = (event) => {
      toast.error("Speech recognition failed. Please try again.");
      console.error(event.error);
    };
  };

  return (
    <>
      <Navbar isAuth={isAuth} />

      <div>
        <div className="min-h-screen py-20 bg-gray-900">
          <div className="container mx-auto max-w-5xl mt-14">
            <div className="bg-slate-50 rounded-xl mx-auto shadow-lg overflow-hidden">
              <div className="w-full flex flex-col items-center justify-end p-5 bg-no-repeat bg-cover bg-center"></div>
              <div className="w-full px-10">
                <h2 className="text-4xl mb-4 text-center font-semibold">File a Report</h2>
                <p className="mb-4 text-center">Personal Information</p>
                <form onSubmit={handleSubmit}>
                  <div className="mt-3">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Your Name</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="mt-3">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Roll Number</span>
                      </div>
                      <input
                        type="number"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        value={rollNumber}
                        onChange={(e) => setRollNumber(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="mt-3">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Personal Email</span>
                      </div>
                      <input
                        type="email"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                  </div>
                  <p className="mt-5 text-center">Incident Information</p>
                  <div className="mt-3">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Date of Incident</span>
                      </div>
                      <div>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="input input-bordered w-full"
                        />
                      </div>
                    </label>
                  </div>

                  <div className="mt-3">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Location of Incident</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="mt-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Name of Witness - if any</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        value={witness}
                        onChange={(e) => setWitness(e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 pt-6">
                    <select
                      className="select select-bordered w-full max-w-xs p-3 rounded-lg shadow-md"
                      value={incidentType}
                      onChange={(e) => setIncidentType(e.target.value)}
                    >
                      <option disabled selected>Type of Incident</option>
                      <option>Ragging</option>
                      <option>Harassment</option>
                      <option>Bullying</option>
                      <option>Physical Abuse</option>
                    </select>

                    <select
                      className="select select-bordered w-full max-w-xs p-3 rounded-lg shadow-md"
                      value={action}
                      onChange={(e) => setAction(e.target.value)}
                    >
                      <option disabled selected>Desired Action (if any)</option>
                      <option>Investigation</option>
                      <option>Counseling</option>
                      <option>Disciplinary Action</option>
                      <option>Mediation</option>
                    </select>

                    <select
                      className="select select-bordered w-full max-w-xs p-3 rounded-lg shadow-md"
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                    >
                      <option disabled selected>Frequency (how often?)</option>
                      <option>First time</option>
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>

                  <div className="mt-3">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Description of the Incident</span>
                      </div>
                      <textarea
                        placeholder="Type here"
                        className="textarea textarea-bordered textarea-lg text-base w-full"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                      <button
                        type="button"
                        onClick={() => startListening("description")}
                        className="mt-2 btn btn-primary w-full text-white"
                      >
                        Start Voice Input
                      </button>
                    </label>
                  </div>

                  <div className="mt-3">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Details of the Perpetrator</span>
                      </div>
                      <textarea
                        placeholder="Type here"
                        className="textarea textarea-bordered textarea-lg text-base w-full"
                        value={perpetratorDetails}
                        onChange={(e) => setPerpetratorDetails(e.target.value)}
                      ></textarea>
                      <button
                        type="button"
                        onClick={() => startListening("perpetratorDetails")}
                        className="mt-2 btn btn-primary w-full text-white"
                      >
                        Start Voice Input
                      </button>
                    </label>
                  </div>

                  <div className="form-control mt-4">
                    <label className="label cursor-pointer">
                      <span className="label-text text-base">
                        Confidentiality Preference - Do you allow your name to be disclosed in an investigation?
                      </span>
                      <input
                        type="checkbox"
                        checked={confidentiality}
                        onChange={() => setConfidentiality(!confidentiality)}
                        className="checkbox"
                      />
                    </label>
                  </div>

                  <span>
                    I accept the{" "}
                    <a href="#" className="text-gray-950 font-semibold">
                      Terms of Use
                    </a>{" "}
                    &{" "}
                    <a href="#" className="text-gray-950 font-semibold">
                      Privacy Policy
                    </a>
                  </span>

                  <div className="mt-5 mb-8">
                    <button
                      type="submit"
                      className="w-full bg-gray-800 rounded-lg hover:bg-gray-950 cursor-pointer py-3 text-center text-white"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
      <Footer />
    </>
  );
}

export default Contact;
