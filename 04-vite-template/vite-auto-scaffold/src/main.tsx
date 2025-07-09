import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AvatarList from './pages/AvartarList'
import './styles/main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AvatarList />
  </StrictMode>,
)
