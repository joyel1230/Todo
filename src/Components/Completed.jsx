import React from "react";

function Completed(props) {
  return (
    <div>
      <h2>Completed Tasks</h2>
      {props.todosDid.map((to, i) => {
        return (
          <ul key={i}>
            <li className="completed">{to.text}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default Completed;
