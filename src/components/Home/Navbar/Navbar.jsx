import React from 'react'
import DecktopIcon from './DesktopIcon/DecktopIcon';
import FolderIcon from "../../../Images/FolderIcon.png"
import MyComputerIcon from "../../../Images/MyComputer.png"
import s from "./Navbar.module.css";
import { useState } from 'react';
import Bin from "../../../Images/Bin.png"
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
        <div className={ s.Navbar }>
            <div onClick={ () => newChoose(11, "AboutOlimpiad", 0) }>
                <DecktopIcon isCoosing={ SelectedItem === 11 } image = { MyComputerIcon } name = {"Об олимпиаде"}/>
            </div>
            <div onClick={ () => newChoose(12, "Direction", 0) }>
                <DecktopIcon isCoosing={ SelectedItem === 12 } image = { FolderIcon } name = {"Направления"}/>
            </div>
            <div onClick={ () => newChoose(13, "Stages", 0) }>
                <DecktopIcon isCoosing={ SelectedItem === 13 } image = { FolderIcon } name = {"Этапы"}/>
            </div>
            <div onClick={ () => newChoose(14, "Sponsors", 0) }>
                <DecktopIcon isCoosing={ SelectedItem === 14 } image = { FolderIcon } name = {"Спонсоры"}/>
            </div>
            <div onClick={ () => newChoose(35, "", 2) }>
                <DecktopIcon isCoosing={ SelectedItem === 35 } image = { FolderIcon } name = {"Регстрация"}/>
            </div>
            <div onClick={ () => newChoose(21, "", 1) }>
                <DecktopIcon isCoosing={ SelectedItem === 21 } image = { Bin } name = {"БНТУ"}/>
            </div>
        </div>
    );
}


export default Navbar;
