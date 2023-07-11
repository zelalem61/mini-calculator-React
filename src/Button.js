import React from "react";
import "./Button.css"

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="calculator-button">
      {label}
    </button>
  );
};

export default Button;
