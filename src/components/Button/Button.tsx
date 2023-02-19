import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
// @ts-ignore
import ButtonStyles from "./Button.module.css";

const sizeClassNames = {
  small: "",
  medium: "",
  large: "",
};

const variantClassNames = {
  primary: "",
  secondary: "",
  outline: "",
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: keyof typeof sizeClassNames;
  colour?: keyof typeof variantClassNames;
  isLoading?: boolean;
  isDisabled?: boolean;
};

export const Button = ({
  children,
  size = "medium",
  colour = "primary",
  isLoading = false,
  isDisabled = false,
  className,
  ...props
}: ButtonProps) => {
  let classes = [ButtonStyles["gdui-btn"]];
  if (className) {
    classes.push(className);
  }
  return (
    <button className={classes.join(" ")} disabled={isDisabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
