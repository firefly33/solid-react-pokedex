import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

function Input(props: InputProps) {
  const { ...restProps } = props;

  return (
    <input
      className="w-full border-slate-600 border-solid border-2 rounded-md px-4 py-2"
      {...restProps}
    />
  );
}

export default Input;
