import React from "react";
import "./Input.css"

const Input = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            className="calculator-input"
        />
    );
};

export default Input;
