import React from "react";

export default function ZeroButton(props) {
  return (
    <button
      className="gray zero"
      onClick={() => {
        props.setNum(props.defaultValue);
      }}
    >
      {props.defaultValue}
    </button>
  );
}
