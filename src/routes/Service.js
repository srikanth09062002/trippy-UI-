import React from 'react'
import Navabar from '../Components/Navabar'
import Hero from '../Components/Hero'
import aboutImg from '../assets/rc.jpg'
import Footer from '../Components/Footer'
import Trip from '../Components/Trip'
function Service() {
  return (
    <div>
      <Navabar/>
      <Hero 
        cName="hero-mid"
        heroImg ={aboutImg}
        title="Service"
      
       
        btnclass="hide"
       />
       <Trip/>
      <Footer/>
    </div>
  )
}

export default Service
