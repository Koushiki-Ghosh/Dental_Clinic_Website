import { HeartHandshake, Lightbulb, ShieldCheck, Sparkles } from 'lucide-react'
import Button from '../components/Button.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

const principles = [
  { title: 'Patient-centered care', description: 'Your goals, questions, and comfort are part of every conversation.', icon: HeartHandshake },
  { title: 'Modern technology', description: 'Useful tools help us explain what we see and plan care thoughtfully.', icon: Lightbulb },
  { title: 'A comfortable environment', description: 'A calm space and an unhurried welcome make room to feel at ease.', icon: Sparkles },
  { title: 'Clear, considered guidance', description: 'We explain options and trade-offs so decisions feel informed.', icon: ShieldCheck },
]

function About() {
  return <><section className="page-hero"><div className="wrap page-hero-inner"><span className="eyebrow">A little about Lumina</span><h1>Dental care with<br /><em>room to breathe.</em></h1><p>We believe a good dental visit is built on trust, clear communication, and care that sees the person behind the smile.</p></div></section><section className="about-story section-space"><div className="wrap about-story-grid"><div className="about-story-image"><img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85" alt="Sunlit, contemporary dental clinic interior" /><span className="image-caption">A fictional practice, built around thoughtful care</span></div><div><span className="eyebrow">Our mission</span><h2>Make good care feel a little more human.</h2><p>Lumina Dental is a fictional clinic concept created to show how modern dental care can feel: welcoming, transparent, and grounded in each patient's needs.</p><p>Our imagined team takes time to listen, offers clear explanations, and respects that every person arrives with a different history and comfort level.</p><Button to="/services" variant="outline" icon>Explore our care</Button></div></div></section><section className="principles-section section-space"><div className="wrap"><SectionHeader eyebrow="What guides us" title="The details matter." description="A few principles shape every part of the Lumina experience." /><div className="principle-grid">{principles.map(({ title, description, icon: Icon }, index) => <article className="principle-item" key={title}><span className="principle-number">0{index + 1}</span><Icon size={24} strokeWidth={1.6} /><h3>{title}</h3><p>{description}</p></article>)}</div></div></section><section className="about-cta"><div className="wrap about-cta-inner"><div><span className="eyebrow">Come as you are</span><h2>Start with a conversation.</h2><p>We’ll take it from there, together.</p></div><Button to="/appointment" variant="light" icon>Book an appointment</Button></div></section></>
}

export default About