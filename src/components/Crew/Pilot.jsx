import Crew from "../Crew"
import Image from '../../assets/crew/image-victor-glover.webp'


function Pilot(){
    const p = ` Pilot on the first operational flight of the SpaceX Crew Dragon to the 
    International Space Station. Glover is a commander in the U.S. Navy where 
    he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
    station systems flight engineer. `
    return(
        <>
        <Crew image={Image} name = "VICTOR GLOVER" position="PILOT" about ={p} number = '3' />
        </>
    )
}

export default Pilot