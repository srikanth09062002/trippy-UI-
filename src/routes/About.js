import React from 'react'
import Hero from '../Components/Hero'
import aboutImg from '../assets/tim.jpg'
import Navabar from '../Components/Navabar'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'

function About() {
  return (
    <div>
     <Navabar/>
      <Hero 
        cName="hero-mid"
        heroImg ={aboutImg}
        title="About"
      
       
        btnclass="hide"
       />
       <AboutUs/>
       <Footer/>
      
    </div>
  )
}

export default About
