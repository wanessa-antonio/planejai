export interface SimulationField {
  id: string;
  label: string;
  placeholder: string;
  type: 'currency' | 'text';
}

export interface SimulationStep {
  id: number;
  title: string;
  fields: SimulationField[];
}

export const simulationSteps: SimulationStep[] = [
  {
    id: 1,
    title: 'Renda',
    fields: [
      {
        id: 'income',
        label: 'Qual é sua renda mensal?',
        placeholder: 'R$ 0,00',
        type: 'currency',
      },
    ],
  },
  {
    id: 2,
    title: 'Despesas',
    fields: [
      {
        id: 'expenses',
        label: 'Quanto você gasta por mês?',
        placeholder: 'R$ 0,00',
        type: 'currency',
      },
    ],
  },
  {
    id: 3,
    title: 'Objetivo',
    fields: [
      {
        id: 'goal',
        label: 'Qual é sua meta financeira?',
        placeholder: 'Ex.: Comprar um notebook',
        type: 'text',
      },
    ],
  },
];