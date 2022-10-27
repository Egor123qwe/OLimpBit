import React, { Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Sponsors from './Sections/Sponsors/Sponsors';
import Stages from './Sections/Stages/Stages';
import Direction from './Sections/Direction/Direction';
import AboutOlimpiad from './Sections/AboutOlimpiad/AboutOlimpiad';
import Navbar from './Navbar/Navbar';
import s from './Olimpiad.module.css'
import Footer from './Footer/Footer';
import GoLang from './Sections/Direction/LangOfProgr/Go/Java';
import Python from './Sections/Direction/LangOfProgr/Python/Web';
import Java from './Sections/Direction/LangOfProgr/Go/Java';
import SoftweatDev from './Sections/Direction/LangOfProgr/Java/SotweatDev';
import StartSection from './Sections/StartSection/StartSection';
import Window from '../../HOC/Window/window';
import ComputerMini from '../../Images/ComputerMini.png'
import Yandex from './Sections/Sponsors/Sponsor/Yandex/Yandex';
import Softteco from './Sections/Sponsors/Sponsor/Softteco/Softteco';
import { useParams } from "react-router";
import Footer1 from './Footer1/Footer1';
import Leverx from './Sections/Sponsors/Sponsor/LeverX/LeverX';
import Ciir from './Sections/Sponsors/Sponsor/Ciir/Ciir';
import Web from './Sections/Direction/LangOfProgr/Python/Web';
import DesignAlg from './Sections/Direction/LangOfProgr/Cpp/DesignAlg';
import Dotnet from './Sections/Direction/LangOfProgr/Dotnet/Dotnet';
import SoftAuto from './Sections/Direction/LangOfProgr/SoftAuto/SoftAuto';

const Olimpiad = (props) => {

    const hist = useParams();
    let NewFooter = (hist['*'] === 'Sponsors/Yandex' || 
                     hist['*'] === 'Sponsors/Ciir' ||
                     hist['*'] === 'Sponsors/LeverX' ||
                     hist['*'] === 'Sponsors/Softteco') 
                     ? true : false

    let height = !props.ColapsItem[0] ? "89vh" : "500px";
    if(props.isNotNavbar) { height = '96vh' }

    return (
          <div onClick={ props.onClick }>
            <Window isNotNavbar = { props.isNotNavbar } Top={"10%"} Left={"35%"} ColapsItem={ props.ColapsItem } SetColapsItem={ props.SetColapsItem } 
            Id={props.Id} SelectedItem={ props.SelectedItem } SetSelectedItem={ props.SetSelectedItem } 
            MainButtons={[1, 1, 1]} WindowIcon={ComputerMini}
             width = { !props.ColapsItem[0] ? (props.isNotNavbar ? "97.5%" : "99.5%") : "50%" } className={props.className} 
             WindowName={"Bit-CUP 2022"}
             ContentComponent = {
              <div className = {!props.isNotNavbar ? s.Olimpiad : (!NewFooter ? s.OlimpiadMobile : s.OlimpiadMobile1)} 
              style={ height = {height} }>
                {!props.isNotNavbar ? <Navbar className = {s.Navbar} /> : <></>}
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<Navigate to="StartSection" />} />
    
                    <Route path='Direction/SoftweatDev' element={<SoftweatDev />}/>
                    <Route path='Direction/Java' element={<Java />}/>
                    <Route path='Direction/Web' element={<Web />}/>
                    <Route path='Direction/DesignAlg' element={<DesignAlg />}/>
                    <Route path='Direction/SoftAuto' element={<SoftAuto />}/>
                    <Route path='Direction/Dotnet' element={<Dotnet />}/>

                    <Route path='Sponsors/Softteco' element={<Softteco isNotNavbar={props.isNotNavbar}/>}/>
                    <Route path='Sponsors/Yandex' element={<Yandex isNotNavbar={props.isNotNavbar}/>}/>
                    <Route path='Sponsors/LeverX' element={<Leverx isNotNavbar={props.isNotNavbar}/>}/>
                    <Route path='Sponsors/Ciir' element={<Ciir isNotNavbar={props.isNotNavbar}/>}/>
    
                    <Route path='Sponsors/' element={<Sponsors />}/>
                    <Route path='Stages/' element={<Stages />}/>
                    <Route path='Direction/' element={<Direction />}/>
                    <Route path='AboutOlimpiad/' element={<AboutOlimpiad />}/>
                    <Route path='StartSection/' element={<StartSection />}/>
                  </Routes>
                </Suspense>
                { NewFooter && props.isNotNavbar ? <Footer1 hist={hist["*"]}/> :
                               <Footer isNotNavbar = { props.isNotNavbar }/>}
              </div>
            }

            />
            </div>
    );
}


export default Olimpiad;
