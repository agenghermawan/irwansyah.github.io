import React from "react";

export default function Button(props) {
  const { type = "button", text, onClick } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className="p-1 outline outline-offset-2 outline-blue-400 rounded-md"
    >
      {text}
    </button>
  );
}
