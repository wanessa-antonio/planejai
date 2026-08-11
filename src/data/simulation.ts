export interface SimulationField {
  id: string;
  label: string;
  placeholder: string;
  type: 'currency' | 'text';
}

export interface SimulationStep {
  id: string;
  title: string;
  fields: SimulationField[];
}

export const simulationSteps: SimulationStep[] = [
  {
    id: 'income',
    title: 'Qual é a sua renda?',
    fields: [
      {
        id: 'income',
        label: 'Renda mensal',
        placeholder: 'Ex.: R$ 3.000,00',
        type: 'currency',
      },
    ],
  },
  {
    id: 'expenses',
    title: 'Quais são os seus gastos?',
    fields: [
      {
        id: 'fixedExpenses',
        label: 'Gastos fixos mensais',
        placeholder: 'Ex.: R$ 1.500,00',
        type: 'currency',
      },
      {
        id: 'variableExpenses',
        label: 'Gastos variáveis mensais',
        placeholder: 'Ex.: R$ 800,00',
        type: 'currency',
      },
    ],
  },
  {
    id: 'goal',
    title: 'Qual é a sua meta financeira?',
    fields: [
      {
        id: 'goal',
        label: 'Descreva sua meta',
        placeholder: 'Ex.: Fazer uma viagem',
        type: 'text',
      },
      {
        id: 'goalAmount',
        label: 'Quanto você precisa?',
        placeholder: 'Ex.: R$ 5.000,00',
        type: 'currency',
      },
    ],
  },
];