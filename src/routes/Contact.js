import React from 'react'
import Navabar from '../Components/Navabar'
import Hero from '../Components/Hero'
import aboutImg from '../assets/danie.jpg'
import Footer from '../Components/Footer'
import Contactform from '../Components/Contactform'
function Contact() {
  return (
    <div>
      
      <Navabar/>
      <Hero 
        cName="hero-mid"
        heroImg ={aboutImg}
        title="Contact"
      
       
        btnclass="hide"
       />
       <Contactform/>
       <Footer/>
    </div>
  )
}

export default Contact
