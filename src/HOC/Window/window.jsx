import React from 'react'
import s from './window.module.css'
import Header from './Header/Header';
import Content from './Content/Content';
import { useState, useEffect } from 'react';
import Draggable from 'react-draggable'; 

const Window = (props) => {


    
    let Top = props.ColapsItem[props.Id] ? props.Top : "0vh"
    let Left = props.ColapsItem[props.Id] ? props.Left : "0vh"

    console.log(Top, Left)

    let NameOfStyle = props.Id !== -1 ? (props.className ? s.Window : s.WindowBlur) : (props.className ? s.WindowMobile : s.WindowBlurMobile)
    NameOfStyle = props.MinWitthNone ? (props.className ? s.Window1 : s.WindowBlur1) : NameOfStyle;

    return (
        props.ColapsItem[props.Id] ?
            <Draggable handle=".handle">
                <div className={ props.isNotNavbar ? s.WindowMobile : NameOfStyle } 
                    style={ { top: Top, left: Left, width: props.width, hieght: props.hieght } }>
                    <div className={props.ColapsItem[props.Id] ? "handle" : ""}>
                    <Header class={props.className}
                    ColapsItem={ props.ColapsItem } SetColapsItem={ props.SetColapsItem }
                    Id={props.Id} SelectedItem={ props.SelectedItem } SetSelectedItem={ props.SetSelectedItem }  
                    WindowName={props.WindowName} MainButtons={props.MainButtons} WindowIcon={props.WindowIcon}/>
                    </div>
                    <Content Text={props.Text} ContentComponent = { props.ContentComponent } className={s.Content}/>
                </div>
            </Draggable> :

            <div className={ props.isNotNavbar ? s.WindowMobile : NameOfStyle } 
            style={ { top: Top, left: Left, width: props.width, hieght: props.hieght } }>
            <div className={props.ColapsItem[props.Id] ? "handle" : ""}>
            <Header class={props.className}
            ColapsItem={ props.ColapsItem } SetColapsItem={ props.SetColapsItem }
            Id={props.Id} SelectedItem={ props.SelectedItem } SetSelectedItem={ props.SetSelectedItem }  
            WindowName={props.WindowName} MainButtons={props.MainButtons} WindowIcon={props.WindowIcon}/>
            </div>
            <Content Text={props.Text} ContentComponent = { props.ContentComponent } className={s.Content}/>
        </div>
    );
}


export default Window;