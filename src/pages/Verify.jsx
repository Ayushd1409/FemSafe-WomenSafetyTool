import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
import { UserData } from '../context/UserContext';

function Verify() {
  const {isAuth,isAdmin} = UserData();
  const[otp, setOtp] = useState();
  const {btnLoading, verifyOtp} = UserData()
  const navigate = useNavigate();

  const submitHandler=async(e)=>{
    e.preventDefault()
    await verifyOtp(Number(otp),navigate)
  }
  return (
    <>
    <Navbar isAuth={isAuth} isAdmin={isAdmin}/>
    <div className="hero bg-slate-50 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="text-center lg:text-left md:px-16 px-0 ">
            <h1 className="text-5xl font-bold">Verify Account</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl shrink-0 md:mt-0 mt-7">
            <form onSubmit={submitHandler} className="card-body">
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">OTP</span>
                </label>
                <input
                  type="number"
                   value={otp}
                   onChange={(e) => setOtp(e.target.value)}
                  placeholder="enter otp"
                  className="input input-bordered"
                  required
                />
                <label className="label mt-8">
                  <a href="#" className="label-text-alt flex justify-between w-full">
                    
                    {/* <Link to='/login'> */}
                      <span className="cursor-pointer underline text-gray-900 hover:text-gray-800">Back to Login</span>
                    {/* </Link>    */}
                                   </a>
                </label>
              </div>
              <div className="form-control">
                <button  type="submit" className="btn bg-slate-950 text-white hover:bg-slate-900">
                    Verify
                {/* disabled={btnLoading} */}
                {/* {btnLoading ? "Please Wait..." : "Verify"} */}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Verify