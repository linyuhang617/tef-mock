import { useState } from 'react'
import { questions } from '../../data/questions'

const question = questions[0]

export default function Practice() {
  const [selected, setSelected] = useState(null)

  function handleSelect(index) {
    if (selected !== null) return
    setSelected(index)
  }

  const answered = selected !== null
  const correct = selected === question.answer

  return (
    <div style={{ maxWidth: 600, margin: '60px auto', padding: '0 20px' }}>
      <p style={{ fontSize: 18, marginBottom: 24 }}>{question.question}</p>

      {question.options.map((option, index) => {
        let bg = '#f0f0f0'
        if (answered) {
          if (index === question.answer) bg = '#4caf50'
          else if (index === selected) bg = '#f44336'
        }

        return (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            style={{
              display: 'block',
              width: '100%',
              padding: '12px 16px',
              marginBottom: 12,
              background: bg,
              border: 'none',
              borderRadius: 8,
              fontSize: 16,
              cursor: answered ? 'default' : 'pointer',
              textAlign: 'left',
            }}
          >
            {option}
          </button>
        )
      })}

      {answered && (
        <div style={{ marginTop: 16 }}>
          <p style={{ fontWeight: 'bold' }}>
            {correct ? '✓ Correct!' : '✗ Incorrect'}
          </p>
          <p style={{ color: '#555' }}>{question.explanation}</p>
        </div>
      )}
    </div>
  )
}
