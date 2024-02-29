import logo from '/vite.svg'
import {useEffect, useState} from "react";
import './Header.css'
function Header() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
       const interval =  setInterval(() => setNow(new Date()), 1000)
       return () => {
           console.log('clinging...')
           clearInterval(interval)
       }
    }, [])


    return (
        <header>
            <img src={logo} alt={'Result'}/>
            {/*<h3>Resul university</h3>*/}
            <span>Time: {now.toLocaleTimeString()}</span>
        </header>
    )
}

export default Header;
