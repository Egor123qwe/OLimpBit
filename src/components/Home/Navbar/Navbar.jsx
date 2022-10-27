import React from 'react'
import DecktopIcon from './DesktopIcon/DecktopIcon';
import FolderIcon from "../../../Images/FolderIcon.png"
import Timetable from "../../../Images/End/Timetable.png"
import WordPad from "../../../Images/End/WordPad.png"
import handshake from "../../../Images/End/handshake.png"
import Quest from "../../../Images/End/Quest.png"
import s from "./Navbar.module.css";
import { useState } from 'react';
import Bin from "../../../Images/Bin.png"
import Kubok from "../../../Images/Kubok.png"
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {

    const navigate = useNavigate();

    let [SelectedItem, SetSelectedItem] = useState(0);

    function newChoose(el, link, id) {
        props.SetStartOpen(false)
        if(el === SelectedItem) {
            let copy = [...props.SelectedItem]
            copy[Number((String(el)[0]))-1] = 1;
            props.SetSelectedItem(copy);
            navigate(link)
            props.SetMainEl(id)
        }
        else { 
            SetSelectedItem(el);
        }
    }

    return (
        <div>
        <div className={ s.Navbar }>
            <div onClick={ () => newChoose(11, "AboutOlimpiad", 0) }>
                <DecktopIcon isCoosing={ SelectedItem === 11 } image = { Quest } name = {"Об олимпиаде"}/>
            </div>
            <div onClick={ () => newChoose(12, "Direction", 0) }>
                <DecktopIcon isCoosing={ SelectedItem === 12 } image = { FolderIcon } name = {"Направления"}/>
            </div>
            <div onClick={ () => newChoose(13, "Stages", 0) }>
                <DecktopIcon isCoosing={ SelectedItem === 13 } image = { Timetable } name = {"Этапы"}/>
            </div>
            <div onClick={ () => newChoose(14, "Sponsors", 0) }>
                <DecktopIcon isCoosing={ SelectedItem === 14 } image = { handshake } name = {"Партнёры олимпиады"}/>
            </div>
        </div>
        <div className={s.Registr}  onClick={ () => newChoose(35, "", 2) }>
            <DecktopIcon isNotInRow={true} isCoosing={ SelectedItem === 35 } image = { WordPad } name = {"Регстрация"}/>
        </div>
        <div className={s.Kubok} onClick={ () => newChoose(61, "", 5) }>
                <DecktopIcon isCoosing={ SelectedItem === 61 } image = { Kubok } name = {"Зал славы"}/>
        </div>
        <div className={s.Bin} onClick={ () => newChoose(21, "", 1) }>
                <DecktopIcon isCoosing={ SelectedItem === 21 } image = { Bin } name = {"Корзина"}/>
            </div>
        </div>
    );
}


export default Navbar;
