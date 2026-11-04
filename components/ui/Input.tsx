import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="w-full">
      <label htmlFor={inputId} className="form-label">
        {label}
      </label>

      <input
        id={inputId}
        className={`form-input ${className}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error && inputId ? `${inputId}-error` : undefined}
        {...props}
      />

      {error && (
        <p id={inputId ? `${inputId}-error` : undefined} className="form-error">
          {error}
        </p>
      )}
    </div>
  );
}
