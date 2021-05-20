import React from 'react';

export const Input = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      placeholder={props.place}
      name={props.name}
      className={props.class}
      onChange={props.onChange}
      checked={props.checked}
      onClick={props.onClick}
    />
  );
};
