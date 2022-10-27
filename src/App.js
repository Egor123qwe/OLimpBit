import s from './App.module.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import React, { Suspense } from 'react';
import Home from './components/Home/Home';
import MobileHome from './components/MobileHome/MobileHome';
import Registration from './components/MobileHome/Regisration/Registration';
import Olimpiad from './components/Olimpiad/Olimpiad';
import Winners from './components/Home/Winners/Winners';
import Minesweeper from './components/Home/Minesweeper/Minesweeper';

function App() {

  const Width = window.screen.width

  return (
    <div className={Width >= 600 ? s.App : s.AppMobile}>
      { Width >= 600 ?
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/Home/" />} />
          <Route path='/Home/*' element={<Home Width={Width} />}/>
        </Routes>
      </Suspense> 
      :
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/Home/" />} />
          <Route path='/Home/*' element={<MobileHome/>}/>
          <Route path='Home/Registration/*' element={<Registration/>}/>
          <Route path='Home/Winners/*' element={<Winners MainButtons={[0, 0, 1]}
                          className={1} SetColapsItem = {[0]} ColapsItem={[]} 
                          Id={-2} isNotNavbar = {true} />}/>
          <Route path='Home/AboutOlimpiad/*' element={<Olimpiad MainButtons={[0, 0, 1]}
                          className={1} SetColapsItem = {[0]} ColapsItem={[]} 
                          Id={-2} SelectedItem={[]} isNotNavbar = {true} />}/>
          <Route path='Home/Minesweeper' element={<Minesweeper
                          className={1} ColapsItem={[0]} Id={-2} MainButtons={[0, 0, 1]}
                          SelectedItem={[]} isNotNavbar = {1}/>} />


        </Routes>
      </Suspense> 
      }
      </div>
  );
}

export default App;
