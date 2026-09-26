import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Button({ to, href, children, variant = 'primary', className = '', icon = false, ...props }) {
  const classes = `button button-${variant} ${className}`.trim()
  const content = <>{children}{icon && <ArrowRight size={17} aria-hidden="true" />}</>
  if (to) return <Link className={classes} to={to} {...props}>{content}</Link>
  if (href) return <a className={classes} href={href} {...props}>{content}</a>
  return <button className={classes} {...props}>{content}</button>
}

export default Button