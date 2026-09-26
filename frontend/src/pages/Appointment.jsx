import { useState } from 'react'
import { ArrowLeft, BadgeCheck, CalendarDays, Clock3, ShieldCheck } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import Button from '../components/Button.jsx'
import { appointmentSlots, dentists, services } from '../data/demoData.js'

function localDateString() {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' })
}

function isValidIndianPhoneNumber(phone) {
  const value = phone.trim()
  const digits = value.replace(/\D/g, '')
  const nationalNumber = /^(?:\+91|0091)/.test(value) ? digits.slice(-10) : digits
  return /^[6-9]\d{9}$/.test(nationalNumber)
}

function Appointment() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState({ service: searchParams.get('service') || '', dentist: searchParams.get('dentist') || '', date: '', time: '', name: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [confirmation, setConfirmation] = useState(null)
  const update = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }
  const chooseTime = (time) => {
    setForm((current) => ({ ...current, time }))
    setErrors((current) => ({ ...current, time: '' }))
  }
  const submit = (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (!form.service) nextErrors.service = 'Please select a service.'
    if (!form.dentist) nextErrors.dentist = 'Please select a dentist.'
    if (!form.date) nextErrors.date = 'Please select a date.'
    else if (form.date < localDateString()) nextErrors.date = 'Please select today or a future date.'
    if (!form.time) nextErrors.time = 'Please select an available appointment time.'
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!isValidIndianPhoneNumber(form.phone)) nextErrors.phone = 'Please enter a valid 10-digit Indian mobile number.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please enter a valid email address.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      document.querySelector(`[name="${Object.keys(nextErrors)[0]}"]`)?.focus()
      return
    }
    const dentist = dentists.find((item) => item.id === form.dentist)
    setConfirmation({ id: `DEMO-${Math.random().toString(36).slice(2, 8).toUpperCase()}`, dentist: dentist?.name || 'Care team', date: new Date(`${form.date}T12:00:00+05:30`).toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Asia/Kolkata' }), time: form.time })
  }

  if (confirmation) return <section className="confirmation-page"><div className="confirmation-card"><span className="confirmation-icon"><BadgeCheck size={31} /></span><span className="eyebrow">Demo request received</span><h1>Appointment request submitted.</h1><p>This frontend-only confirmation is for demonstration. No appointment has been sent to a clinic.</p><div className="confirmation-id"><span>Appointment ID</span><strong>{confirmation.id}</strong></div><div className="confirmation-details"><p><CalendarDays size={17} /><span><small>Date</small><strong>{confirmation.date}</strong></span></p><p><Clock3 size={17} /><span><small>Time</small><strong>{confirmation.time}</strong></span></p><p><BadgeCheck size={17} /><span><small>Dentist</small><strong>{confirmation.dentist}</strong></span></p></div><div className="pending-status"><span className="status-dot" />Pending confirmation</div><Link className="text-link" to="/">Return to home <ArrowLeft size={16} /></Link></div></section>

  return <><section className="page-hero appointment-page-hero"><div className="wrap page-hero-inner"><span className="eyebrow">Your visit starts here</span><h1>Let’s find a time<br /><em>that works for you.</em></h1><p>Send a demo appointment request to our fictional Durgapur clinic. Nothing is sent to a backend.</p></div></section><section className="appointment-section section-space"><div className="wrap appointment-layout"><form className="appointment-form" onSubmit={submit} noValidate><div className="form-section-heading"><span>01</span><div><h2>Visit details</h2><p>Choose a service, dentist, and time.</p></div></div><div className="form-grid"><Field label="Service" name="service" value={form.service} error={errors.service} onChange={update}><option value="">Select a service</option>{services.map((service) => <option value={service.id} key={service.id}>{service.title}</option>)}</Field><Field label="Dentist" name="dentist" value={form.dentist} error={errors.dentist} onChange={update}><option value="">Select a dentist</option>{dentists.map((dentist) => <option value={dentist.id} key={dentist.id}>{dentist.name} · {dentist.role}</option>)}</Field><Field label="Preferred date (DD/MM/YYYY)" name="date" type="date" min={localDateString()} value={form.date} error={errors.date} onChange={update} /><div className="field time-field"><span className="field-label">Available time</span><div className="time-slots" role="group" aria-label="Choose an available appointment time">{appointmentSlots.map((slot) => <button className={`time-slot ${form.time === slot ? 'selected' : ''}`} type="button" key={slot} aria-pressed={form.time === slot} onClick={() => chooseTime(slot)}>{slot}</button>)}</div>{errors.time && <span className="field-error" role="alert">{errors.time}</span>}<small>Static demo slots shown in Indian Standard Time (IST). Availability is not live.</small></div></div><div className="form-section-heading patient-heading"><span>02</span><div><h2>Your details</h2><p>We’ll use these details in the on-screen demo confirmation only.</p></div></div><div className="form-grid"><Field label="Full name" name="name" autoComplete="name" value={form.name} error={errors.name} onChange={update} placeholder="e.g. Ananya Ghosh" /><Field label="Indian mobile number" name="phone" type="tel" autoComplete="tel" value={form.phone} error={errors.phone} onChange={update} placeholder="+91 98765 43210" /><Field label="Email address" name="email" type="email" autoComplete="email" value={form.email} error={errors.email} onChange={update} placeholder="you@example.in" /><div className="field field-full"><label htmlFor="message">Anything you’d like us to know? <span>Optional</span></label><textarea id="message" name="message" value={form.message} onChange={update} rows="4" placeholder="Share a question or accessibility requirement" /></div></div><div className="form-actions"><Button type="submit" icon>Submit demo request</Button><span><ShieldCheck size={16} /> Your information stays in this browser session.</span></div></form><aside className="appointment-aside"><span className="eyebrow">A quick note</span><h2>Consider it a first hello.</h2><p>This form demonstrates the appointment flow only. It does not send, store, or reserve anything.</p><div className="aside-divider" /><h3>What happens next?</h3><ol><li><span>1</span>Choose a service, dentist, and time.</li><li><span>2</span>Enter contact details for the demo request.</li><li><span>3</span>See a local confirmation with a demo ID.</li></ol><div className="aside-demo-pill">Phase 1 · Static availability</div></aside></div></section></>
}

function Field({ label, name, error, children, type = 'text', ...props }) {
  return <div className="field"><label htmlFor={name}>{label}</label>{children ? <select id={name} name={name} value={props.value} onChange={props.onChange} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} required>{children}</select> : <input id={name} name={name} type={type} value={props.value} onChange={props.onChange} min={props.min} autoComplete={props.autoComplete} placeholder={props.placeholder} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} required />}{error && <span className="field-error" id={`${name}-error`} role="alert">{error}</span>}</div>
}

export default Appointment