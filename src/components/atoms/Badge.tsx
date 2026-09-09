import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "warning" | "info" | "neutral" | "primary";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = "neutral", className = "" }) => {
  let variantStyles = "bg-slate-100 text-slate-800 border-slate-200";

  if (variant === "success") {
    variantStyles = "bg-emerald-50 text-emerald-800 border-emerald-200";
  } else if (variant === "warning") {
    variantStyles = "bg-amber-50 text-amber-800 border-amber-200";
  } else if (variant === "info") {
    variantStyles = "bg-blue-50 text-blue-800 border-blue-200";
  } else if (variant === "primary") {
    variantStyles = "bg-indigo-50 text-indigo-900 border-indigo-200";
  }

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${variantStyles} ${className}`}>
      {children}
    </span>
  );
};
