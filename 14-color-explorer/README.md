# Color Explorer

A color lookup application that searches for colors by name and displays their hex code along with a visual preview.

## Features

- ✅ Search colors by name
- ✅ Display color hex code
- ✅ Visual color preview
- ✅ Case-insensitive color name search
- ✅ Error handling for unrecognized colors
- ✅ Clean and intuitive UI
- ✅ Real-time search feedback

## How to Use

1. Type a color name in the input field (e.g., "lavender", "red", "blue")
2. Click the **🔍** search button or press Enter
3. If the color is found:
   - A color preview box appears
   - The color name is displayed
   - The hex code is shown
4. If the color is not recognized, an error message appears

## Supported Colors

The app includes a comprehensive color database with support for:
- Basic colors (red, blue, green, etc.)
- Extended color names (lavender, coral, turquoise, etc.)
- CSS named colors

## Technologies Used

- React (useState hook)
- Vite
- CSS
- Color mapping data (colorData.js)

## Installation & Running

```bash
npm install
npm run dev
```

The application will start at `http://localhost:5173` (or the next available port).

## Component Structure

- `ColorExplorer.jsx` - Main component with search and display logic
- `colorData.js` - Color name to hex code mapping data

## Features in Detail

### Color Search
- Case-insensitive search
- Whitespace trimming
- Validates if color exists in database

### Visual Display
- Shows color preview box with the actual color
- Displays color name (normalized to lowercase)
- Shows hex code in standard format

### Error Handling
- Friendly error message for unrecognized colors
- Clear UI feedback
