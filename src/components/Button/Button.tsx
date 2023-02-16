import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
// @ts-ignore
//import ButtonStyles from "./Button.module.css";

const sizeClassNames = {
  small: "",
  medium: "",
  large: "",
};

const colourClassNames = {
  primary: "",
  secondary: "",
  transparent: "",
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: keyof typeof sizeClassNames;
  colour?: keyof typeof colourClassNames;
};

export const Button = ({
  children,
  size = "medium",
  colour = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button className={`${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;