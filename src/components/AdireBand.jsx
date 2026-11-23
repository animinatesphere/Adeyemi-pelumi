// A strip of Adire-style tiles: white "resist" motifs on indigo, the way
// Yoruba adire eleko cloth is laid out in a repeating grid of squares.
const W = 64

function Motif({ kind, x }) {
  const c = x + W / 2
  const m = W / 2
  const stroke = { stroke: '#f1f3f8', strokeWidth: 2.2, fill: 'none', strokeLinecap: 'round' }
  switch (kind) {
    case 0: // concentric circles
      return (
        <g {...stroke}>
          <circle cx={c} cy={m} r={20} />
          <circle cx={c} cy={m} r={12} />
          <circle cx={c} cy={m} r={4} fill="#f1f3f8" />
        </g>
      )
    case 1: // ladder stripes
      return (
        <g {...stroke}>
          {[14, 24, 34, 44, 54].map((y) => (
            <line key={y} x1={x + 12} y1={y - 4} x2={x + W - 12} y2={y - 4} />
          ))}
        </g>
      )
    case 2: // four dots in a square
      return (
        <g fill="#f1f3f8">
          {[[-11, -11], [11, -11], [-11, 11], [11, 11]].map(([dx, dy]) => (
            <circle key={`${dx}${dy}`} cx={c + dx} cy={m + dy} r={5} />
          ))}
        </g>
      )
    case 3: // leaf / eye
      return (
        <g {...stroke}>
          <path d={`M${x + 10} ${m} Q${c} ${m - 24} ${x + W - 10} ${m} Q${c} ${m + 24} ${x + 10} ${m} Z`} />
          <line x1={x + 18} y1={m} x2={x + W - 18} y2={m} />
        </g>
      )
    case 4: // zigzag
      return (
        <g {...stroke}>
          <polyline points={`${x + 10},${m - 8} ${x + 20},${m + 8} ${x + 32},${m - 8} ${x + 44},${m + 8} ${x + 54},${m - 8}`} />
          <polyline points={`${x + 10},${m - 18} ${x + 20},${m - 2} ${x + 32},${m - 18} ${x + 44},${m - 2} ${x + 54},${m - 18}`} />
        </g>
      )
    default: // cross with dots
      return (
        <g {...stroke}>
          <line x1={c} y1={10} x2={c} y2={W - 10} />
          <line x1={x + 10} y1={m} x2={x + W - 10} y2={m} />
          <circle cx={x + 18} cy={18} r={3} fill="#f1f3f8" />
          <circle cx={x + W - 18} cy={W - 18} r={3} fill="#f1f3f8" />
        </g>
      )
  }
}

export default function AdireBand({ tiles = 18 }) {
  const order = [0, 1, 3, 2, 4, 5, 1, 0, 2, 3, 5, 4]
  return (
    <svg
      viewBox={`0 0 ${tiles * W} ${W}`}
      preserveAspectRatio="xMinYMid slice"
      className="block h-16 w-full sm:h-20"
      aria-hidden="true"
    >
      <rect width={tiles * W} height={W} fill="#1f2a6b" />
      {Array.from({ length: tiles }, (_, i) => (
        <g key={i}>
          <rect x={i * W + 1} y={1} width={W - 2} height={W - 2} fill={i % 2 ? '#1f2a6b' : '#25327d'} />
          <Motif kind={order[i % order.length]} x={i * W} />
        </g>
      ))}
    </svg>
  )
}
