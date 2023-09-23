import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import dataBase from '../../utils/dataBase'

import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';
import Friends from '../Friends/Friends';
import Friend from '../Friend/Friend';
import NotFound from '../NotFound/NotFound'

function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <Dashboard /> } />
        <Route path='/about-me' element={ <AboutMe /> }>
          <Route path='contacts' element={ <Contacts />} />
        </Route>
        <Route path='/friends' element={<Friends serverData={dataBase} />} />
        <Route path='/friends/:idw' element={<Friend serverData={dataBase} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
