import s from './App.module.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import React, { Suspense } from 'react';
import Home from './components/Home/Home';
import MobileHome from './components/MobileHome/MobileHome';
import Registration from './components/MobileHome/Regisration/Registration';

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
        </Routes>
      </Suspense> 
      }
      </div>
  );
}

export default App;
