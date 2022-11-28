import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Footer from './components/Footer';
import './components/home';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Packages from './components/package';

import ResponsiveAppBar from './components/Header';
import './components/Footer';
import './components/Contact';
import Contact from './components/Contact';
import Slider from '../src/components/home';
import  About from './components/aboutUs'
import Destination from '../src/components/destination';
import Header from '../src/components/Header';

function App() {
  return (
    <div className="App">
     <ResponsiveAppBar/> 
   <Routes>
    <Route  path='/' element={ <Slider/>}/>
    <Route  path='/contact' element={ <Contact/>}/>
     <Route  path='/destination' element={<Destination/>}/> 
    <Route  path='/packages' element={ <Packages/>}/>
     <Route  path='/aboutUs' element={ <About/>}/> 
   </Routes>
  <Footer/>
    </div>
  );
}

export default App;
