import Crew from "../Crew"
import Image from '../../assets/crew/image-douglas-hurley.webp'

function Comander(){
    const p = ` Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
    and former NASA astronaut. He launched into space for the third time as 
    commander of Crew Dragon Demo-2.`
    return(
        <>
        <Crew image={Image} name = "DOUGLAS HURLEY" position="COMMANDER" about ={p} number = '1' />
        </>
    )
}

export default Comander