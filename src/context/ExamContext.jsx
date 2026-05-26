import { createContext, useContext, useState } from 'react'

const ExamContext = createContext()

export function ExamProvider({ children }) {
  const [settings, setSettings] = useState({
    section: 'mixed',
    level: 'all',
    count: 5,
  })

  return (
    <ExamContext.Provider value={{ settings, setSettings }}>
      {children}
    </ExamContext.Provider>
  )
}

export function useExam() {
  return useContext(ExamContext)
}
