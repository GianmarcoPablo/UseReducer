import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TareaProvider } from './context/TareaProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TareaProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TareaProvider>
)
