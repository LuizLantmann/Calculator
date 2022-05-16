import React from "react";

import "./buttons.css";
import Button from "../button/key";
import ZeroButton from "../zero/zeroButton";

export default function Buttons(props) {
  return (
    <div>
      <div className="flex-container direction-column">
        <div className="flex-container">
          <button
            onClick={() => {
              props.setNum(0);
            }}
          >
            AC
          </button>
          <button onClick={props.changeSign}>+/-</button>
          <button onClick={props.percentage}>%</button>
          <button className="orange" onClick={props.operatorHandle} value="/">
            /
          </button>{" "}
        </div>
        <div className="flex-container">
          <Button setNum={props.inputNum} defaultValue={7} />
          <Button setNum={props.inputNum} defaultValue={8} />
          <Button setNum={props.inputNum} defaultValue={9} />
          <button className="orange" onClick={props.operatorHandle} value="X">
            X
          </button>{" "}
        </div>
        <div className="flex-container">
          <Button setNum={props.inputNum} defaultValue={4} />
          <Button setNum={props.inputNum} defaultValue={5} />
          <Button setNum={props.inputNum} defaultValue={6} />
          <button className="orange" onClick={props.operatorHandle} value="-">
            -
          </button>{" "}
        </div>
        <div className="flex-container">
          <Button setNum={props.inputNum} defaultValue={1} />
          <Button setNum={props.inputNum} defaultValue={2} />
          <Button setNum={props.inputNum} defaultValue={3} />
          <button className="orange" onClick={props.operatorHandle} value="+">
            +
          </button>{" "}
        </div>
        <div className="flex-container">
          <ZeroButton setNum={props.inputNum} defaultValue={0} />
          <Button className="gray" setNum={props.inputNum} defaultValue={"."} />
          <button className="orange" onClick={props.calculate}>
            =
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
