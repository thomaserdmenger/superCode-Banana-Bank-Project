import { useEffect, useRef, useState } from 'react'
import './Transactions.css'

export default function Transactions({ setDarkMode, darkMode }) {
  const [cash, setCash] = useState(0)
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleError = () => {
    if (input === 0 || input.length === 0) return
  }

  const handleDeposit = (e) => {
    e.preventDefault()
    handleError()

    if (input < 0) {
      setCash((prevCash) => prevCash + input * -1)
    } else {
      setCash((prevCash) => prevCash + input)
    }

    setInput('')
  }

  const handleWithdraw = (e) => {
    e.preventDefault()
    handleError()

    if (input > cash) {
      window.alert('Unzureichenden Guthaben')
      setInput('')
      return
    } else if (input < 0) {
      setCash((prevCash) => prevCash - input * -1)
    } else {
      setCash((prevCash) => prevCash - input)
    }

    setInput('')
  }

  const handleDarkmode = () => {
    setDarkMode((darkMode) => !darkMode)
  }

  return (
    <section className={`transactions ${darkMode ? 'dark' : ''}`}>
      <svg
        onClick={handleDarkmode}
        className={`transactions-icon ${darkMode ? 'dark' : ''}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'>
        <path d='M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z' />
      </svg>
      <div className='transactions__amount-container'>
        <h2>Cash</h2>
        <p className='transactions__amount'>{`${cash} €`}</p>
      </div>
      <form className='transactions__form'>
        <input
          className='transaction__input'
          type='number'
          min={0}
          name='user-input'
          id='user-input'
          placeholder='Betrag in €'
          value={input}
          onChange={(event) => setInput(Number(event.target.value))}
          ref={inputRef}
        />
        <div className='transactions__buttons-container'>
          <button
            className={`transactions__buttons ${darkMode ? 'dark' : ''}`}
            onClick={handleDeposit}>
            Einzahlen
          </button>
          <button
            className={`transactions__buttons ${darkMode ? 'dark' : ''}`}
            onClick={handleWithdraw}>
            Auszahlen
          </button>
        </div>
      </form>
    </section>
  )
}
