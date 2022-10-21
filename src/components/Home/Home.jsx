import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Registration from './Registration/Registration';
import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import Error from './Error/Error';
import Olimpiad from '../Olimpiad/Olimpiad';
import { useState } from 'react';
import s from './Home.module.css';
import StartButtonNavbar from './StartButtonNavbar/StartButtonNavbar';


const Home = (props) => {

    let [isStartOpen, SetStartOpen] = useState(false);

    let [SelectedItem, SetSelectedItem] = useState([0,0,0,0]);
    let [ColapsItem, SetColapsItem] = useState([0,1,1,1]);
    let [MainEl, SetMainEl] = useState(-1);

    return (
        <div>
            <Navbar SetMainEl={ SetMainEl } SetStartOpen={SetStartOpen} SelectedItem={ SelectedItem } SetSelectedItem={ SetSelectedItem }/>
            <Footer isStartOpen = { isStartOpen } SetStartOpen={ SetStartOpen }/>

            { SelectedItem[0] === 1 ? <Olimpiad onClick={ () => { SetMainEl(0) } }
                className={MainEl === 0 ? 1 : 0 } SetColapsItem = { SetColapsItem } 
                ColapsItem={ ColapsItem } Id={0} SelectedItem={ SelectedItem } 
                SetSelectedItem={ SetSelectedItem }/> : <></> }

            { SelectedItem[1] === 1 ? <Error onClick={ () => { SetMainEl(1) }} 
                className={MainEl === 1 ? 1 : 0 } ColapsItem={ ColapsItem } Id={1} SelectedItem={ SelectedItem } 
                SetSelectedItem={ SetSelectedItem } Text={'Warning: Объект переполнен...'}/> : <></> }

            { SelectedItem[2] === 1 ? <Registration onClick={ () => { SetMainEl(2) } }
                className={MainEl === 2 ? 1 : 0 } ColapsItem={ ColapsItem } Id={2} SelectedItem={ SelectedItem } 
                SetSelectedItem={ SetSelectedItem } /> : <></> }

            { SelectedItem[3] === 1 ? <Error onClick={ () => { SetMainEl(3) } }
                className={MainEl === 3 ? 1 : 0 } ColapsItem={ ColapsItem } Id={3} SelectedItem={ SelectedItem } 
                SetSelectedItem={ SetSelectedItem } Text={'Error: Данный объект не поддерживается...'}/> : <></> }

            {isStartOpen ? <div className={ s.FirstMenu }><StartButtonNavbar SetStartOpen={ SetStartOpen } 
                SelectedItem={ SelectedItem } SetSelectedItem={ SetSelectedItem } MainEl = { MainEl } 
                SetMainEl={ SetMainEl } Width={props.Width} /></div> : <></>}
        </div>
    );
}


export default Home;