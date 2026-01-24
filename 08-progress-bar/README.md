# Progress Bar

A dynamic progress bar component with increment/decrement controls and color changes based on progress level.

## Features

- ✅ Visual progress bar with percentage display
- ✅ Increment by 10% button
- ✅ Decrement by 10% button
- ✅ Color coding: Red (0-40%), Orange (40-80%), Green (80-100%)
- ✅ Value constraints (0-100%)
- ✅ Real-time updates

## How to Use

1. Click **+10%** to increase progress by 10%
2. Click **-10%** to decrease progress by 10%
3. The progress bar displays the current percentage
4. Colors change based on progress level

## Color Scheme

- 🔴 **Red** - 0-40% progress
- 🟠 **Orange** - 40-80% progress
- 🟢 **Green** - 80-100% progress

## Technologies Used

- React (useState hook)
- Vite
- Inline CSS styling

## Installation & Running

```bash
npm install
npm run dev
```

The application will start at `http://localhost:5173` (or the next available port).

## Component Structure

- `ProgressBar.jsx` - Main component with progress management and color logic
