import Destination from '../Destination'
import image from '../../assets/destination/image-europa.png'

function Europa(){
    const p = `  The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
    winter lover's dream. With an icy surface, it's perfect for a bit of 
    ice skating, curling, hockey, or simple relaxation in your snug 
    wintery cabin.`

    return(
        <>
            <Destination image = {image} title = "EUROPA" description={p}  distance="628 MIL. KM" travel="3 YEARS" />
        </>
    )
}

export default Europa