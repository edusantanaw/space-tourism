import {Link} from 'react-router-dom'
import style from './Destination.module.css'



function Destination({image, title, description, distance, travel}){

    return(
        <section className={style.destination}>
            <div className={style.pick}>
                <p><span>01</span> PICK YOUR DESTINATION</p>
                <img src={image} alt="moon" />
            </div>
            <div className={style.moon}>
                <ul>
                    <li className={title === 'MOON'? style.active: ''}><Link to = '/destination' >MOON</Link></li>
                    <li className={title === 'MARS'? style.active: ''}><Link to = '/destination/mars' >MARS</Link></li>
                    <li className={title === 'EUROPA'? style.active: ''}><Link to = '/destination/europa' >EUROPA</Link></li>
                    <li className={title === 'TITAN'? style.active: ''}><Link to = '/destination/titan' >TITAN</Link></li>
                </ul>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className={style.distance}>
                    <div>
                     <p>AVG.DISTANCE</p>
                    <span>{distance}</span>
                    </div>
                    <div>   
                    <p>EST. TRAVEL TIME</p>
                    <span>{travel}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Destination