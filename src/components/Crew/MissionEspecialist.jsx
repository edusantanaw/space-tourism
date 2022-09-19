import Crew from "../Crew"
import Image from '../../assets/crew/image-mark-shuttleworth.webp'


function MissionEspecialist(){
    const p = ` Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
    the Linux-based Ubuntu operating system. Shuttleworth became the first South 
    African to travel to space as a space tourist.`
    return(
        <>
        <Crew image={Image} name = "MARK SHUTTLEWORTH" position="MISSION ESPECIALIST" about ={p} number = '2' />
        </>
    )
}

export default MissionEspecialist