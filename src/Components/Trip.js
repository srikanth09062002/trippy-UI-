import React from 'react'
import'./Trip.css'
import TripData from './TripData'
import trip1 from '../assets/5.jpg' 
import trip2 from '../assets/6.jpg'
import trip3 from '../assets/7.jpg'
function Trip() {
  return (
      <div className='trip'>
      <h1>Reacent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className='tripcard'>
        
      <TripData
      image={trip1}
      heading=' Cathedral, in Christian churches'
      text='Cathedral, in Christian churches that have an episcopal form of church government, the church in which a residential bishop has his official seat or throne, the cathedra. Cathedral churches are of different degrees of dignity. There are cathedral churches of simple diocesan bishops, of archbishops or metropolitans, of primates, patriarchs, and, in the Roman Catholic Church, of the pope. A cathedral church is not necessarily large and magnificent, although most cathedrals have become so. Since the territorial organization of the early church followed that of the Roman Empire, cathedrals from the first were established wherever possible in towns, not in villages. In the early European Middle Ages, the town in which a cathedral church was situated became known as the cathedral city.'
      /> 

<TripData
      image={trip2}
      heading=' Mabul  island'
      text='Mabul (Malay: Pulau Mabul) is a small island near the southeastern coast of Sabah in Malaysia. The island has been a fishing village since the 1970s. After the 1990s, Mabul gained popularity with scuba divers due to its proximity to Sipadan island.[1]

      The island is roughly 15 km north of Sipadan, 0.2km2 in size, and around 2–3m above sea level. It is located on the northwest of a reef that is ~2 km long.
      
      Mabul island is administered as a part of the Semporna, Tawau district
      '
      /> 
      
      <TripData
      image={trip3}
      heading=' E-1027'
      text='E-1027 is a modernist villa in Roquebrune-Cap-Martin, in the Alpes-Maritimes department of France. It was designed and built from 1926-29 by the Irish architect and furniture designer Eileen Gray. 
      L-shaped and flat-roofed with floor-to-ceiling windows and a spiral stairway to the guest room, E-1027 was both open and compact.[1] '
      /> 



      </div>
    </div>
  )
}

export default Trip
