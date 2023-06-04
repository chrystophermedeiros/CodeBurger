import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import Routess from '../src/routes/routes'
import AppProvider from './hooks'
import GlobalStyle from './styles/globalStyles'

ReactDOM.render(
  <>
    <AppProvider>
      <Routess />
    </AppProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyle />
  </>,
  document.getElementById('root')
)
