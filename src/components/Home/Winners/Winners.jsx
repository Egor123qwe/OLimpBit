import React from 'react'
import Window from '../../../HOC/Window/window';
import Calculator from '../../../Images/Calculator.png'
import Content from './Content/Content';
import s from './Winners.module.css'

const Winners = (props) => {

    let height = !props.ColapsItem[5] ? "89vh" : "500px";

    return (
        <div onClick={props.onClick}>
            <Window isNotNavbar = {props.isNotNavbar} Top={"10%"} Left={"30%"} className={props.className} ColapsItem={ props.ColapsItem } Id={props.Id} SelectedItem={ props.SelectedItem } SetSelectedItem={ props.SetSelectedItem } 
            ContentComponent = { <div style={ height = {height} } className={s.content}>{<Content colaps={props.ColapsItem[5]}/> }</div> } 
            WindowName={'Зал славы'} MainButtons={[1, 1, 1]} WindowIcon={Calculator}
            width = {!props.ColapsItem[5] ? (props.isNotNavbar ? "97.5%" : "99.5%") : "50%" } SetColapsItem = { props.SetColapsItem }
        />
        </div>
    );
}


export default Winners;