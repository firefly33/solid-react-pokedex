import React from "react";

export interface InputProps {
  type: string;
}

function Input(props: InputProps) {
  const { type } = props;

  return (
    <input
      className="w-full border-slate-600 border-solid border-2 rounded-md px-4 py-2"
      type={type}
    />
  );
}

export default Input;
