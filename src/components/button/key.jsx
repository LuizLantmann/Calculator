import React from "react";

export default function button(props) {
  return (
    <>
      <button
        className="gray"
        onClick={() => {
          props.setNum(props.defaultValue);
        }}
      >
        {props.defaultValue}
      </button>
    </>
  );
}
