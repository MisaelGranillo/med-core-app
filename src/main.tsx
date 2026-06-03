import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Validación de integridad del dataset en modo desarrollo
if ((import.meta as any).env?.DEV) {
  import('./data/medlex-terms').then(({ medlexTerms }) =>
    import('./data/utils').then(({ validateTerms }) => validateTerms(medlexTerms))
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
