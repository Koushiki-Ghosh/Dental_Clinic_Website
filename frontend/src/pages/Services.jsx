import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { services } from '../data/demoData.js'

const categories = ['All', 'Preventive', 'Cosmetic', 'Orthodontics', 'Restorative', 'Surgical', 'Pediatric']

function Services() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => services.filter((service) => (category === 'All' || service.category === category) && `${service.title} ${service.category} ${service.shortDescription}`.toLowerCase().includes(query.trim().toLowerCase())), [category, query])
  return <><section className="page-hero page-hero-short"><div className="wrap page-hero-inner"><span className="eyebrow">Care, all in one place</span><h1>Find the right<br /><em>dental care.</em></h1><p>Explore our services and learn what to expect before your first visit.</p></div></section><section className="directory-section section-space"><div className="wrap"><div className="directory-intro"><SectionHeader eyebrow="The care menu" title="Explore our services" description="Treatment details and pricing shown here are illustrative demo content. Your clinician will discuss individual care." /></div><div className="directory-tools"><label className="search-field"><Search size={19} aria-hidden="true" /><span className="sr-only">Search treatments</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search treatments, aligners, cleaning..." /></label><div className="filter-label"><SlidersHorizontal size={16} /> Filter by</div><div className="filter-list" role="group" aria-label="Filter services by category">{categories.map((item) => <button className={`filter-chip ${category === item ? 'selected' : ''}`} type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div></div><p className="results-count" aria-live="polite">Showing {filtered.length} {filtered.length === 1 ? 'service' : 'services'}</p>{filtered.length ? <div className="service-grid service-grid-directory">{filtered.map((service) => <ServiceCard key={service.id} service={service} />)}</div> : <div className="empty-state"><Search size={25} /><h2>No treatments found</h2><p>Try another search or select a different category.</p><button className="text-link" type="button" onClick={() => { setQuery(''); setCategory('All') }}>Clear filters</button></div>}<p className="pricing-note">Pricing is demo content and is not a quote. Actual fees depend on clinical assessment and will be discussed before treatment.</p></div></section></>
}

export default Services