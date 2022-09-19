import style from './Home.module.css'
import {Link} from 'react-router-dom'


function Home() {

    return (
        <section className={style.home}>
            <div className={style.details}>
                <span> SO, YOU WANT TO TRAVEL TO </span>
                <h1>SPACE</h1>
                <p>
                    Let's face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we'll give you a truly out of this world experience!
                </p>
            </div>
            <Link to= '/destination'>
            <div className={style.explore}>
                <span>
                    EXPLORE
                </span>
            </div>
            </Link>
           
        </section>
    )
}

export default Home;