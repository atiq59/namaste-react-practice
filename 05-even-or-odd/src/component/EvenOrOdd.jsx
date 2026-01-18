import { useState } from 'react';

function EvenOrOddChecker() {
  const [value, setValue] = useState("")
  const [message, setMessage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const check = async () => {

    setMessage(null);
    setLoading(true);

    setTimeout(() => {
      const parsed = parseInt(value, 10);
      if (isNaN(parsed)) {
        setMessage("Please enter a valid number.")
      } else {
        setMessage(`The number ${parsed} is ${parsed % 2 === 0 ? "even" : "odd"}.`)
      }
      setLoading(false)
    }, 1000)

  }

  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        className="number-input"
        data-testid="number-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a number"
      />

      <button data-testid="check-button" className="check-button" onClick={() => check()}>Check</button>

      <div className="result-area">
        {
          isLoading ? (
            <div data-testid="loading" className="loading">Checking...</div>
          ) : message !== null ? (
            <div data-testid="result" className="result">{message}</div>
          ) : null
        }

      </div>
    </div>
  );
}

export default EvenOrOddChecker;
