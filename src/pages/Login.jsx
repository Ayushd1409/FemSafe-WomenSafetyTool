import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />
      <div>
        <div className="hero bg-gray-900 min-h-screen">
          <div className="hero-content flex-col lg:flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold text-slate-50 mb-10">Login</h1>
            </div>
            <div className="card bg-base-100 w-96 max-w-sm shrink-0 shadow-2xl drop-shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
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
                <div className="form-control mt-6">
                  <button className="btn btn-primary bg-gray-800 text-slate-50 hover:bg-gray-950">
                    Login
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
