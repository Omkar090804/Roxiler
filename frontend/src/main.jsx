import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Stores from './pages/Stores'
import AdminDashboard from './pages/AdminDashboard'
import OwnerDashboard from './pages/OwnerDashboard'

function App() {
  return (
    <BrowserRouter>
      <div style={{padding:20}}>
        <nav style={{marginBottom:20}}>
          <Link to='/' style={{marginRight:10}}>Stores</Link>
          <Link to='/login' style={{marginRight:10}}>Login</Link>
          <Link to='/signup'>Signup</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Stores/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/owner" element={<OwnerDashboard/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
