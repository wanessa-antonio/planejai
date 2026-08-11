import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const variantClasses =
    variant === 'primary'
      ? 'bg-primary text-primary-foreground hover:opacity-90'
      : 'bg-secondary-button text-foreground hover:opacity-80';

  return (
    <button
      {...props}
      className={`rounded-lg px-5 py-3 font-medium transition disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
}