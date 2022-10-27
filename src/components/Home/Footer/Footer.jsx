import React from "react"
import s from './Footer.module.css'
import BsuirLogo from '../../../Images/BsuirLogo.png'
import KsisLogo from '../../../Images/KsisLogo.png'
import WindowsLogo from '../../../Images/WindowsLogo.png'
import Vk from '../../../Images/Vk.png'

const Footer = (props) => {
    
    return (
        <div className={s.Footer}>
            <div onClick={ () => props.SetStartOpen(!props.isStartOpen) } className={s.StartButton}>
                <img className={s.WindowsLogo} src={ WindowsLogo } />
                <span className={s.WindowsLable}>start</span>
            </div><br/>
            <span className={s.AddInfo}>
                <a target="_blank" href='https://bsuir.by'><img className={s.BsuirLogo} src={ BsuirLogo } /></a>
                <a target="_blank" href='https://fksis.bsuir.by'><img className={s.KsisLogo} src={ KsisLogo } /></a>
                <a target="_blank" href='https://vk.com/bitcupby'><img className={s.Vk} src={ Vk } /></a>
                <span className={s.Years}>2014-2022</span>
            </span>
        </div>
    );
}


export default Footer;
