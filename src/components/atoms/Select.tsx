import React from "react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { label: string; value: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, error, options, className = "", ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">{label}</label>}
      <select
        className={`w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] disabled:bg-slate-50 disabled:text-slate-500 ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
};
