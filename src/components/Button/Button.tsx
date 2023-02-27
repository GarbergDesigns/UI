import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
// @ts-ignore
import ButtonStyles from "./Button.module.css";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  isDisabled?: boolean;
};

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  isLoading = false,
  isDisabled = false,
  className,
  ...props
}: ButtonProps) => {
  let classes = [ButtonStyles["gdui-btn"]];
  classes.push(ButtonStyles[`gdui-btn-${variant}`]);
  classes.push(ButtonStyles[`gdui-btn-${size}`]);
  if(isLoading) {
    classes.push(ButtonStyles[`gdui-btn-loading`]);
  }
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
