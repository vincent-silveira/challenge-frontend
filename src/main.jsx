import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ChallengesPage from './page/ChallengesPage';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChallengesPage/>
  </StrictMode>,
)
