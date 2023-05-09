import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/globals/header/Header';
import About from './components/About';
import Contact from './components/contact/Contact';
import Events from './components/Events';
import Donate from './components/Donate';
import SignUpForm from './components/sign pages/SignUp';
import Donations from './components/Donations';
import Footer from './components/globals/header/footer';
// import CookieConsent from "react-cookie-consent";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/donate' element={<Donate/>}/>
        <Route path='/signup' element={<SignUpForm/>}/>
        <Route path='/donation' element={<Donations/>}/>
      </Routes>
      <Footer/>
      {/* <CookieConsent debug={true}>This site uses cookies.</CookieConsent> */}
    </div>
  );
}

export default App;




