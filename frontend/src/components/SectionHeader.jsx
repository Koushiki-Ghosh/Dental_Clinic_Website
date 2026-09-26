function SectionHeader({ eyebrow, title, description, align = 'left', className = '' }) {
  return <div className={`section-header section-header-${align} ${className}`.trim()}>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{description && <p>{description}</p>}</div>
}

export default SectionHeader