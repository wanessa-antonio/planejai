export interface FinancialData {
  income: string;
  fixedExpenses: string;
  variableExpenses: string;
  goal: string;
  goalAmount: string;
}

export function createFinancialPrompt(
  data: FinancialData,
): string {
  return `
Você é um educador financeiro.

Analise os dados financeiros abaixo e forneça uma orientação
educacional, clara e prática.

Renda mensal:
${data.income}

Gastos fixos mensais:
${data.fixedExpenses}

Gastos variáveis mensais:
${data.variableExpenses}

Objetivo financeiro:
${data.goal}

Valor necessário para o objetivo:
${data.goalAmount}

Com base nessas informações, produza:

1. Um diagnóstico geral da situação financeira.
2. Sugestões práticas para organização financeira.
3. Um plano de ação com passos objetivos para alcançar o objetivo informado.

REGRAS IMPORTANTES:

- Retorne SOMENTE um objeto JSON válido.
- Não use Markdown.
- Não use blocos de código.
- Não coloque texto antes ou depois do JSON.
- Não utilize comentários dentro do JSON.
- Os valores de "diagnosis", "suggestions" e "actionPlan" devem ser textos em português.
- "suggestions" deve conter sugestões práticas, podendo utilizar uma lista numerada dentro da própria string.
- "actionPlan" deve conter passos objetivos, podendo utilizar uma lista numerada dentro da própria string.
- Não faça promessas de retorno financeiro.
- Não recomende investimentos específicos.
- Use linguagem simples e acessível.

O JSON deve seguir exatamente este formato:

{
  "diagnosis": "texto do diagnóstico financeiro",
  "suggestions": "texto com sugestões práticas",
  "actionPlan": "texto com o plano de ação"
}
`;
}