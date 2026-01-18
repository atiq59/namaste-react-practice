import { useState } from "react";
function ChipsInput() {

  const [input, setInput] = useState("");
  const [chips, setChips] = useState([]);

  const getInputValue = (e) => {

    if (e.key === "Enter") {
      if (input.trim() === "") return;

      const item = {
        id: chips.length + 1,
        text: input.trim()
      }

      setChips((prev) => [...prev, item])
      setInput("")
    }
  }

  const deleteChip = (id) => {
    setChips(
      chips.filter(val => val.id !== id)
    )
  }

  return (
    <div className='main-container'>
      <h2>Chips Input</h2>
      <input
        type="text"
        value={input}
        placeholder="Type a chip and press tag"
        className="input"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => getInputValue(e)}
      />
      <div className="chip-container">
        {
          chips.map(val => (
            <div key={val.id} className="chipStyle">
              <span>{val.text}</span>
              <button className="delete" onClick={() => deleteChip(val.id)}>X</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ChipsInput;