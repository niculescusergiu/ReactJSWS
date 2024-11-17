import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Ads from './components/Ads.jsx'
import AdCards from './components/AdCards.jsx'

createRoot(document.getElementById('root')).render(
<App/>
)
