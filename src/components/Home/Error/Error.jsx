import React from 'react'
import Content from './Content/Content';
import Window from '../../../HOC/Window/window';
import err from '../../../Images/err.svg'

const Error = (props) => {

    return (
        <div onClick={props.onClick}>
        <Window Top={"30%"} Left={"35%"} className={props.className} ColapsItem={ props.ColapsItem }
                Id={props.Id} SelectedItem={ props.SelectedItem } SetSelectedItem={ props.SetSelectedItem } 

        ContentComponent = { <div>{ <Content Id={props.Id} Text = { props.Text } 
                                             SelectedItem={ props.SelectedItem } 
                                            SetSelectedItem={ props.SetSelectedItem } /> }
                             </div> } 
        WindowName={'Warning'} MainButtons={[1, 2, 1]} WindowIcon={err} width = {"20%"} />
        </div>
    );
}


export default Error;