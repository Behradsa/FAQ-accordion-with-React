import plusIcon from "./assets/images/icon-plus.svg";
import minusIcon from "./assets/images/icon-minus.svg";
import React, { useState } from "react";
function Question(props) {
  const [icon, setIcon] = useState(plusIcon);

  function handleIconChange() {
    setIcon((i) => (i == plusIcon ? minusIcon : plusIcon));
  }

  return (
    <div className="question-container">
      <div className="question">
        <button onClick={handleIconChange}>{props.q}</button>
        <img
          className="plus"
          src={icon}
          alt="show answer"
          onClick={handleIconChange}
        />
      </div>
      <div
        className="answer"
        style={{ display: icon == plusIcon ? "none" : "inline-block" }}
      >
        {props.a}
      </div>
    </div>
  );
}
export default Question;
