import React from "react"
import s from './Footer.module.css'
import BsuirLogo from '../../../Images/BsuirLogo.png'
import KsisLogo from '../../../Images/KsisLogo.png'
import WindowsLogo from '../../../Images/WindowsLogo.png'

const Footer = (props) => {
    
    return (
        <div className={s.Footer}>
            <button onClick={ () => props.SetStartOpen(!props.isStartOpen) } className={s.StartButton}>
                <img className={s.WindowsLogo} src={ WindowsLogo } />
                <span className={s.WindowsLable}>start</span>
            </button><br/>
            <span className={s.AddInfo}>
                <img className={s.BsuirLogo} src={ BsuirLogo } />
                <img className={s.KsisLogo} src={ KsisLogo } />
                <span className={s.Years}>2014-2022</span>
            </span>
        </div>
    );
}


export default Footer;
