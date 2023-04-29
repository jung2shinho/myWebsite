import React from 'react'

import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Projects from '../Pages/Projects';
import Resume from '../Pages/Resume';
import Blog from '../Pages/Blog';

import { Canvas } from '@react-three/fiber';

import Redirect from '../Components/Redirect';
import ML from '../Pages/ML';
import Experience from './Experience';

function Features () { 
  return (
    <div>
    <Routes>
          <Route path="/" element={
            <Canvas>
              <Experience />
            </Canvas>} />  
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/ML" element={<ML />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/external" element={<Redirect />} />
      </Routes>
      </div>
  )
}

export default Features