import React from 'react'
import s from './Header.module.css'
import { useNavigate } from 'react-router-dom';

const Header = (props) => {

    const navigte = useNavigate();

    const OnSwitchOffButton = () => {
        if(props.Id !== -1) {
            let copy = [...props.SelectedItem];
            copy[props.Id] = 0;
            props.SetSelectedItem(copy);
        }
        else {
            navigte("/Home");
        }
    } 

    const OnCollapseButton = () => {
        if(props.MainButtons[1] === 1) {
            let copy = [...props.ColapsItem];
            copy[props.Id] = !copy[props.Id];
            props.SetColapsItem(copy);
        }
    }

    return (
        <div className={s.Header}>

            <div className={props.class ? s.MainHeader : s.BlurMainHeader }>
                <div className={s.WindowInfo}>
                    <img src={ props.WindowIcon }/>
                    <span className={s.Lable}>{props.WindowName}</span>
                </div>
                <div className={ props.Id !== -1 ? s.ButtonPack : s.ButtonPackMini }>
                    { props.MainButtons[0] ? 
                    <button className={ s.CollapseButton } onClick={ () => {OnSwitchOffButton()} }></button>
                    : <></> }
                    { props.MainButtons[1] ?     
                    <button onClick={ () => {OnCollapseButton()} } className={ props.MainButtons[1] == 1 ? s.ExpandButton : s.ExpandButtonUseful }></button>
                    : <></> }
                    { props.MainButtons[2] ?
                    <button className={ s.SwitchOffButton } onClick={ () => {OnSwitchOffButton()} }></button>
                    : <></> } 
                </div>
            </div>

            <div className={s.Menu}>
                <span className={s.MenuItem}>File</span>
                <span className={s.MenuItem}>Edit</span>
                <span className={s.MenuItem}>View</span>
            </div>
        </div>
    );
}


export default Header;