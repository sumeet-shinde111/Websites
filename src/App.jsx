import { useState } from 'react'
import { Header } from './Components/Header/Header';
import Hero  from './Components/Hero/Hero';
import "./App.css";
import "./index.css";
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Statistics from './Components/Statistics/Statistics';
import Contact from './Components/Contact/Contact';
import Founder from './Components/Founder/Founder';

function App() {

  return (
    <>
    <Header />
    <Hero />
    <About/>
    <Statistics/>
    <Services/>
    <Founder/>
    <Contact/>
    </>

  )
}

export default App
