# Array to Zigzag Converter

Converts comma-separated strings into a zigzag pattern by reversing alternating strings.

## Features

- ✅ Input comma-separated strings
- ✅ Reverse alternating strings in zigzag pattern
- ✅ Display output result
- ✅ Input validation

## How to Use

1. Enter comma-separated strings in the input field (e.g., "one,two,three")
2. Click the Submit button
3. The output will show the zigzag converted result
4. Example: "one,two,three" → "oneowt,threee" (reverses every second string)

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

- `ZigZagString.jsx` - Main component with zigzag conversion logic

## Algorithm

- Takes comma-separated input strings
- Reverses every second string
- Joins them back together
