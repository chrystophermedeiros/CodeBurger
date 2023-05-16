import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ element }) {
  const user = localStorage.getItem('codeburger:userData')
  if (!user) {
    return <Navigate to="/login" replace={true} />
  }
  return element
}

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}

export default PrivateRoute

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
