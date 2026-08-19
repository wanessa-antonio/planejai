interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
}

export function Divider({
  orientation = 'horizontal',
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        aria-hidden="true"
        className="h-6 w-px bg-border"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="h-px w-full bg-border"
    />
  );
}