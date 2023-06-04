import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import './index.css'
import {CalculatorContextProvider} from "./contexts/CalculatorContext.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <CalculatorContextProvider>
          <App />
      </CalculatorContextProvider>
  </React.StrictMode>,
)
