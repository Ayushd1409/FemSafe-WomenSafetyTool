import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { UserData } from "../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Account({ user }) {
  const { isAuth, isAdmin } = UserData();
  const { setIsAuth, setUser } = UserData();
  const navigate = useNavigate();

  const [reportProgress, setReportProgress] = useState("Report Submit");

  useEffect(() => {
    const fetchedProgress = "Reviewed"; 
    setReportProgress(fetchedProgress);
  }, []);

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };

  return (
    <>
      <Navbar isAuth={isAuth} isAdmin={isAdmin} />
      <div>Account</div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://www.svgrepo.com/show/231264/user.svg"
            className="max-w-sm rounded-lg md:px-8 px-32"
          />
          <div className="px-6">
            <h1 className="text-4xl text-center md:text-start mb-10 md:mb-20">
              My Profile
            </h1>
            <h1 className="text-xl md:mt-0 mt-8">Name - {user.name}</h1>
            <h1 className="text-xl mt-2 ">Email - {user.email}</h1>

            <button className="btn btn-primary mt-6 text-white text-base">
              <MdDashboard /> Enquiry
            </button>

            <button
              onClick={logoutHandler}
              className="btn btn-error mt-6 mx-5 text-white text-base"
            >
              <IoMdLogOut /> LogOut
            </button>
          </div>
        </div>
      </div>

      {/* Submission Progress (Steps) */}
      {user.role=user?<div className="hero bg-base-200 pb-20">
        <ul className="steps">
          <li className={`step ${reportProgress === "Report Submit" ? "step-info" : ""}`}>
            Report Submit
          </li>
          <li className={`step ${reportProgress === "In Progress" ? "step-info" : ""}`}>
            In Progress
          </li>
          <li className={`step ${reportProgress === "Reviewed" ? "step-info" : ""}`}>
            Reviewed
          </li>
          <li className={`step ${reportProgress === "Action Taken" ? "step-error" : ""}`} data-content="?">
            Action taken
          </li>
        </ul>
      </div>:<div></div>}

      <Footer />
    </>
  );
}

export default Account;
