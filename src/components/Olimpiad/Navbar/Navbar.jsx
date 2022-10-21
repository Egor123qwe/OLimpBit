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
                                 to="Direction/Cpp">C++
                        </NavLink>
                    </div>
                    <div className={s.SecondLevelItem}>
                        <NavLink onClick={ () => SetSelectedItem(22) } 
                                 className={SelectedItem === 22 ? s.Coosing : s.Link}  
                                 to="Direction/Java/">Java
                        </NavLink>
                    </div>
                    <div className={s.SecondLevelItem}>
                        <NavLink onClick={ () => SetSelectedItem(23) } 
                                 className={SelectedItem === 23 ? s.Coosing : s.Link}  
                                 to="Direction/Go">Go
                        </NavLink>
                    </div>
                    <div className={s.SecondLevelItem}>
                        <NavLink onClick={ () => SetSelectedItem(24) } 
                                 className={SelectedItem === 24 ? s.Coosing : s.Link}  
                                 to="Direction/Python">Python
                        </NavLink>
                    </div>
                </div>
                 : <></> }   
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
            </div>
        </div>
    );
}


export default Navbar;

