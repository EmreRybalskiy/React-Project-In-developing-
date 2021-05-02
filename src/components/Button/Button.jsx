import React from "react";

export const Button = (props) => {
  return (
    <button type={props.type} className={props.class} onClick={props.onClick}>
      {props.text}
    </button>
  );
};
