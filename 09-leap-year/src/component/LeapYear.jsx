import { useState } from "react";

export default function LeapYear() {
  const [year, setYear] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const checkLeapYear = () => {
    const num = year.trim();
    if (!num) {
      setError("Please enter a year")
      setMessage("")
      return
    }

    setError("")
    const n = parseInt(num, 10);
    const isLeapYear = (n % 4 === 0 && n % 100 !== 0) || n % 400 === 0

  setMessage(isLeapYear ? `${n} is a Leap Year` : `${n} is not a Leap Year`)

  }

  return (
    <div className="container">
      <h1>Leap Year Checker</h1>
      <label data-testid="label-date">Enter a year:</label>
      <input
        type="text"
        data-testid="year-input"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <button data-testid="check-btn" onClick={() => checkLeapYear()}>
        Check
      </button>

      {
        message && <div data-testid="result" className="result">{message}</div>
      }
      {
        error && <div data-testid="error-msg" className="error">{error}</div>
      }
    
    </div>
  );
}
