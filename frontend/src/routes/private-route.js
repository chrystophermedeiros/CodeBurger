import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'

import { Header } from '../components/Header'

function PrivateRoute({ element, isAdmin }) {
  const user = localStorage.getItem('codeburger:userData')
  if (!user) {
    return <Navigate to="/login" replace={true} />
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" replace={true} />
  }
  return (
    <div>
      {!isAdmin && <Header />}
      {element}
    </div>
  )
}

export default PrivateRoute

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool
}
