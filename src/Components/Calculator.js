import React, { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
    // setResult(result.slice(0,-1)); Another Method
  };
  const calculate = () => {
    try {
      setResult(eval(result.toString()));
    } catch (err) {
      setResult("Error");
    }
  };
  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">
            Clear
          </button>
          <button className="highlight" onClick={backspace} id="backspace">
            C
          </button>
          <button className="highlight" onClick={handleClick} name="/">
            &divide;
          </button>
          <button onClick={handleClick} name="9">
            7
          </button>
          <button onClick={handleClick} name="8">
            8
          </button>
          <button onClick={handleClick} name="7">
            9
          </button>
          <button className="highlight" onClick={handleClick} name="*">
            &times;
          </button>
          <button onClick={handleClick} name="6">
            4
          </button>
          <button onClick={handleClick} name="5">
            5
          </button>
          <button onClick={handleClick} name="4">
            6
          </button>
          <button className="highlight" onClick={handleClick} name="-">
            &ndash;
          </button>
          <button onClick={handleClick} name="3">
            1
          </button>
          <button onClick={handleClick} name="2">
            2
          </button>
          <button onClick={handleClick} name="1">
            3
          </button>
          <button className="highlight" onClick={handleClick} name="+">
            +
          </button>
          <button onClick={handleClick} name="0">
            0
          </button>
          <button onClick={handleClick} name=".">
            .
          </button>
          <button className="highlight" onClick={calculate} id="equal">
            =
          </button>
        </div>
      </div>
    </>
  );
}
