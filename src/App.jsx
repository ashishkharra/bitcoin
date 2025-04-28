import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Invest from './pages/Invest'
import Contract from './pages/Contract'
import Vip from './pages/Vip'
import Mine from './pages/Mine'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/investments" element={<Invest/>} />
        <Route path="/contract" element={<Contract/>} />
        <Route path="/vip" element={<Vip/>} />
        <Route path="/me" element={<Mine/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App