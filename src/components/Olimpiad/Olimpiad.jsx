import React, { Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Sponsors from './Sections/Sponsors/Sponsors';
import Stages from './Sections/Stages/Stages';
import Direction from './Sections/Direction/Direction';
import AboutOlimpiad from './Sections/AboutOlimpiad/AboutOlimpiad';
import Navbar from './Navbar/Navbar';
import s from './Olimpiad.module.css'
import Footer from './Footer/Footer';
import GoLang from './Sections/Direction/LangOfProgr/Go/Go';
import Python from './Sections/Direction/LangOfProgr/Python/Python';
import Java from './Sections/Direction/LangOfProgr/Java/Java';
import CppLang from './Sections/Direction/LangOfProgr/Cpp/Cpp';
import StartSection from './Sections/StartSection/StartSection';
import Window from '../../HOC/Window/window';
import ComputerMini from '../../Images/ComputerMini.png'

const Olimpiad = (props) => {

    let height = !props.ColapsItem[0] ? "89vh" : "500px";

    return (
          <div onClick={ props.onClick }>
            <Window Top={"20%"} Left={"35%"} className={props.className} ColapsItem={ props.ColapsItem } SetColapsItem={ props.SetColapsItem } 
            Id={props.Id} SelectedItem={ props.SelectedItem } SetSelectedItem={ props.SetSelectedItem } 
            MainButtons={[1, 1, 1]} WindowIcon={ComputerMini} 
             width = { !props.ColapsItem[0] ? "99.5%" : "50%"}
             WindowName={"Bit-CUP 2022"}
             ContentComponent = {
              <div className = {s.Olimpiad} style={ height = {height} }>
                <Navbar className = {s.Navbar} />
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<Navigate to="StartSection" />} />
                    <Route path='Sponsors/' element={<Sponsors />}/>
    
                    <Route path='Direction/Cpp' element={<CppLang />}/>
                    <Route path='Direction/Java' element={<Java />}/>
                    <Route path='Direction/Python' element={<Python />}/>
                    <Route path='Direction/Go' element={<GoLang />}/>
    
                    <Route path='Stages/' element={<Stages />}/>
                    <Route path='Direction/' element={<Direction />}/>
                    <Route path='AboutOlimpiad/' element={<AboutOlimpiad />}/>
                    <Route path='StartSection/' element={<StartSection />}/>
                  </Routes>
                </Suspense>
                <Footer />
              </div>
            }

            />
            </div>
    );
}


export default Olimpiad;
