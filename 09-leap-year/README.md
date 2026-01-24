# Leap Year Checker

A utility that determines whether a given year is a leap year based on the Gregorian calendar rules.

## Features

- ✅ Year input validation
- ✅ Leap year calculation
- ✅ Error handling for empty or invalid input
- ✅ Clear result and error messages
- ✅ Clean UI

## How to Use

1. Enter a year in the input field
2. Click the "Check" button
3. View the result indicating if the year is a leap year or not

## Leap Year Rules

A year is a leap year if:
- It's divisible by 4 **AND** not divisible by 100, **OR**
- It's divisible by 400

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

- `LeapYear.jsx` - Main component with leap year validation logic
