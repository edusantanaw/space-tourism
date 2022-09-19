import Destination from '../Destination'
import image from '../../assets/destination/image-mars.png'

function Mars(){
    const p = `   Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, 
    the tallest planetary mountain in our solar system. It's two and a half times 
    the size of Everest!`

    return(
        <>
            <Destination image = {image} title = "MARS" description={p}  distance="225 MIL. KM" travel="9 MONTHS" />
        </>
    )
}

export default Mars