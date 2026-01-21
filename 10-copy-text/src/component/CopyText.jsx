import { useState } from 'react';

function CopyText() {
  const [text, setText] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleCopy(value) {
    setError("");

    if (value.trim() === "") {
      setError("Type some values to copy");
      return;
    }

    navigator.clipboard.writeText(value)
    setSuccess("Copied");

    setTimeout(() => {
      setSuccess("");
    }, 2000)
  }
    

  return (
    <div className="copyToClipboard">
      <h1>Copy to Clipboard</h1>
      <p>Click the button to copy the text</p>

      <div className="copyToClipboard-container">
        <div className="form">
          <label htmlFor="text">
            Enter your text:
            <input
              type="text"
              id="text"
              data-testid="input-field"
              placeholder="Type Something"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
          <button
            onClick={() => {
              handleCopy(text);
            }}
            className="btn"
            data-testid="copy-button"
          >
            Copy
          </button>
        </div>
        {
          success && <div data-testid="copied-message" style={{color: 'green'}}>✔️ {success}</div>
        }
        {
          error && <div data-testid="error-message" style={{color: "red"}}>{error}</div>
        }
      </div>
    </div>
  );
}

export default CopyText;