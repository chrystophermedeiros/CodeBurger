import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Register, Products, Cart, Admin } from '../containers'
import PrivateRoute from '../routes/private-route'

function Routess() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route
          path="/produtos"
          element={<PrivateRoute element={<Products />} />}
        />
        <Route path="/carrinho" element={<PrivateRoute element={<Cart />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />

        <Route
          path={paths.Order}
          element={<PrivateRoute element={<Admin />} isAdmin={true} />}
        />
        <Route
          path={paths.Products}
          element={<PrivateRoute element={<Admin />} isAdmin={true} />}
        />

        <Route
          path={paths.NewProdcut}
          element={<PrivateRoute element={<Admin />} isAdmin={true} />}
        />

        <Route
          path={paths.EditProducts}
          element={<PrivateRoute element={<Admin />} isAdmin={true} />}
        />

        <Route
          path={paths.NewCategory}
          element={<PrivateRoute element={<Admin />} isAdmin={true} />}
        />
      </Routes>
    </Router>
  )
}

export default Routess
