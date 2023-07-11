import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import "./Calculator.css";

const Calculator = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleButtonPress = (value) => {
        setInputValue(inputValue + value);
    };

    const handleCalculate = () => {
        try {
            const result = eval(inputValue);
            setInputValue(result.toString());
        } catch (error) {
            setInputValue("Error");
        }
    };

    const handleClear = () => {
        setInputValue("");
    };

    return (
        <div className="calculator">
            <div className="input">
                <Input value={inputValue} onChange={handleInputChange} />
            </div>
            <div className="buttons-container">
                <div className="calculator-buttons">
                    <Button label="7" onClick={() => handleButtonPress("7")} />
                    <Button label="8" onClick={() => handleButtonPress("8")} />
                    <Button label="9" onClick={() => handleButtonPress("9")} />
                    <Button label="+" onClick={() => handleButtonPress("+")} />
                    <Button label="4" onClick={() => handleButtonPress("4")} />
                    <Button label="5" onClick={() => handleButtonPress("5")} />
                    <Button label="6" onClick={() => handleButtonPress("6")} />
                    <Button label="-" onClick={() => handleButtonPress("-")} />
                    <Button label="1" onClick={() => handleButtonPress("1")} />
                    <Button label="2" onClick={() => handleButtonPress("2")} />
                    <Button label="3" onClick={() => handleButtonPress("3")} />
                    <Button label="*" onClick={() => handleButtonPress("*")} />
                    <Button label="0" onClick={() => handleButtonPress("0")} />
                    <Button label="." onClick={() => handleButtonPress(".")} />
                    <Button label="=" onClick={handleCalculate} />
                    <Button label="/" onClick={() => handleButtonPress("/")} />
                    <Button label="Clear" onClick={handleClear} />
                </div>
            </div>
        </div>
    );
};

export default Calculator;
