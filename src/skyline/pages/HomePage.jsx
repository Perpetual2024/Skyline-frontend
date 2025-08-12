import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';


function HomePage() {
  return (
    <Router>
        <Route>
            < Navbar />
            < HeroSection />
        </Route>
    </Router>

)
}

export default HomePage