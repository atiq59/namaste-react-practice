# Contact Form

A contact form component with form validation, error handling, and submission feedback.

## Features

- ✅ Name, Email, and Message input fields
- ✅ Form validation with error messages
- ✅ Email format validation using regex
- ✅ Required field validation
- ✅ Submit success feedback with thank you message
- ✅ Real-time error display
- ✅ Clean and user-friendly UI

## How to Use

1. Fill in the **Name** field (required)
2. Enter a valid **Email** address (required, must be valid format)
3. Type your **Message** (required)
4. Click the **Submit** button
5. If all validations pass, you'll see a thank you message
6. If there are errors, they'll be displayed in red below each field

## Validation Rules

- **Name** - Must not be empty
- **Email** - Must not be empty and must be in valid email format (user@domain.com)
- **Message** - Must not be empty

## Technologies Used

- React (useState hook)
- Vite
- CSS
- Regular expressions (regex) for email validation

## Installation & Running

```bash
npm install
npm run dev
```

The application will start at `http://localhost:5173` (or the next available port).

## Component Structure

- `ContactForm.jsx` - Main component with form handling and validation logic

## Features in Detail

### Form Validation
- Client-side validation before submission
- Real-time error messages for each field
- Prevents submission if validation fails

### User Feedback
- Success message displays after form submission
- Clear error messages guide users to fix issues
