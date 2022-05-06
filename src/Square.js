import React from "react";

const square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <div
      className="square "
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#fff",
        width: "400px",
        height: "400px",
        placeContent: "center",
        display: "grid",
        border: "2px solid black",
        margin: "10px",
      }}
    >
      <p>{colorValue ? colorValue : "empty value"}</p>
      <p>{hexValue ? hexValue : "null"}</p>
    </div>
  );
};

square.defaultProps = {
  colorValue: "Empty Color Value",
};

export default square;
