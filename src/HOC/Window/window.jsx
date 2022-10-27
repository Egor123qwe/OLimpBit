import React from 'react'
import s from './window.module.css'
import Header from './Header/Header';
import Content from './Content/Content';
import { useState } from 'react';

const Window = (props) => {

    const [Position, setPosition] = useState([])

    function drag(event) {
        console.log(1)
    }

    function move(event) {
        console.log(event.pageX, event.pageY)
    }

    let Top = props.ColapsItem[props.Id] ? props.Top : "0vh"
    let Left = props.ColapsItem[props.Id] ? props.Left : "0vh"

    let NameOfStyle = props.Id !== -1 ? (props.className ? s.Window : s.WindowBlur) : (props.className ? s.WindowMobile : s.WindowBlurMobile)
    NameOfStyle = props.MinWitthNone ? (props.className ? s.Window1 : s.WindowBlur1) : NameOfStyle;

    return (
        <div className={ props.isNotNavbar ? s.WindowMobile : NameOfStyle } 
             style={ { top: Top, left: Left, width: props.width, hieght: props.hieght } }>
            <Header move = {move} drag = {drag} class={props.className}
             ColapsItem={ props.ColapsItem } SetColapsItem={ props.SetColapsItem }
             Id={props.Id} SelectedItem={ props.SelectedItem } SetSelectedItem={ props.SetSelectedItem }  WindowName={props.WindowName} MainButtons={props.MainButtons} WindowIcon={props.WindowIcon} className={s.Header}/>
            <Content Text={props.Text} ContentComponent = { props.ContentComponent } className={s.Content}/>
        </div>
    );
}


export default Window;