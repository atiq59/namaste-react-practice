import { useState } from "react";
import { colorNameToHex } from "./colorData";
import "../index.css";

const ColorExplorer = () => {
  const [colorInput, setColorInput] = useState("");
  const [color, setColor] = useState({
    name: "",
    hexCode: "",
  });
  const [error, setError] = useState("");

  const getColorCode = () => {
    const value = colorInput.trim().toLowerCase();

    setError("");
    setColor({ name: "", hexCode: "" });

    if (!value || !colorNameToHex(value)) {
      setError("Sorry, I couldn't recognize that color.");
      return;
    }

    setColor({
      name: value,
      hexCode: colorNameToHex(value),
    });
  };

  return (
    <div className="container">
      <h1>Color Explorer</h1>
      <div className="input-section">
        <input
          type="text"
          data-testid="color-input"
          placeholder="Type a color name e.g. lavender"
          value={colorInput}
          onChange={(e) => setColorInput(e.target.value)}
        />
        <button data-testid="search-button" onClick={() => getColorCode()}>
          🔍
        </button>
      </div>
      {color.name && color.hexCode && (
        <div className="color-box" data-testid="color-box">
          <div
            className="preview"
            role="presentation"
            data-testid="color-preview"
            style={{ backgroundColor: color.hexCode }}
          ></div>
          <p data-testid="color-name">
            <strong>Name: {color.name}</strong>
          </p>
          <p data-testid="color-hex">
            <strong>Hex: {color.hexCode}</strong>
          </p>
        </div>
      )}

      {error && (
        <div data-testid="error-msg" className="error">
          {error}
        </div>
      )}
    </div>
  );
};

export default ColorExplorer;
