# Authentication

A React authentication system demonstrating login/logout functionality using Context API for global state management.

## Features

- ✅ Login/Logout functionality
- ✅ Global state management with React Context
- ✅ Protected dashboard view (shows different content based on auth status)
- ✅ Navigation bar with auth-dependent buttons
- ✅ User welcome message on login
- ✅ Clean and responsive UI

## How to Use

1. Click the **Login** button in the navbar to authenticate
2. The dashboard message changes to show "This is your dashboard"
3. A welcome message appears with a **Logout** button
4. Click **Logout** to log out and return to the initial state
5. The dashboard will show the login prompt again

## Architecture

### Context API Implementation

The app uses React Context API to manage authentication state globally:

- **UserContext** - Global context for user authentication state
- **UserProvider** - Provider component wrapping the entire app
- **State Management** - `isLoggedIn`, `login()`, `logout()` functions

## Components

- **Navbar** - Shows login/logout buttons based on auth state
- **Dashboard** - Protected area showing different content based on login status
- **UserContext** - Global state management for authentication

## Technologies Used

- React (useState, useContext hooks, Context API)
- Vite
- CSS

## Installation & Running

```bash
npm install
npm run dev
```

The application will start at `http://localhost:5173` (or the next available port).

## File Structure

```
11-authentication/
├── src/
│   ├── components/
│   │   ├── navbar.jsx
│   │   └── dashboard.jsx
│   ├── userContext.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

## Learning Outcomes

This project demonstrates:
- Working with React Context API
- Global state management
- useContext hook usage
- Conditional rendering based on authentication status
