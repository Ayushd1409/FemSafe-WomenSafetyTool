import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserData } from "../context/UserContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


function SubmitToAdmin() {
  const { isAuth, isAdmin } = UserData();
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    if (!isAdmin) return;

    const fetchReports = async () => {
      try {
        console.log("Fetching reports..."); 
        const response = await axios.get("http://localhost:5000/api/submit");
        console.log(response.data); 
        setReports(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reports:", error);
        toast.error("Failed to fetch reports!");
        setLoading(false);
      }
    };

    fetchReports();
  }, [isAdmin]);

  if (!isAdmin) {
    return <div className="text-center py-10">Access Denied</div>;
  }


  return (
    <>
      <Navbar isAuth={isAuth} isAdmin={isAdmin} />
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto">
          <h1 className="text-4xl font-semibold text-center mb-6">
            Submitted Reports
          </h1>
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : reports.length > 0 ? (
            reports.map((report, index) => (
              <div
                key={index}
                className="collapse collapse-plus bg-base-200 mb-4"
              >
                <input
                  type="radio"
                  name="my-accordion-3"
                  id={`report-${index}`}
                />
                <div className="collapse-title text-xl font-medium">
                  Report {index + 1} - by
                </div>

                <div className="collapse-content">
                  <div className="overflow-x-auto">
                    <div className="space-y-4">
                      {report && (
                        <div className="collapse collapse-arrow border border-gray-300 rounded-lg">
                          <input type="checkbox" className="peer" />
                          <div className="collapse-title text-xl font-semibold text-gray-800">
                            Submission {report.id} by {report.email}
                          </div>
                          <div className="collapse-content">
                            <div className="bg-white p-4 rounded-lg shadow-lg">
                              <div className="flex justify-between">
                                <span className="font-medium text-gray-700">
                                  Name:
                                </span>
                                <span className="text-gray-600">
                                  {report.name}
                                </span>
                              </div>
                              <div className="flex justify-between mt-2">
                                <span className="font-medium text-gray-700">
                                  Roll Number:
                                </span>
                                <span className="text-gray-600">
                                  {report.rollNumber}
                                </span>
                              </div>
                              <div className="flex justify-between mt-2">
                                <span className="font-medium text-gray-700">
                                  Personal Email:
                                </span>
                                <span className="text-gray-600">
                                  {report.email}
                                </span>
                              </div>
                              <div className="flex justify-between mt-2">
                                <span className="font-medium text-gray-700">
                                  Date of Incident:
                                </span>
                                <span className="text-gray-600">
                                  {report.dateOfIncident}
                                </span>
                              </div>
                              <div className="flex justify-between mt-2">
                                <span className="font-medium text-gray-700">
                                  Location of Incident:
                                </span>
                                <span className="text-gray-600">
                                  {report.location}
                                </span>
                              </div>
                              <div className="flex justify-between mt-2">
                                <span className="font-medium text-gray-700">
                                  Name of Witness:
                                </span>
                                <span className="text-gray-600">
                                  {report.witnessName}
                                </span>
                              </div>
                              <div className="flex justify-between mt-2">
                                <span className="font-medium text-gray-700">
                                  Type of Incident:
                                </span>
                                <span className="text-gray-600">
                                  {report.typeOfIncident}
                                </span>
                              </div>
                              <div className="flex justify-between mt-2">
                                <span className="font-medium text-gray-700">
                                  Desired Action:
                                </span>
                                <span className="text-gray-600">
                                  {report.desiredAction}
                                </span>
                              </div>
                              <div className="flex justify-between mt-2">
                                <span className="font-medium text-gray-700">
                                  Frequency:
                                </span>
                                <span className="text-gray-600">
                                  {report.frequency}
                                </span>
                              </div>
                              <div className="flex justify-between mt-2">
                                <span className="font-medium text-gray-700">
                                  Description of Incident:
                                </span>
                                <span className="text-gray-600">
                                  {report.incidentDescription}
                                </span>
                              </div>
                              <div className="flex justify-between mt-2">
                                <span className="font-medium text-gray-700">
                                  Details of Perpetrator:
                                </span>
                                <span className="text-gray-600">
                                  {report.perpetratorDetails}
                                </span>
                              </div>
                              <div className="flex justify-between mt-2">
                                <span className="font-medium text-gray-700">
                                  Confidentiality Preference:
                                </span>
                                <span className="text-gray-600">
                                  {report.confidentiality}
                                </span>
                              </div>
                              <div className="flex justify-between mt-2">
                                <span className="font-medium text-gray-700">
                                  Severity
                                </span>
                                <span className="text-gray-600">
                                  Low
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* buttons for report status */}
                          <div className="flex justify-between mt-4">
                            <button
                              className={`btn ${
                                report.status === "Report Submit"
                                  ? "btn-info"
                                  : ""
                              }`}
                            >
                              Severity{" "}
                              <input
                                type="checkbox"
                                className="toggle toggle-info"
                                defaultChecked
                              />
                            </button>
                            <button
                              className={`btn ${
                                report.status === "In Progress"
                                  ? "btn-warning"
                                  : ""
                              }`}
                            >
                              In Progress{" "}
                              <input
                                type="checkbox"
                                className="toggle toggle-info"
                                defaultUnchecked
                              />
                            </button>
                            <button
                              className={`btn ${
                                report.status === "Reviewed"
                                  ? "btn-success"
                                  : ""
                              }`}
                            >
                              Reviewed{" "}
                              <input
                                type="checkbox"
                                className="toggle toggle-info"
                                defaultUnchecked
                              />
                            </button>
                            <button
                              className={`btn ${
                                report.status === "Action Taken"
                                  ? "btn-error"
                                  : ""
                              }`}
                            >
                              Action Taken{" "}
                              <input
                                type="checkbox"
                                className="toggle toggle-info"
                                defaultUnchecked
                              />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-4">No reports found.</div>
          )}
        </div>
      </div>
      <Toaster />
      <Footer />
    </>
  );
}

export default SubmitToAdmin;
