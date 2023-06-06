import PropTypes from 'prop-types'
import React from 'react'

import { ErroMessageStyle } from './styles'

export function ErroMessage({ children }) {
  return <ErroMessageStyle>{children}</ErroMessageStyle>
}

ErroMessage.propTypes = {
  children: PropTypes.string
}
