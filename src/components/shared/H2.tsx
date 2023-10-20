import React from "react";
import { twMerge } from 'tailwind-merge'

function H2({ children, ...props }: any) {
  return <h1 className={twMerge(props?.className, "capitalize font-medium text-2xl")}>{children}</h1>;
}

export default H2;
