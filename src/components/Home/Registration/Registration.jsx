import React from 'react'
import s from './Registration.module.css'
import Content from './Content/Content';
import Window from '../../../HOC/Window/window';
import Calculator from '../../../Images/Calculator.png'


const Registration = (props) => {

    return (
        <div onClick={props.onClick}>
            <Window Top={"3%"} Left={"30%"} className={props.className} ColapsItem={ props.ColapsItem } 
                    Id={props.Id} SelectedItem={ props.SelectedItem } SetSelectedItem={ props.SetSelectedItem } 
                    ContentComponent = { <div>{ <Content SetMainEl={ props.SetMainEl } SetStartOpen={props.SetStartOpen} 
                                                 SelectedItem={ props.SelectedItem } SetSelectedItem={ props.SetSelectedItem }  
                                                 className={s.content} /> }</div> } 
                    WindowName={'Регистрация'} MainButtons={[1, 2, 1]} WindowIcon={Calculator}
                    width = {"35%"}/>
        </div>
    );
}


export default Registration;