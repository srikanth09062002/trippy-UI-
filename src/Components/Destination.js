import React from 'react'
import './Destination.css'
import DestinationData from './DistinationData'
import red from '../assets/red.jpg'
import tian from '../assets/tian.jpg'
import jack from '../assets/jack.jpg'
import aders from '../assets/anders.jpg'


function Destination() {
  return (
    <div className='destination'>
        <h1>Popular Destinations</h1>
     <p>Tours give you the opportunity to see a lot,within a time frame</p> 
     
     <DestinationData
     className='first-des'
     heading='Himeji Castle'
     text='Himeji Castle is the largest castle in Japan.[2] It serves as an excellent example of prototypical Japanese castle architecture, containing many of the defensive and architectural features associated with Japanese castles.[7] The curved walls of Himeji Castle are sometimes said to resemble giant fans (扇子, sensu), but the principal materials used in the structures are stone and wood.[5][6] Feudal family crests (家紋, kamon) are installed throughout the architecture of the building, signifying the various lords that inhabited the castle throughout its history.[5]'
     img1={red}
     img2={tian}/>


<DestinationData
     className='first-des'
     heading='Manarolo Italy'

     text='Manarola may be the oldest of the towns in the Cinque Terre, with the cornerstone of the church, San Lorenzo, dating from 1338[citation needed]. The local dialect is Manarolese, which is marginally different from the dialects in the nearby area. The name "Manarola" is probably a dialectical evolution of the Latin, "Magna rota". In the Manarolese dialect, this was changed to "Magna roea" which means "large wheel", about the mill wheel in the town. Manarola has a railway station on the Genoa–Pisa railway.'
     img1={jack}
     img2={aders}/>



    </div>
  )
}

export default Destination
