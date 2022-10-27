import React from 'react'
import s from './Registration.module.css'
import Header from './Header/Header';
import Content from './Content/Content';
import Window from '../../../HOC/Window/window';
import Calculator from '../../../Images/Calculator.png'


const Registration = (props) => {

    return (
        <div onClick={props.onClick}>
            <Window Top={"3%"} Left={"30%"} className={props.className} ColapsItem={ props.ColapsItem } Id={props.Id} SelectedItem={ props.SelectedItem } SetSelectedItem={ props.SetSelectedItem } 
            ContentComponent = { <div>{ <Content SelectedItem={ props.SelectedItem } SetSelectedItem={ props.SetSelectedItem }  /> }</div> } 
            WindowName={'Регистрация'} MainButtons={[1, 2, 1]} WindowIcon={Calculator}
            width = {"35%"}
        />
        </div>
    );
}


export default Registration;