import { useState } from "react";

const ZigzagString = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const setOutput = () => {
    if (text.trim() === "") return "";
    
    setMessage("");
    const arr = text.split(",")
    const res = arr.map((item, i) => 
      i % 2 !== 0 ? item.split("").reverse().join("") : item
    )

  console.log(res.join(""))
    setMessage(res.join(""))

  }
  return (
    <div>
      <input
        type="text"
        data-testid="input-box"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter strings like one,two,three"
      />
      <button onClick={() => setOutput()} data-testid="submit-button">
        Submit
      </button>
      <p data-testid="output-result">Output: {message}</p>
    </div>
  );
};

export default ZigzagString;
