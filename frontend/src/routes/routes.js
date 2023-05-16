import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../containers/Home/'
import Login from '../containers/Login'
import Register from '../containers/Register'
import PrivateRoute from '../routes/private-route'

function Routess() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default Routess
