import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

function MainLayout() {
  const location = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [location.pathname])
  return <><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content"><Outlet /></main><Footer /></>
}

export default MainLayout