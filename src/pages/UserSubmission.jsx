import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { UserData } from '../context/UserContext';

function UserSubmission() {
    const {isAuth,isAdmin}=UserData();
  return (
    <>
    <Navbar isAuth={isAuth} isAdmin={isAdmin}/>

    <Footer/>
    </>
  )
}

export default UserSubmission