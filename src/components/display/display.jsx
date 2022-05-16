import React from "react";

import './display.css'

  export default function Display(props) {

    return (
      <div>
         <div className="display">
            <h1 className="result">{props.num}</h1>
        </div>
     </div>
      
  )
}
