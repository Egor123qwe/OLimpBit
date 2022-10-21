import React from 'react'
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.Footer}>
            <div className={s.leftField}><span className={s.lable}>4 object(s)</span></div>
            <div className={s.rightField}></div>
        </div>
    );
}


export default Footer;
