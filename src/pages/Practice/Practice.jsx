import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { questions } from '../../data/questions'
import { useTimer } from '../../hooks/useTimer'

export default function Practice() {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [expired, setExpired] = useState(false)

  const question = questions[currentIndex]
  const total = questions.length
  const answered = selected !== null
  const isLast = currentIndex === total - 1

  const { timeLeft, display } = useTimer(600, () => {
    setExpired(true)
    navigate('/results', { state: { score, total, expired: true } })
  })

  function handleSelect(index) {
    if (selected !== null || expired) return
    setSelected(index)
    if (index === question.answer) setScore(s => s + 1)
  }

  function handleNext() {
    if (isLast) {
      navigate('/results', { state: { score, total, expired: false } })
    } else {
      setCurrentIndex(i => i + 1)
      setSelected(null)
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: '60px auto', padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <p style={{ color: '#888', margin: 0 }}>Question {currentIndex + 1} / {total}</p>
        <p style={{
          margin: 0,
          fontWeight: 'bold',
          color: timeLeft <= 60 ? '#f44336' : '#333',
          fontSize: 18,
        }}>
          ⏱ {display}
        </p>
      </div>

      <div style={{ height: 6, background: '#eee', borderRadius: 3, marginBottom: 24 }}>
        <div style={{
          height: '100%',
          width: `${((currentIndex + 1) / total) * 100}%`,
          background: '#4caf50',
          borderRadius: 3,
          transition: 'width 0.3s',
        }} />
      </div>

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
              display: 'block', width: '100%',
              padding: '12px 16px', marginBottom: 12,
              background: bg, border: 'none', borderRadius: 8,
              fontSize: 16, cursor: answered ? 'default' : 'pointer',
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
            {selected === question.answer ? '✓ Correct!' : '✗ Incorrect'}
          </p>
          <p style={{ color: '#555', marginBottom: 16 }}>{question.explanation}</p>
          <button
            onClick={handleNext}
            style={{
              padding: '12px 32px', fontSize: 16,
              background: '#333', color: '#fff',
              border: 'none', borderRadius: 8, cursor: 'pointer',
            }}
          >
            {isLast ? 'See Results →' : 'Next →'}
          </button>
        </div>
      )}
    </div>
  )
}
