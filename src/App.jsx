import { useState } from 'react'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <div>
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    
    </div>
  )
}

export default App
