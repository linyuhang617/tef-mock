import { useNavigate } from 'react-router-dom'
import { useHistory } from '../../hooks/useHistory'

export default function History() {
  const navigate = useNavigate()
  const { history, clearHistory } = useHistory()

  return (
    <div style={{ maxWidth: 600, margin: '60px auto', padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, margin: 0 }}>Practice History</h1>
        <div style={{ display: 'flex', gap: 8 }}>
          {history.length > 0 && (
            <button
              onClick={clearHistory}
              style={{
                padding: '8px 16px', fontSize: 14,
                background: '#fff', color: '#f44336',
                border: '1px solid #f44336', borderRadius: 8, cursor: 'pointer',
              }}
            >
              Clear
            </button>
          )}
          <button
            onClick={() => navigate('/')}
            style={{
              padding: '8px 16px', fontSize: 14,
              background: '#333', color: '#fff',
              border: 'none', borderRadius: 8, cursor: 'pointer',
            }}
          >
            Practice →
          </button>
        </div>
      </div>

      {history.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#888', marginTop: 60 }}>
          <p style={{ fontSize: 18 }}>No practice history yet.</p>
          <p>Complete a session to see your results here.</p>
        </div>
      ) : (
        <div>
          {history.map((record, i) => (
            <div key={i} style={{
              border: '1px solid #eee', borderRadius: 8,
              padding: '14px 16px', marginBottom: 12,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <div>
                <p style={{ margin: '0 0 4px', fontWeight: 500 }}>
                  {record.section} · {record.level}
                </p>
                <p style={{ margin: 0, fontSize: 13, color: '#888' }}>
                  {new Date(record.date).toLocaleDateString('en-US', {
                    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                  })}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{
                  margin: '0 0 4px', fontWeight: 700, fontSize: 18,
                  color: record.pct >= 70 ? '#4caf50' : record.pct >= 40 ? '#ff9800' : '#f44336',
                }}>
                  {record.pct}%
                </p>
                <p style={{ margin: 0, fontSize: 13, color: '#888' }}>
                  {record.score} / {record.total}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
