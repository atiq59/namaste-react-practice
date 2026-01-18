import { useEffect, useState } from "react";

function AutoSaveInput() {
  const [text, setText] = useState("");

  useEffect(() => {
    const value = localStorage.getItem("autosave-text");

    if (value !== null) {
      setText(value);
    }
  }, [])

  const saveInputValue = (value) => {
    setText(value);
    localStorage.setItem("autosave-text", value);
  }

  const clearInput = () => {
    setText("")
    localStorage.removeItem("autosave-text")
  }

  return (
    <div>
      <h1>Auto Save Input</h1>

      {/* your code here  */}
      <span>Name:</span>
      <input data-testid="input-field" type="text" value={text} onChange={(e) => saveInputValue(e.target.value)} />
      <button data-testid="clear-btn" onClick={clearInput}>Clear</button>

    </div>
  );
}

export default AutoSaveInput;
