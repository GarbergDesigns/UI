import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
// @ts-ignore
import ButtonStyles from "./Button.module.css";

export type ButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "outline";
    loading?: boolean;
};

export const Button = ({
    children,
    variant = "primary",
    size = "medium",
    loading = false,
    disabled = false,
    className,
    ...props
}: ButtonProps) => {
    let classes = [ButtonStyles["gdui-btn"]];
    classes.push(ButtonStyles[`gdui-btn-${variant}`]);
    classes.push(ButtonStyles[`gdui-btn-${size}`]);
    if (loading) {
        classes.push("animate-spin")
    }
    if (className) {
        classes.push(className);
    }
    return (
        <button className={classes.join(" ")} disabled={disabled} {...props}>
            {children}
        </button>
    );
};

export default Button;
