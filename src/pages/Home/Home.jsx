import { useNavigate } from 'react-router-dom'
import { useExam } from '../../context/ExamContext'
import { questions } from '../../data/questions'

const btn = (active) => ({
  padding: '8px 16px', borderRadius: 6, cursor: 'pointer', fontSize: 14,
  border: active ? '2px solid #333' : '1px solid #ccc',
  background: active ? '#333' : '#fff',
  color: active ? '#fff' : '#333',
  fontWeight: active ? 'bold' : 'normal',
})

export default function Home() {
  const navigate = useNavigate()
  const { settings, setSettings } = useExam()

  const filtered = questions.filter(q => {
    const sectionOk = settings.section === 'mixed' || q.section === settings.section
    const levelOk = settings.level === 'all' || q.level === settings.level
    return sectionOk && levelOk
  })
  const available = Math.min(settings.count, filtered.length)

  function start() {
    if (filtered.length === 0) return
    navigate('/practice')
  }

  return (
    <div style={{ maxWidth: 560, margin: '80px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>TEF Practice</h1>
      <p style={{ color: '#666', marginBottom: 40 }}>
        Prepare for your French language exam with practice questions.
      </p>

      <div style={{ marginBottom: 24 }}>
        <p style={{ fontWeight: 600, marginBottom: 8 }}>Section</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['mixed', 'vocabulaire', 'grammaire'].map(s => (
            <button key={s} style={btn(settings.section === s)}
              onClick={() => setSettings(p => ({ ...p, section: s }))}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <p style={{ fontWeight: 600, marginBottom: 8 }}>Level</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['all', 'A2', 'B1', 'B2'].map(l => (
            <button key={l} style={btn(settings.level === l)}
              onClick={() => setSettings(p => ({ ...p, level: l }))}>
              {l === 'all' ? 'All levels' : l}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <p style={{ fontWeight: 600, marginBottom: 8 }}>Questions</p>
        <div style={{ display: 'flex', gap: 8 }}>
          {[5, 10, 20].map(n => (
            <button key={n} style={btn(settings.count === n)}
              onClick={() => setSettings(p => ({ ...p, count: n }))}>
              {n}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: '#f44336', marginBottom: 16 }}>
          No questions match your selection. Try a different combination.
        </p>
      ) : settings.count > filtered.length ? (
        <p style={{ color: '#ff9800', marginBottom: 16 }}>
          Only {filtered.length} questions available for this selection.
        </p>
      ) : null}

      <button
        onClick={start}
        disabled={filtered.length === 0}
        style={{
          width: '100%', padding: '14px', fontSize: 16,
          background: filtered.length === 0 ? '#ccc' : '#333',
          color: '#fff', border: 'none', borderRadius: 8,
          cursor: filtered.length === 0 ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
        }}
      >
        Start {available} Questions →
      </button>
    </div>
  )
}
