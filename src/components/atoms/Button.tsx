import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  disabled,
  ...props
}) => {
  let baseStyles = "inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  
  let variantStyles = "";
  if (variant === "primary") {
    variantStyles = "bg-[var(--color-primary)] text-white hover:opacity-95 focus:ring-[var(--color-primary)]";
  } else if (variant === "secondary") {
    variantStyles = "bg-[var(--color-secondary, #475569)] text-white hover:opacity-95 focus:ring-slate-500";
  } else if (variant === "outline") {
    variantStyles = "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 focus:ring-slate-400";
  } else if (variant === "ghost") {
    variantStyles = "bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-400";
  }

  let sizeStyles = "";
  if (size === "sm") sizeStyles = "px-3 py-1.5 text-xs";
  if (size === "md") sizeStyles = "px-4 py-2.5 text-sm";
  if (size === "lg") sizeStyles = "px-6 py-3 text-base";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};
