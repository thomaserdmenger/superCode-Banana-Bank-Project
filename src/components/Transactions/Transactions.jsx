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
      <div className='transactions__amount-container'>
        <h2>Cash</h2>
        <p className='transactions__amount'>{`${cash.toFixed(2)} €`}</p>
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
        />
        <div className='transactions__buttons-container'>
          <button
            className='transactions__buttons'
            onClick={handleDeposit}>
            Einzahlen
          </button>
          <button
            className='transactions__buttons'
            onClick={handleWithdraw}>
            Auszahlen
          </button>
        </div>
      </form>
    </section>
  )
}
