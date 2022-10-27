import React from 'react'
import s from "./Decktop.module.css"

const DecktopIcon = (props) => {

    return (
        <div className={s.border}>
        <span className={ s.DecktopIcon}>
            <div className={props.isCoosing ? s.CoousingImg : s.Image}><img src={props.image}/></div>
            <span className={props.isCoosing ? s.CoousingText : s.text}>{ props.name }</span>
        </span>
        </div>
    );
}


export default DecktopIcon;
