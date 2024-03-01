import { useState } from 'react'
import Transactions from '../../components/Transactions/Transactions'

export default function Banking() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`wrapper ${darkMode ? 'dark' : ''}`}>
      <h1 className={darkMode ? 'dark' : ''}>Banana Bank</h1>
      <Transactions
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />
    </div>
  )
}
