import React, { useState } from 'react';

function MortgageCalculator() {
  const [calculator, setCalculator] = useState({
    loanAmount: undefined,
    annualInterestRate: undefined,
    loanTerms: undefined
  });
  const [message, setMessage] = useState("");

  const updateInputValue = (key, value) => {
    setCalculator((prev) => ({...prev, [key]: value}))
  }

  const calculate = () => {
    console.log(calculator)
    setMessage("");
    if (
      !calculator.loanAmount ||
      calculator.loanAmount <= 0 ||
      !calculator.annualInterestRate ||
      calculator.annualInterestRate <= 0 ||
      !calculator.loanTerms ||
      calculator.loanTerms < 1
    ) {
      setMessage("Invalid Input");
      return;
    }

    const monthlyRate = calculator.annualInterestRate / 100 / 12;
    const numPay = calculator.loanTerms * 12;

    const monthlyPayment = (calculator.loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPay))

    setMessage(monthlyPayment.toFixed(2))
     
  }
  
  return (
    <div>
      {/* Implement Mortgage Calculator logic here */}
      <h1>Mortage Calculator</h1>
      <div>
        <label htmlFor="loanAmount">Loan Amount (INR): </label>
        <input id="loanAmount" type="number" lab min="0" value={calculator.loanAmount} onChange={(e) => updateInputValue("loanAmount", Number(e.target.value))} />
      </div>

      <div>
        <label htmlFor="annualInterestRate">Annual Interest Rate (%): </label>
        <input id="annualInterestRate" type="number" min="0" value={calculator.annualInterestRate} onChange={(e) => updateInputValue("annualInterestRate", Number(e.target.value))} />
      </div>

      <div>
        <label htmlFor="loanTerms">Loan Term (Years): </label>
        <input id="loanTerms" type="number" min="1" value={calculator.loanTerms} onChange={(e) => updateInputValue("loanTerms", Number(e.target.value))} />
      </div>

      <button onClick={() => calculate()}>Calculate</button>

      {message && <div aria-label="result">Monthly Payment: {message}</div>}
    </div>
  );
}

export default MortgageCalculator;