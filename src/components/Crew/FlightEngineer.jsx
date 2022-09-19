import Crew from "../Crew"
import Image from '../../assets/crew/image-anousheh-ansari.webp'


function Engineer(){
    const p = `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
    Ansari was the fourth self-funded space tourist, the first self-funded woman to 
    fly to the ISS, and the first Iranian in space.`
    return(
        <>
        <Crew image={Image} name = "ANOUSHEH ANSARI" position="FLIGHT ENGINEER" about ={p} number = '4'  />
        </>
    )
}

export default Engineer