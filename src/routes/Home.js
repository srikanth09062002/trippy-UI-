import React from 'react'
import Navabar from '../Components/Navabar'
import Hero from '../Components/Hero'
import Destination from '../Components/Destination'
import Trip from '../Components/Trip'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
       <Navabar/>
       <Hero 
        cName="hero"
        heroImg ="https://images.unsplash.com/photo-1716466908535-700127831f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
        title="Your Journey Your Story"
        text=" Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnclass="show"
       />
      
       <Destination/>
       <Trip/>
       <Footer/>
      

        
    </div>
  )
}

export default Home
