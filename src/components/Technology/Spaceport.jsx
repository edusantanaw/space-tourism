import Technology from "../Technology"
import Image from '../../assets/technology/image-spaceport-portrait.jpg'
import ImageTablet from '../../assets/technology/image-spaceport-landscape.jpg'


function Spaceport(){

    const p =  ` A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
    by analogy to the seaport for ships or airport for aircraft. Based in the 
    famous Cape Canaveral, our spaceport is ideally situated to take advantage 
    of the Earth's rotation for launch.`

    return(
        <>
            <Technology name="SPACEPORT" image={Image} about={p} number='2' image2={ImageTablet} />
        </>
    )
}

export default Spaceport