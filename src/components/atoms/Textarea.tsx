import React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, error, className = "", ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">{label}</label>}
      <textarea
        className={`w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] disabled:bg-slate-50 disabled:text-slate-500 ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
};
