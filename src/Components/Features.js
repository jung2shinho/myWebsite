import React from 'react'

import { Routes, Route } from 'react-router-dom';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Projects from '../Pages/Projects';
import Resume from '../Pages/Resume';
import Redirect from '../Components/Redirect';

function Features () { 
  return (
    <div>
    <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/external" element={<Redirect />} />
      </Routes>
      </div>
  )
}

export default Features