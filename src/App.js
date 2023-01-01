import React from 'react';

// Import react components below
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';

// <> is the short syntax for fragments
function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </>
  )
}
export default App;
