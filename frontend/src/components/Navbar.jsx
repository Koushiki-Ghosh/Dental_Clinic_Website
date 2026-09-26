import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Button from './Button.jsx'
import { clinic } from '../data/demoData.js'

const links = [{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Services', to: '/services' }, { label: 'Dentists', to: '/dentists' }, { label: 'Contact', to: '/contact' }]

function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  useLocation()
  const isLoggedIn = Boolean(localStorage.getItem('lumina_access_token'))

  function handleLogout() {
    localStorage.removeItem('lumina_access_token')
    localStorage.removeItem('lumina_user')
    setOpen(false)
    navigate('/login')
  }

  return <header className="site-header"><div className="topline"><div className="topline-inner"><span>Your neighbourhood dental clinic in Durgapur.</span><a href={`tel:${clinic.phone.replaceAll(/[^+\d]/g, '')}`}>Call {clinic.phone} <ArrowUpRight size={13} /></a></div></div><div className="nav-shell"><Link className="brand" to="/" onClick={() => setOpen(false)} aria-label={`${clinic.name} home`}><span className="brand-mark" aria-hidden="true">L</span><span><strong>{clinic.brandLabel}</strong><small>{clinic.brandDescriptor}</small></span></Link><button className="menu-toggle" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? <X size={23} /> : <Menu size={23} />}</button><nav id="primary-navigation" className={`primary-navigation ${open ? 'is-open' : ''}`} aria-label="Primary navigation">{links.map((link) => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{link.label}</NavLink>)}{isLoggedIn && <NavLink to="/profile" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Profile</NavLink>}{isLoggedIn ? <Button type="button" className="nav-cta" onClick={handleLogout}>Logout</Button> : <Button to="/login" className="nav-cta" onClick={() => setOpen(false)}>Login</Button>}<Button to="/appointment" className="nav-cta" onClick={() => setOpen(false)}>Request appointment <ArrowUpRight size={16} /></Button></nav></div>{open && <button className="menu-scrim" aria-label="Close navigation menu" onClick={() => setOpen(false)} />}</header>
}

export default Navbar