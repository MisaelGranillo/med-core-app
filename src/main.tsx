import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { installPreloadErrorHandler } from './utils/lazyWithRetry'
import './index.css'
// Después de las utilidades: tintes de paleta cruda adaptados al modo oscuro.
import './styles/dark-shim.css'

// Chunks perdidos tras un deploy → una recarga automática en vez de error.
installPreloadErrorHandler()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
