import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import DentistCard from '../components/DentistCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { dentists } from '../data/demoData.js'

const specialties = ['All Specialists', 'Orthodontics', 'Cosmetic Dentistry', 'Endodontics', 'General Dentistry', 'Pediatric Dentistry']

function Dentists() {
  const [specialty, setSpecialty] = useState('All Specialists')
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => dentists.filter((dentist) => (specialty === 'All Specialists' || dentist.specialization === specialty) && `${dentist.name} ${dentist.role} ${dentist.specialties.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase())), [specialty, query])
  return <><section className="page-hero page-hero-short"><div className="wrap page-hero-inner"><span className="eyebrow">Good people, good care</span><h1>Meet your<br /><em>dental team.</em></h1><p>Explore our fictional demo clinicians and find a profile that fits your questions.</p></div></section><section className="directory-section section-space"><div className="wrap"><div className="directory-intro"><SectionHeader eyebrow="Your care team" title="People behind the practice" description="Every dentist profile and credential on this page is fictional demo content." /></div><div className="directory-tools dentist-directory-tools"><label className="search-field"><Search size={19} aria-hidden="true" /><span className="sr-only">Search dentists</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search dentists or specialties..." /></label><div className="filter-list" role="group" aria-label="Filter dentists by specialty">{specialties.map((item) => <button className={`filter-chip ${specialty === item ? 'selected' : ''}`} type="button" key={item} aria-pressed={specialty === item} onClick={() => setSpecialty(item)}>{item}</button>)}</div></div><p className="results-count" aria-live="polite">Showing {filtered.length} {filtered.length === 1 ? 'dentist' : 'dentists'}</p>{filtered.length ? <div className="dentist-grid dentist-grid-directory">{filtered.map((dentist) => <DentistCard key={dentist.id} dentist={dentist} />)}</div> : <div className="empty-state"><h2>No dentists found</h2><p>Try another name or specialty.</p><button className="text-link" type="button" onClick={() => { setQuery(''); setSpecialty('All Specialists') }}>Clear filters</button></div>}</div></section></>
}

export default Dentists