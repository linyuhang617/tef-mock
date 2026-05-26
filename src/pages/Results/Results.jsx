import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useHistory } from '../../hooks/useHistory'

function ReviewItem({ item, index }) {
  const [open, setOpen] = useState(false)
  const { question, selected, correct } = item

  return (
    <div style={{
      border: `1px solid ${correct ? '#4caf50' : '#f44336'}`,
      borderRadius: 8, marginBottom: 12, overflow: 'hidden',
    }}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          padding: '12px 16px', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: correct ? '#f0faf0' : '#fff0f0',
        }}
      >
        <span style={{ fontSize: 14 }}>
          {correct ? '✓' : '✗'} Q{index + 1}: {question.question}
        </span>
        <span style={{ fontSize: 12, color: '#888' }}>{open ? '▲' : '▼'}</span>
      </div>
      {open && (
        <div style={{ padding: '12px 16px', background: '#fff', fontSize: 14 }}>
          <p style={{ margin: '0 0 4px' }}>
            Your answer: <strong style={{ color: correct ? '#4caf50' : '#f44336' }}>
              {question.options[selected]}
            </strong>
          </p>
          {!correct && (
            <p style={{ margin: '0 0 4px' }}>
              Correct answer: <strong style={{ color: '#4caf50' }}>
                {question.options[question.answer]}
              </strong>
            </p>
          )}
          <p style={{ margin: '8px 0 0', color: '#555' }}>{question.explanation}</p>
        </div>
      )}
    </div>
  )
}

export default function Results() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { addRecord } = useHistory()
  const saved = useRef(false)

  const { score, total, expired, answers } = state || { score: 0, total: 0, expired: false, answers: [] }
  const pct = total > 0 ? Math.round((score / total) * 100) : 0

  useEffect(() => {
    if (saved.current || !state) return
    saved.current = true
    addRecord({
      date: new Date().toISOString(),
      score, total, pct,
      section: 'mixed',
      level: 'B1',
      expired,
    })
  }, [])

  return (
    <div style={{ maxWidth: 600, margin: '60px auto', padding: '0 20px' }}>
      {expired && (
        <p style={{ color: '#f44336', fontWeight: 'bold', textAlign: 'center' }}>⏱ Time's up!</p>
      )}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h1 style={{ fontSize: 48, margin: '0 0 8px' }}>{score} / {total}</h1>
        <p style={{ fontSize: 24, color: '#555', margin: '0 0 24px' }}>{pct}% correct</p>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
          <button
            onClick={() => navigate('/practice')}
            style={{
              padding: '12px 24px', fontSize: 16,
              background: '#4caf50', color: '#fff',
              border: 'none', borderRadius: 8, cursor: 'pointer',
            }}
          >
            Practice Again
          </button>
          <button
            onClick={() => navigate('/history')}
            style={{
              padding: '12px 24px', fontSize: 16,
              background: '#fff', color: '#333',
              border: '1px solid #ccc', borderRadius: 8, cursor: 'pointer',
            }}
          >
            History
          </button>
        </div>
      </div>

      {answers && answers.length > 0 && (
        <div>
          <h2 style={{ fontSize: 18, marginBottom: 12 }}>Review</h2>
          {answers.map((item, i) => (
            <ReviewItem key={i} item={item} index={i} />
          ))}
        </div>
      )}
    </div>
  )
}
