// Plain wrapper kept so components stay simple. The page's only scripted
// motion is the hero headline; everything else simply sits in place.
export default function Reveal({ children, className = '', as = 'div' }) {
  const Tag = as
  return <Tag className={className}>{children}</Tag>
}
