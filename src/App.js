import React from "react";
import { useState } from "react";
import "./App.css";

import Buttons from "./components/operators/buttons";
import Display from "./components/display/display";

function App() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(valor) {
    if (num === 0) {
      setNum(valor);
    } else {
      setNum(num + String(valor));
    }
  }

  function percentage() {
    setNum(num / 100);
  }
  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandle(valor) {
    let operatorInput = valor.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(oldnum / num);
    } else if (operator === "X") {
      setNum(oldnum * num);
    } else if (operator === "-") {
      setNum(oldnum - num);
    } else if (operator === "+") {
      setNum(oldnum + num);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <Display inputNum={inputNum} num={num} />
          <Buttons
            inputNum={inputNum}
            num={num}
            setNum={setNum}
            percentage={percentage}
            changeSign={changeSign}
            calculate={calculate}
            operatorHandle={operatorHandle}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
