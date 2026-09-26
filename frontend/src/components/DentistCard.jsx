import { ArrowUpRight, CalendarDays, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button.jsx'

function DentistCard({ dentist }) {
  return <article className="dentist-card"><Link className="dentist-photo-link" to={`/dentists/${dentist.id}`} aria-label={`View ${dentist.name}'s profile`}><img src={dentist.image} alt={`Portrait of fictional demo dentist ${dentist.name}`} loading="lazy" /><span className="demo-stamp">Demo profile</span></Link><div className="dentist-card-body"><div className="dentist-card-heading"><div><h3>{dentist.name}</h3><p>{dentist.qualification} <span aria-hidden="true">·</span> {dentist.role}</p></div><span className="rating"><Star size={14} fill="currentColor" aria-hidden="true" /> {dentist.rating}</span></div><div className="dentist-tags">{dentist.specialties.map((specialty) => <span key={specialty}>{specialty}</span>)}</div><p className="availability"><CalendarDays size={15} aria-hidden="true" /> Next available: {dentist.nextAvailable}</p><div className="dentist-actions"><Button to={`/dentists/${dentist.id}`} variant="outline">View profile <ArrowUpRight size={15} /></Button><Button to={`/appointment?dentist=${dentist.id}`} variant="soft">Book visit</Button></div></div></article>
}

export default DentistCard