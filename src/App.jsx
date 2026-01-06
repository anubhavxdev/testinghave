import React from 'react'
import { Routes,Route } from 'react-router-dom'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Dash from './pages/dash.jsx'
import Nav from './components/nav.jsx'

const App = () => {
  return (
    <><Nav />
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dash" element={<Dash />} />
    </Routes>
    </>
  )
}

export default App
