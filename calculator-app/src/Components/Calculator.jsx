import React, { useState } from "react";
import Button from "./Button";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  //function to handle all inputs from user
  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  //calculate results
  const calculateResult = () => {

    try{
        setResult(eval(input));
    }catch{
        setResult("ERROR")
    }
    //   setResult(eval(input));
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  //backspace
  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

  const buttons = ["AC","DEL","-","+","7","8","9","/","4","5","6","*","1","2","3",".","0","="];

  return (
    <div className="calculator">
      <div className="input">
        <h3>INPUT</h3>
        <input type="text" placeholder="0" value={input} readOnly />
        <h3>RESULT</h3>
        <input type="text" placeholder="0" value={result} readOnly/>
      </div>
      <div className="buttons" style={{display: "grid"}}>
        {buttons.map((e)=>{
                  console.log(`Creating button with label: ${e}`);

         return <Button value={e} onClick={()=>{
            e=== "="? calculateResult():e==="AC"? clearInput():e==="DEL"? deleteLast() : handleInput(e)
          }}
          // style={e === "="? {gridColumn: "span 3"}: {}}
           />

          })}
      </div>  
    </div>
  );
};

export default Calculator;
