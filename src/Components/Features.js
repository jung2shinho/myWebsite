import React from 'react'

import { Routes, Route } from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Projects from '../Pages/Projects';
import Resume from '../Pages/Resume';
import NotFound from '../Pages/NotFound';


function Features () { 
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
  )
}

export default Features