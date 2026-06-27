"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-lime-400 text-black hover:bg-lime-300",
  secondary: "bg-transparent border border-lime-400 text-lime-400 hover:bg-lime-400/10",
  ghost: "bg-transparent text-lime-400 hover:bg-lime-400/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading = false, className = "", children, disabled, onClick, type = "button" }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        className="inline-flex"
      >
        <button
          ref={ref}
          type={type}
          onClick={onClick}
          disabled={disabled || loading}
          className={`
            inline-flex items-center justify-center rounded-md font-medium
            transition-colors duration-200 cursor-pointer
            disabled:opacity-50 disabled:cursor-not-allowed
            ${variantStyles[variant]}
            ${sizeStyles[size]}
            ${className}
          `}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Loading...
            </span>
          ) : (
            children
          )}
        </button>
      </motion.div>
    );
  }
);

Button.displayName = "Button";

export default Button;