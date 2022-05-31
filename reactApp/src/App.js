

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Home from './components/Home';
import About from './components/About';


import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";  
function App() {
  return (
    <>
       <Navbar title='TextEditor' />
      
        
       
        <Routes>
     {/* <Route exact path='/' element={<Navbar title='Navigation'/>}
                              > </Route> */}
      
      <Route exact path='/About' element={<About/>}></Route>
      <Route exact path='/home' element={<Home/>}></Route>
      <Route exact path='/' element={<TextForm heading='We are here' />}></Route>
      
          
        </Routes> 
        
    </>
  );
}

export default App;
