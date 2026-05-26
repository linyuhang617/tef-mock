import { useLocation, useNavigate } from 'react-router-dom'

export default function Results() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { score, total, expired } = state || { score: 0, total: 0, expired: false }
  const pct = total > 0 ? Math.round((score / total) * 100) : 0

  return (
    <div style={{ maxWidth: 600, margin: '60px auto', padding: '0 20px', textAlign: 'center' }}>
      {expired && (
        <p style={{ color: '#f44336', fontWeight: 'bold', marginBottom: 8 }}>⏱ Time's up!</p>
      )}
      <h1 style={{ fontSize: 48, margin: '0 0 8px' }}>{score} / {total}</h1>
      <p style={{ fontSize: 24, color: '#555' }}>{pct}% correct</p>
      <button
        onClick={() => navigate('/practice')}
        style={{
          marginTop: 32, padding: '12px 32px', fontSize: 16,
          background: '#4caf50', color: '#fff',
          border: 'none', borderRadius: 8, cursor: 'pointer',
        }}
      >
        Practice Again
      </button>
    </div>
  )
}
