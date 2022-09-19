import style from './Technology.module.css'
import {Link} from 'react-router-dom'

function Technology({image, about, name, number, image2}){
    return(
        <section className={style.tecnlogy}>
            <h1><span>03</span> SPACE LAUNCH 101</h1>
            <img src={image2} alt="launch" id={style.tablet}/>
            <div className={style.informations}>
                <ul>
                    <li className={number === '1'?style.activate : ''}><Link  to='/technology'>1</Link></li>
                    <li className={number === '2'?style.activate : ''}><Link to='/technology/spaceport'>2</Link></li>
                    <li className={number === '3'?style.activate : ''}><Link to='/technology/space-capsule'>3</Link></li>
                </ul>
                <div className={style.content}>
                <div className={style.text}>
                    <span>THE TECHNOLOGY...</span>
                    <h1>{name}</h1>
                    <p>{about}</p>
                </div>
                <img src={image} alt="foto of technology" />
                </div>
            </div>
        </section>
    )
}

export default Technology