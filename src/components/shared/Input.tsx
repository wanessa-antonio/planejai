import type {
  InputHTMLAttributes,
} from 'react';

import { Divider } from '@/components/shared/Divider';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  prefix?: string;
  suffix?: string;
}

export function Input({
  label,
  error,
  prefix,
  suffix,
  id,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </label>
      )}

      <div
        className={`flex items-center overflow-hidden rounded-lg border bg-input transition ${
          error
            ? 'border-red-500'
            : 'border-border focus-within:border-primary'
        }`}
      >
        {prefix && (
          <>
            <span className="px-3 text-sm text-muted-foreground">
              {prefix}
            </span>

            <Divider orientation="vertical" />
          </>
        )}

        <input
          id={id}
          {...props}
          className="w-full bg-transparent px-3 py-2.5 text-foreground outline-none placeholder:text-muted-foreground"
        />

        {suffix && (
          <>
            <Divider orientation="vertical" />

            <span className="px-3 text-sm text-muted-foreground">
              {suffix}
            </span>
          </>
        )}
      </div>

      {error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}