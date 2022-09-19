import { Link } from "react-router-dom"
import style from  './Crew.module.css'

function Crew({position, name, about, image, number}){
        
    return(
        <section className={style.crew}>
            <div className={style.description}>
                <div className={style.mobile}>
                <p><span>02</span> MEET YOUR CREW</p>
                    <img src={image} alt="image mobile" />
                </div>
                <div className={style.info}>
                <span>{position}</span>
                <h1>{name}</h1>
                <p>{about}</p>
                </div>
                <ul>
                    <li className={number === '1'? style.active: ''}><Link to='/crew'></Link></li>
                    <li className={number === '2'? style.active: ''}><Link to='/crew/mark'></Link></li>
                    <li className={number === '3'? style.active: ''}><Link to='/crew/victor'></Link></li>
                    <li className={number === '4'? style.active: ''}><Link to="/crew/anousheh"></Link></li>
                </ul>
            </div>
        <img src={image} alt="avatar" />
        </section>
    )
}

export default Crew