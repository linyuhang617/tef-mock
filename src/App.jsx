import { Routes, Route, Navigate } from 'react-router-dom'
import Practice from './pages/Practice/Practice'
import Results from './pages/Results/Results'

function App() {
  return (
    <Routes>
      <Route path="/practice" element={<Practice />} />
      <Route path="/results" element={<Results />} />
      <Route path="*" element={<Navigate to="/practice" />} />
    </Routes>
  )
}

export default App
