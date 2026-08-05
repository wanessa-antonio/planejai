import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="rounded-md bg-primary px-4 py-3 text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
      {...props}
    >
      {children}
    </button>
  );
}