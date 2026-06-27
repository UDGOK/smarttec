"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";

type HexVariant = "primary" | "outline" | "green";
type HexSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  variant?: HexVariant;
  size?: HexSize;
  href?: string;
  className?: string;
}

const sizeClass: Record<HexSize, string> = {
  sm: "btn-hex-sm",
  md: "btn-hex-md",
  lg: "btn-hex-lg",
  icon: "btn-hex-icon",
};

const variantClass: Record<HexVariant, string> = {
  primary: "btn-hex !bg-slate !text-fog",
  outline: "btn-hex-outline !border-slate !bg-slate",
  green: "btn-hex !bg-greptile-green !text-black",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "green",
      size = "md",
      href,
      className = "",
      children,
      ...rest
    },
    ref
  ) => {
    const cls = `${variantClass[variant]} ${sizeClass[size]} ${className}`;
    if (href) {
      return (
        <a href={href} className={cls}>
          {children}
        </a>
      );
    }
    return (
      <button ref={ref} className={cls} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;