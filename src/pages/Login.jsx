import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { UserData } from "../context/UserContext";

function Login() {
  const { isAuth, isAdmin } = UserData();
  const navigate = useNavigate();
  const { loginUser } = UserData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await loginUser(email, password, navigate);
  };

  const handleTestUser = () => {
    // Test user 
    setEmail("jkklm@gmail.com");
    setPassword("password");
  };

  return (
    <>
      <Navbar isAuth={isAuth} isAdmin={isAdmin} />
      <div>
        <div className="hero bg-gray-900 min-h-screen">
          <div className="hero-content flex-col lg:flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold text-slate-50 mb-10">Login</h1>
            </div>
            <div className="card bg-base-100 w-96 max-w-sm shrink-0 shadow-2xl drop-shadow-2xl">
              <form onSubmit={submitHandler} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered"
                    required
                  />
                  <label className="label justify-between">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                    <a
                      href="/signup"
                      className="label-text-alt link link-hover text-gray-700"
                    >
                      Signup
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 space-y-4">
                  <button
                    type="submit"
                    className="btn btn-primary bg-gray-800 text-slate-50 hover:bg-gray-950"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={handleTestUser}
                    className="btn btn-secondary bg-gray-700 text-slate-50 hover:bg-gray-800"
                  >
                    Login as Test User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
