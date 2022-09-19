import Logo from '../assets/shared/logo.svg'
import { Link } from 'react-router-dom'
import style from './Nav.module.css'
import Menu from '../assets/shared/icon-hamburger.svg'
import { useState } from 'react'
import Close from '../assets/shared/icon-close.svg'

function Nav() {

    const [visible, setVisible] = useState(false)

    const isVisible = () => {
        console.log(visible)
        visible === false ? setVisible(true) : setVisible(false)
    }

    return (
        <header>
            <img src={Logo} alt="" />
            <hr />
            <ul className={visible ? style.show : ''}>
            <img src={Close} alt="close" id={visible ? style.show : ''} className={style.close}  onClick={isVisible} />
                <li><Link to='/'><span>00</span> HOME</Link> </li>
                <li><Link to='/destination'><span>01</span> DESTINATION</Link> </li>
                <li><Link to='/crew'><span>02</span> CREW</Link> </li>
                <li><Link to='/technology'><span>03</span> TECHNOLOGY</Link> </li>
            </ul>
            
                <img src={Menu} alt="menu" className={style.menu} id={visible ? style.show : ''} onClick={isVisible} />
        </header>
    )
}

export default Nav