import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import s from './Navbar.module.css'
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {

    let Links = 0;

    const location = useLocation();

    if ( location.pathname === "/Home/AboutOlimpiad" ) {
        Links = 1
    }
    else if ( location.pathname === "/Home/Direction" ) {
        Links = 2
    }
    else if ( location.pathname === "/Home/Stages" ) {
        Links = 3
    }
    else if ( location.pathname === "/Home/Sponsors" ) {
        Links = 4
    }

    let [SelectedItem, SetSelectedItem] = useState(Links);

    useEffect(() => {
        if(Links != 0) {
            SetSelectedItem(Links) 
        }
        }, [location])

    return (
        <div className={s.Navbar}>
            <div className={s.Item}>
                <NavLink onClick={ () => SetSelectedItem(1) } 
                         className={SelectedItem === 1 ? s.Coosing : s.Link} 
                         to="AboutOlimpiad">Об олимпиаде
                </NavLink>
            </div>


            <div className={s.Item}>
                <NavLink  onClick={ () => SetSelectedItem(2) } 
                          className={SelectedItem === 2 ? s.Coosing : s.Link}  
                          to="Direction">Направления
                </NavLink>
                { String(SelectedItem)[0] === '2' ?
                <div className={s.SecondLevelItems}>
                    <div className={s.SecondLevelItem}>
                        <NavLink onClick={ () => SetSelectedItem(21) } 
                                 className={SelectedItem === 21 ? s.Coosing : s.Link}  
                                 to="Direction/SoftAuto">
                                Software Automation Testing
                        </NavLink>
                    </div>
                    <div className={s.SecondLevelItem}>
                        <NavLink onClick={ () => SetSelectedItem(22) } 
                                 className={SelectedItem === 22 ? s.Coosing : s.Link}  
                                 to="Direction/Dotnet/">
                                Программирование на .NET
                        </NavLink>
                    </div>
                    <div className={s.SecondLevelItem}>
                        <NavLink onClick={ () => SetSelectedItem(23) } 
                                 className={SelectedItem === 23 ? s.Coosing : s.Link}  
                                 to="Direction/DesignAlg">
                                Дизайн, оптимизация и<br />верификация алгоритмов
                        </NavLink>
                    </div>
                    <div className={s.SecondLevelItem}>
                        <NavLink onClick={ () => SetSelectedItem(24) } 
                                 className={SelectedItem === 24 ? s.Coosing : s.Link}  
                                 to="Direction/Web">
                                Web Development
                        </NavLink>
                    </div>
                    <div className={s.SecondLevelItem}>
                        <NavLink onClick={() => SetSelectedItem(25)}
                            className={SelectedItem === 25 ? s.Coosing : s.Link}
                            to="Direction/SoftweatDev">
                                Проектирование архитектуры<br />программного продукта
                        </NavLink>
                    </div>
                    <div className={s.SecondLevelItem}>
                        <NavLink onClick={() => SetSelectedItem(26)}
                            className={SelectedItem === 26 ? s.Coosing : s.Link}
                            to="Direction/Java">
                                Java разработка
                        </NavLink>
                    </div>
                </div>
                 : null }   
            </div>


            <div className={s.Item}>
                <NavLink onClick={ () => SetSelectedItem(3) } 
                         className={SelectedItem === 3 ? s.Coosing : s.Link}  
                         to="Stages">Этапы
                </NavLink>
            </div>
            <div className={s.Item}>
                <NavLink onClick={ () => SetSelectedItem(4) } 
                         className={SelectedItem === 4 ? s.Coosing : s.Link}  
                         to="Sponsors">Спонсоры
                </NavLink>
                { String(SelectedItem)[0] === '4' ?
                <div className={s.SecondLevelItems}>
                    <div className={s.SecondLevelItem}>
                        <NavLink onClick={ () => SetSelectedItem(41) } 
                                 className={SelectedItem === 41 ? s.Coosing : s.Link}  
                                 to="Sponsors/Softteco">SoftTeco
                        </NavLink>
                    </div>
                    <div className={s.SecondLevelItem}>
                        <NavLink onClick={ () => SetSelectedItem(42) } 
                                 className={SelectedItem === 42 ? s.Coosing : s.Link}  
                                 to="Sponsors/Yandex">Yandex
                        </NavLink>
                    </div>
                    <div className={s.SecondLevelItem}>
                        <NavLink onClick={ () => SetSelectedItem(43) } 
                                 className={SelectedItem === 43 ? s.Coosing : s.Link}  
                                 to="Sponsors/LeverX">LeverX
                        </NavLink>
                    </div>
                    <div className={s.SecondLevelItem}>
                        <NavLink onClick={ () => SetSelectedItem(44) } 
                                 className={SelectedItem === 44 ? s.Coosing : s.Link}  
                                 to="Sponsors/Ciir">ЦИИР
                        </NavLink>
                    </div>
                    
                </div>
                 : null }   
            </div>
        </div>
    );
}


export default Navbar;

