import { useState } from 'react'
import './Transactions.css'

export default function Transactions() {
  const [cash, setCash] = useState(0)
  const [input, setInput] = useState('')

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

  return (
    <section className='transactions'>
      <h2>Cash</h2>
      <p>{cash}</p>
      <form>
        <input
          type='number'
          min={0}
          name='user-input'
          id='user-input'
          placeholder='Betrag in €'
          value={input}
          onChange={(event) => setInput(Number(event.target.value))}
        />
        <div>
          <button onClick={handleDeposit}>Einzahlen</button>
          <button onClick={handleWithdraw}>Auszahlen</button>
        </div>
      </form>
    </section>
  )
}
