export function isStepValid(values: Record<string, string>): boolean {
  return Object.values(values).every(
    (value) => value.trim() !== '',
  );
}