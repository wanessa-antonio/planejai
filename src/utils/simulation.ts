export function isStepValid(
  values: Record<string, string>,
  fieldNames: string[] = Object.keys(values),
): boolean {
  return fieldNames.every((fieldName) => {
    const value = values[fieldName];

    return Boolean(value && value.trim());
  });
}

export function calcMonthlySavings(
  income: string,
  fixedExpenses: string,
  variableExpenses: string,
): number {
  const monthlyIncome = Number(
    income.replace(/\D/g, ''),
  ) / 100;

  const monthlyFixedExpenses = Number(
    fixedExpenses.replace(/\D/g, ''),
  ) / 100;

  const monthlyVariableExpenses = Number(
    variableExpenses.replace(/\D/g, ''),
  ) / 100;

  return (
    monthlyIncome -
    monthlyFixedExpenses -
    monthlyVariableExpenses
  );
}