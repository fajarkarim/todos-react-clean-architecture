import React from "react";

interface Props {
  text: string;
  onRemove: any;
  key?: string;
}

const Todo = ({ text, onRemove }: Props) => {
  return (
    <div style={{ position: "relative" }}>
      <span>{text}</span>
      <span
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          color: "red",
          cursor: "pointer"
        }}
        onClick={onRemove}
      >
        ilangin
      </span>
    </div>
  );
};

export default Todo;
