import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SubmitToAdmin from "./pages/SubmitToAdmin";
import Verify from "./pages/Verify";
import Account from "./pages/Account";
import { UserData } from "./context/UserContext";
import Loading from "./components/Loading";
import UserSubmission from "./pages/UserSubmission";


function App() {
  const [count, setCount] = useState(0);
  const { isAuth,user,loading } = UserData();
  return (
    <>
      {loading?(<Loading/>):(<BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={isAuth?<Home/>:<Login />} />
            <Route path="/signup" element={isAuth?<Home/>:<Signup />} />
            <Route path="/contact" element={isAuth?<Contact />:<Login/>} />
            <Route path="/submit" element={<SubmitToAdmin />} />
            <Route path="/verify" element={isAuth?<Home/>:<Verify />} />
            <Route path="/usersubmit" element={isAuth?<UserSubmission />:<Login/>} />
            <Route path="/account" element={isAuth?<Account user={user} /> : <Login/>} />

          </Route>
        </Routes>
      </BrowserRouter>)}
    
    </>
  );
}

export default App;
