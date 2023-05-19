import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import Routess from '../src/routes/routes'
import { UserProvider } from './hooks/UserContext'
import GlobalStyle from './styles/globalStyles'

ReactDOM.render(
  <>
    <UserProvider>
      <Routess />
    </UserProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyle />
  </>,
  document.getElementById('root')
)
