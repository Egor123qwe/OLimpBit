import React from 'react';
import s from "./StartButtonNavbar.module.css"
import Minesweeper from "./../../../Images/Navbar1/Minesweeper.svg"
import Helpbook from "./../../../Images/Navbar1/Helpbook.svg"
import ProgramFolder from "./../../../Images/Navbar1/ProgramFolder.svg"
import Search from "./../../../Images/Navbar1/Search.svg"
import Settings from "./../../../Images/Navbar1/Settings.svg"
import Turn from "./../../../Images/Navbar1/Turn.svg"
import TurnOff from "./../../../Images/Navbar1/TurnOff.svg"
import Calculator from "./../../../Images/Navbar1/Calculator.svg"
import Notepad from "./../../../Images/Navbar1/Notepad.svg"
import Paint from "./../../../Images/Navbar1/Paint.svg"
import { useState } from 'react';

const StartButtonNavbar = (props) => {

    let [CoosingFirstItem, SetCoosingFirstItem] = useState(0);
    let [CoosingSecondItem, SetCoosingSecondItem] = useState(0);

    function onChooseFirst(el) {
        if(CoosingFirstItem === el) {
            if(el !== 1) {
                let copy = [...props.SelectedItem]
                copy[3] = 1;
                props.SetSelectedItem(copy);
                props.SetMainEl(3)
                props.SetStartOpen(false)
            }
        }
        else {
            SetCoosingFirstItem(el)
        }
    }

    function onPlay(el) {
        if(CoosingFirstItem === el) {
                let copy = [...props.SelectedItem]
                copy[4] = 1;
                props.SetSelectedItem(copy);
                props.SetMainEl(4)
                props.SetStartOpen(false)
        }
        else {
            SetCoosingFirstItem(el)
        }
    }

    function onChooseSecond(el) {
        if(CoosingSecondItem === el) {
                let copy = [...props.SelectedItem]
                copy[3] = 1;
                props.SetSelectedItem(copy);
                props.SetMainEl(3)
                props.SetStartOpen(false)
        }
        else {
            SetCoosingSecondItem(el)
        }
    }

    return (
        <div className={s.FirstNavbar}>
            <div onClick={() => onChooseFirst(1)} mouseover={() => onChooseFirst(1)} className={CoosingFirstItem === 1 ? s.FirstIconsCoosing : s.FirstIcons}>
                <img className={s.FirstIconsImage} src={ProgramFolder}/>
                <span className={ CoosingFirstItem === 1 ? s.TextCoosing : s.Text }>Program</span>
                <img className={s.FirstIconsTurn} src={Turn}/>
            </div>
            <div onClick={() => onPlay(2)} className={CoosingFirstItem === 2 ? s.FirstIconsCoosing : s.FirstIcons}>
                <img className={s.FirstIconsImage} src={Minesweeper}/>
                <span className={ CoosingFirstItem === 2 ? s.TextCoosing : s.Text }>Minesweeper</span>
            </div>
            <div onClick={() => onChooseFirst(3)} className={CoosingFirstItem === 3 ? s.FirstIconsCoosing : s.FirstIcons}>
                <img className={s.FirstIconsImage} src={Search}/>
                <span className={ CoosingFirstItem === 3 ? s.TextCoosing : s.Text }>Find</span>
            </div>
            <div onClick={() => onChooseFirst(4)} className={CoosingFirstItem === 4 ? s.FirstIconsCoosing : s.FirstIcons}>
                <img className={s.FirstIconsImage} src={Helpbook}/>
                <span className={ CoosingFirstItem === 4 ? s.TextCoosing : s.Text }>Help</span>
            </div>
            <div onClick={() => onChooseFirst(5)} className={CoosingFirstItem === 5 ? s.FirstIconsCoosing : s.FirstIcons}>
                <img className={s.FirstIconsImage} src={Settings}/>
                <span className={ CoosingFirstItem === 5 ? s.TextCoosing : s.Text }>Run</span>
            </div>
            <div onClick={() => onChooseFirst(6)} className={CoosingFirstItem === 6 ? s.FirstIconsCoosing : s.FirstIcons}>
                <img className={s.FirstIconsImage} src={TurnOff}/>
                <span className={ CoosingFirstItem === 6 ? s.TextCoosing : s.Text }>Shut down</span>
            </div>
            {CoosingFirstItem === 1 ? 
                <div className={props.Width >= 1000 ? s.SecondNavbar : s.SecondNavbarMini}>
                    <div onClick={() => onChooseSecond(1)} className={ CoosingSecondItem === 1 ? s.SecondIconsCoosing : s.SecondIcons }>
                        <img className={s.SecondIconsImage} src={Calculator}/>
                        <span className={ CoosingSecondItem === 1 ? s.Text2Coosing : s.Text2 }>Calculator</span>
                    </div>
                    <div onClick={() => onChooseSecond(2)} className={ CoosingSecondItem === 2 ? s.SecondIconsCoosing : s.SecondIcons }>
                        <img className={s.SecondIconsImage} src={Paint}/>
                        <span className={ CoosingSecondItem === 2 ? s.Text2Coosing : s.Text2 }>Paint</span>
                    </div>
                    <div onClick={() => onChooseSecond(3)} className={ CoosingSecondItem === 3 ? s.SecondIconsCoosing : s.SecondIcons }>
                        <img className={s.SecondIconsImage} src={Notepad}/>
                        <span className={ CoosingSecondItem === 3 ? s.Text2Coosing : s.Text2 }>Notepad</span>
                    </div>
                </div>
             : null}
        </div>
    );
}


export default StartButtonNavbar;