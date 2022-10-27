import React from 'react'
import Content from './Content/Content';
import Window from '../../../HOC/Window/window';
import MinesweeperImg from '../../../Images/Navbar1/Minesweeper.svg'

const Minesweeper = (props) => {

    return (
        <div onClick={props.onClick}>
        <Window width = { props.isNotNavbar ? "97vw" : "50vh"} Top={"20%"} Left={"35%"} className={props.className} ColapsItem={ props.ColapsItem }
               MinWitthNone = {1} Id={props.Id} SelectedItem={ props.SelectedItem } SetSelectedItem={ props.SetSelectedItem } 

        ContentComponent = { <div>{ <Content Id={props.Id} Text = { props.Text } 
                                             SelectedItem={ props.SelectedItem } 
                                             SetSelectedItem={ props.SetSelectedItem } /> }
                             </div> } 
        WindowName={'Minesweeper'} MainButtons={[1, 2, 1]} WindowIcon={MinesweeperImg} />
        </div>
    );
}


export default Minesweeper;