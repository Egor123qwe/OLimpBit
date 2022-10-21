import s from "./Registration.module.css"
import React from 'react'
import Window from '../../../HOC/Window/window';
import Calculator from '../../../Images/Calculator.png'
import Content from "./Content/Content";

const Registration = (props) => {



    return (
        <div className={s.Registration}>
            <Window Top={"0%"} Left={"0%"} className={ true } ColapsItem={ [0] } SetColapsItem={ () => {} } 
            Id={-1} SelectedItem={ [0] } SetSelectedItem={ [0] } 
            MainButtons={[0, 0, 1]} WindowIcon={ Calculator } 
             width = {"97.5%"}
             WindowName={"Регистрация"}
             ContentComponent = {
              <div style={ { height: "60%" } }>
                <Content />
              </div>
            }

            />
        </div>
    );
}


export default Registration;
