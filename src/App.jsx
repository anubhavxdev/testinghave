import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Dash from './pages/dash.jsx'
import Nav from './components/nav.jsx'

const App = () => {
  return (
    <><Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dash" element={<Dash />} />
      </Routes>
    </>
  )
}

export default App
