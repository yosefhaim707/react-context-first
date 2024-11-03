import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MainCounter } from './components/MainCounter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <MainCounter />
  </StrictMode>,
)
