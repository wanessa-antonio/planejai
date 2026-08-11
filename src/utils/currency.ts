export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function parseCurrency(value: string): number {
  const digits = value.replace(/\D/g, '');

  if (!digits) {
    return 0;
  }

  return Number(digits) / 100;
}

export function formatCurrencyInput(value: string): string {
  const numericValue = parseCurrency(value);

  if (numericValue === 0) {
    return '';
  }

  return formatCurrency(numericValue);
}