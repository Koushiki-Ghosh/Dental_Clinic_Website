import { Anchor, Baby, Heart, ShieldCheck, Smile, Sparkles, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button.jsx'

const icons = { shield: ShieldCheck, sparkles: Sparkles, smile: Smile, heart: Heart, anchor: Anchor, baby: Baby }

function ServiceCard({ service, compact = false }) {
  const Icon = icons[service.icon] || Smile
  return <article className={`service-card ${compact ? 'service-card-compact' : ''}`}><div className="service-card-top"><span className="icon-tile"><Icon size={22} strokeWidth={1.7} aria-hidden="true" /></span><span className="service-category">{service.category}</span></div><h3>{service.title}</h3><p>{service.shortDescription}</p>{!compact && <><div className="service-meta"><span>{service.duration}</span><span>{service.price}</span></div><ul className="service-benefits">{service.benefits.slice(0, 2).map((benefit) => <li key={benefit}>{benefit}</li>)}</ul></>}<div className="service-card-actions"><Link className="text-link" to={`/services/${service.id}`}>Learn more <ArrowUpRight size={16} aria-hidden="true" /></Link>{!compact && <Button to={`/appointment?service=${service.id}`} variant="soft">Appointment</Button>}</div></article>
}

export default ServiceCard