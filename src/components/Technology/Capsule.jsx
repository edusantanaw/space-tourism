import Technology from "../Technology"
import Image from '../../assets/technology/image-space-capsule-portrait.jpg'
import ImageTablet from '../../assets/technology/image-space-capsule-landscape.jpg'

function Capsule(){

    const p =  `  A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
    capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
    you'll spend your time during the flight. It includes a space gym, cinema, 
    and plenty of other activities to keep you entertained.`

    return(
        <>
            <Technology name="SPACE CAPSULE" image={Image} about={p} number='3' image2={ImageTablet}/>
        </>
    )
}

export default Capsule