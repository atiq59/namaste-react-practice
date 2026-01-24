# Auto Save Text

An auto-saving text input component that automatically saves user input to browser localStorage and restores it on page reload.

## Features

- ✅ Real-time auto-save to localStorage
- ✅ Automatic data restoration on page load
- ✅ Clear button to reset input and localStorage
- ✅ Persistent data across browser sessions

## How to Use

1. Type text into the input field
2. The text is automatically saved to localStorage as you type
3. Refresh the page - your text will be restored
4. Click the Clear button to remove both input and saved data

## Technologies Used

- React (useState, useEffect hooks)
- localStorage API
- Vite
- CSS

## Installation & Running

```bash
npm install
npm run dev
```

The application will start at `http://localhost:5173` (or the next available port).

## Component Structure

- `AutoSaveInput.jsx` - Main component with auto-save and data restoration logic
