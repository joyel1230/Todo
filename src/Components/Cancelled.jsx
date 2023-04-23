import React from "react";

function Cancelled(props) {
  return (
    <div>
      <h2>Cancelled Tasks</h2>
      {props.todosCan.map((to, i) => {
        return (
          <ul key={i}>
            <li className="cancelled">{to.text}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default Cancelled;
