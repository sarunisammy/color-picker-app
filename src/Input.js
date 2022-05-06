import React from "react";
import colorNames from "colornames";

const input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form
      style={{
        width: "400px",
        flex: "grid",
        alignItems: "center",
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <label
        style={{
          position: "absolute",
          left: "-99px",
          fontSize: "1.5rem",
        }}
      >
        add color:
      </label>
      <input
        style={{
          borderRadius: "0.25rem",
          width: "380px",
          marginTop: "0.5rem",
          fontSize: "1remx",
          boxShadow: "2px 3px",

          outline: "none",
          padding: "12px 16px",
        }}
        required
        type="text"
        placeholder="add color"
        value={colorValue}
        autoFocus
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      ></input>
      <button
        style={{
          width: "100%",
          minHeight: "48px",
          borderRadius: "8px",
          padding: "0.5rem",
          margin: "10px",
          cursor: "pointer",
          border: "2px solid green",
          verticalAlign: "middle",
          display: "inline-block",
          boxShadow: "2px 5px",
        }}
        className="btn"
        type="button"
        onClick={() => setIsDarkText(!isDarkText)}
      >
        toggle Color
      </button>
    </form>
  );
};

export default input;
