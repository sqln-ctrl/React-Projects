import { useState } from 'react'
import './App.css'
import Navbar from './components/layout/temp';
import Features from './components/sections/Features';
import Pricing from "./components/sections/Pricing";
import CTA from "./components/sections/CTA";
import Footer from "./components/layout/Footer";
import Hero from './components/sections/Hero';
import Working from './components/sections/Working';

function App () {
  return (
      <div className="app">
        <Navbar/>
        <Hero/>
        <Features/>
        <Working/>
        <Pricing/>
        <CTA/>
        <Footer/>
      </div>
  );
}

export default App;