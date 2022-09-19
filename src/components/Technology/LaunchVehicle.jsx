import Technology from "../Technology"
import Image from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import ImageTablet from '../../assets/technology/image-launch-vehicle-landscape.jpg'
function Vehicle(){

    const p =  `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
    payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
    it's quite an awe-inspiring sight on the launch pad!`

    return(
        <>
        
            <Technology name="LAUNCH VEHICLE" image={Image} image2 = {ImageTablet} about={p} number='1'/>
        </>
    )
}

export default Vehicle