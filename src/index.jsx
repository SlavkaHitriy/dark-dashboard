import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/general.scss'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { RecoilRoot } from 'recoil'
import { theme } from './core/theme/theme.js'
import { App } from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </BrowserRouter>
)
