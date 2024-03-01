import { useState } from 'react'
import './Transactions.css'

export default function Transactions() {
  const [cash, setCash] = useState(0)
  const [input, setInput] = useState('')

  const einzahlen = (e) => {
    e.preventDefault()

    if (input === 0 || input.length === 0) return

    if (input < 0) {
      setCash((prevCash) => prevCash + input * -1)
    } else {
      setCash((prevCash) => prevCash + input)
    }

    setInput('')
  }

  const auszahlen = (e) => {
    e.preventDefault()

    if (input === 0 || input.length === 0) return

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
          <button onClick={einzahlen}>Einzahlen</button>
          <button onClick={auszahlen}>Auszahlen</button>
        </div>
      </form>
    </section>
  )
}
