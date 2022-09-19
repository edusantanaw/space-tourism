import Destination from '../Destination'
import image from '../../assets/destination/image-moon.png'

function Moon(){
    const p = ` See our planet as you've never seen it before. A perfect relaxing trip away to help 
    regain perspective and come back refreshed. While you're there, take in some history 
    by visiting the Luna 2 and Apollo 11 landing sites.`

    return(
        <>
            <Destination image = {image} title = "MOON" description={p}  distance="384,400 KM" travel="3 DAYS" />
        </>
    )
}

export default Moon