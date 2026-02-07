# Mortgage Calculator

A mortgage payment calculator that computes monthly payment based on loan amount, annual interest rate, and loan term.

## Features

- ✅ Calculate monthly mortgage payments
- ✅ Input loan amount in INR
- ✅ Input annual interest rate as percentage
- ✅ Input loan term in years
- ✅ Real-time calculations using standard mortgage formula
- ✅ Input validation (prevents invalid entries)
- ✅ Display monthly payment result

## How to Use

1. Enter the **Loan Amount** (in INR)
2. Enter the **Annual Interest Rate** (as a percentage)
3. Enter the **Loan Term** (in years)
4. Click the **Calculate** button
5. The **Monthly Payment** amount will be displayed

## Formula

The calculator uses the standard mortgage payment formula:

```
Monthly Payment = [Loan Amount × Monthly Rate] / [1 - (1 + Monthly Rate)^(-Number of Payments)]

Where:
- Monthly Rate = Annual Interest Rate / 100 / 12
- Number of Payments = Loan Term (years) × 12
```

## Technologies Used

- React (useState hook)
- Vite
- CSS

## Installation & Running

```bash
npm install
npm run dev
```

The application will start at `http://localhost:5173` (or the next available port).

## Component Structure

- `MortgageCalculator.jsx` - Main component with calculation logic and form inputs

## Validation

The calculator validates:
- Loan amount must be greater than 0
- Annual interest rate must be greater than 0
- Loan term must be at least 1 year
