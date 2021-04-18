import React from "react";

export const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.place}
      name={props.name}
      className={props.class}
    />
  );
};
