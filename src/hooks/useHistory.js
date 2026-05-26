import { useState, useEffect } from 'react'

const KEY = 'tef-mock-history'

export function useHistory() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY)
      if (raw) setHistory(JSON.parse(raw))
    } catch {}
  }, [])

  function addRecord(record) {
    const next = [record, ...history].slice(0, 50)
    setHistory(next)
    try {
      localStorage.setItem(KEY, JSON.stringify(next))
    } catch {}
  }

  function clearHistory() {
    setHistory([])
    localStorage.removeItem(KEY)
  }

  return { history, addRecord, clearHistory }
}
