import React from 'react'
import {BrowserRouter as Router,Route,Routes } from  "react-router-dom"
import Header from './Components/Header'
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Services from './Components/Services';


function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App