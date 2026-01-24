# Accordion

An accordion component that displays collapsible content sections with smooth expand/collapse animations.

## Features

- ✅ Expandable/collapsible sections
- ✅ Chevron icons indicating open/closed state
- ✅ Only one section open at a time
- ✅ Smooth transitions
- ✅ Dynamic content rendering

## How to Use

1. Click on an accordion item title to expand it
2. Click again to collapse it
3. The chevron icon rotates to indicate the state

## Technologies Used

- React (useState hook)
- React Icons (FaChevronDown, FaChevronUp)
- Vite
- CSS

## Installation & Running

```bash
npm install
npm run dev
```

The application will start at `http://localhost:5173` (or the next available port).

## Component Structure

- `Accordion.jsx` - Main accordion component accepting items array with title and content

## Props

```javascript
<Accordion items={[
  { title: "Section 1", content: "Content here" },
  { title: "Section 2", content: "More content" }
]} />
```
