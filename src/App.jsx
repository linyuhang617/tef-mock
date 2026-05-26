import { Routes, Route, Navigate } from 'react-router-dom'
import { ExamProvider } from './context/ExamContext'
import Home from './pages/Home/Home'
import Practice from './pages/Practice/Practice'
import Results from './pages/Results/Results'
import History from './pages/History/History'

function App() {
  return (
    <ExamProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/results" element={<Results />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ExamProvider>
  )
}

export default App
