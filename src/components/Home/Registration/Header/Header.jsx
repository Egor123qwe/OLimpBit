import React from 'react'
import s from './Header.module.css'
import Calculator from '../../../../Images/Calculator.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className={s.Header}>
            <div className={s.MainHeader}>
                <img src={ Calculator }/>
                <span className={s.Lable}>Регстрация</span>
                <div className={ s.ButtonPack }>
                    <button className={ s.CollapseButton } onClick={ async event => { navigate("/Home") }}></button>
                    <button className={ s.ExpandButton }></button>
                    <button className={ s.SwitchOffButton } onClick={ async event => { navigate("/Home") }}></button>
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