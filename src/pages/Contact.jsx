import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

function Contact() {
  const [date, setDate] = useState("");
  return (
    <>
      <Navbar />

      <div>
        <div className="min-h-screen py-20 bg-gray-900 ">
          <div className="container mx-auto max-w-5xl">
            <div className=" bg-slate-50 rounded-xl mx-auto shadow-lg overflow-hidden">
              <div className="w-full  flex flex-col items-center justify-end p-5 bg-no-repeat bg-cover bg-center"></div>
              <div className="w-full px-10">
                <h2 className="text-4xl mb-4 text-center font-semibold">
                  File a Report
                </h2>
                <p className="mb-4 text-center">Personal Information</p>
                <form>
                  <div className="mt-3">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Your Name</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full "
                      />
                    </label>
                  </div>
                  <div className="mt-3">
                    <label className="form-control w-full ">
                      <div className="label">
                        <span className="label-text">Roll Number</span>
                      </div>
                      <input
                        type="number"
                        placeholder="Type here"
                        className="input input-bordered w-full "
                      />
                    </label>
                  </div>
                  <div className="mt-3">
                    <label className="form-control w-full ">
                      <div className="label">
                        <span className="label-text">Personal Email</span>{" "}
                      </div>
                      <input
                        type="email"
                        placeholder="Type here"
                        className="input input-bordered w-full "
                      />
                    </label>
                  </div>
                  <p className="mt-5 text-center">Incident Information </p>
                  <div className="mt-3">
                    <label className="form-control w-full ">
                      <div className="label">
                        <span className="label-text">Date of Incident</span>
                      </div>
                      <div>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="input input-bordered w-full "
                        />
                        <p className="mt-3">Selected Date: {date}</p>
                      </div>
                    </label>
                  </div>

                  <div className="mt-3">
                    <label className="form-control w-full ">
                      <div className="label">
                        <span className="label-text">Location of Incident</span>{" "}
                      </div>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full "
                      />
                    </label>
                  </div>
                  <div className="mt-5">
                    <label className="form-control w-full ">
                      <div className="label">
                        <span className="label-text">
                          Name of Witness - if any
                        </span>{" "}
                      </div>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full "
                      />
                    </label>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 pt-6">
                    <select className="select select-bordered w-full max-w-xs p-3 rounded-lg shadow-md">
                      <option disabled selected>
                        Type of Incident
                      </option>
                      <option>Ragging</option>
                      <option>Harassment</option>
                      <option>Bullying</option>
                      <option>Physical Abuse</option>
                    </select>

                    <select className="select select-bordered w-full max-w-xs p-3 rounded-lg shadow-md">
                      <option disabled selected>
                        Desired Action (if any)
                      </option>
                      <option>Investigation</option>
                      <option>Counseling</option>
                      <option>Disciplinary Action</option>
                      <option>Mediation</option>
                    </select>

                    <select className="select select-bordered w-full max-w-xs p-3 rounded-lg shadow-md">
                      <option disabled selected>
                        Frequency (how often?)
                      </option>
                      <option>First time</option>
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>

                  <div className="mt-3">
                    <label className="form-control w-full ">
                      <div className="label">
                        <span className="label-text">
                          Description of the Incident
                        </span>{" "}
                      </div>
                      <textarea
                        placeholder="Type here"
                        className="textarea textarea-bordered textarea-lg text-base w-full "
                      ></textarea>
                    </label>
                  </div>

                  <div className="mt-3">
                    <label className="form-control w-full ">
                      <div className="label">
                        <span className="label-text">
                          Details of the Perpetrator
                        </span>{" "}
                      </div>
                      <textarea
                        placeholder="Type here"
                        className="textarea textarea-bordered textarea-lg text-base w-full "
                      ></textarea>
                    </label>
                  </div>

                  <div className="form-control mt-4">
                    <label className="label cursor-pointer">
                      <span className="label-text text-base">
                        Confidentiality Preference - Do you allow your name to
                        be disclosed in an investigation?
                      </span>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox"
                      />
                    </label>
                  </div>

                  <span className="">
                    I accept the{" "}
                    <a href="#" className="text-gray-950 font-semibold">
                      Terms of Use
                    </a>{" "}
                    &{" "}
                    <a href="#" className="text-gray-950 font-semibold">
                      Privacy Policy
                    </a>
                  </span>
                  <div></div>
                  <div className="mt-5 mb-8">
                    <button className="w-full bg-gray-800 rounded-lg hover:bg-gray-950 cursor-pointer py-3 text-center text-white">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
