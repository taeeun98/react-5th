import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Learn from './learn/Learn'
import "@/styles/global.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Learn></Learn> 
  </StrictMode>,
)



