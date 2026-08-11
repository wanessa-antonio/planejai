import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({
  label,
  error,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={props.id}
        className="text-sm font-medium text-foreground"
      >
        {label}
      </label>

      <input
        {...props}
        className={`rounded-lg border bg-input px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 ${
          error ? 'border-red-500' : 'border-border'
        }`}
      />

      {error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}