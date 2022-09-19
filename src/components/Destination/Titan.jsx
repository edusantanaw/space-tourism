import Destination from '../Destination'
import image from '../../assets/destination/image-titan.png'

function Titan(){
    const p = ` The only moon known to have a dense atmosphere other than Earth, Titan 
    is a home away from home (just a few hundred degrees colder!). As a 
    bonus, you get striking views of the Rings of Saturn.`

    return(
        <>
            <Destination image = {image} title = "TITAN" description={p}  distance="1.6 BIL. KM" travel="7 YEARS" />
        </>
    )
}

export default Titan