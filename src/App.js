import React from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Contact from './screens/Contact'
import HomeScreen from './screens/HomeScreen'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
