import React from 'react'

import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import Workflow from '../components/Workflow'
import ContactForm from '../components/ContactForm'

function Home() {
  return (
    <>
    
    <Hero  />
    <Workflow/>
    <Features/>
    
    <Testimonial/>
    <ContactForm/>
    <Footer/>
    
    </>
  )
}

export default Home