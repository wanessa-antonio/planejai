import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">{label}</label>

      <input
        className="rounded-md border border-border bg-input px-4 py-3 outline-none"
        {...props}
      />
    </div>
  );
}