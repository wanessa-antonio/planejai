export interface SimulationField {
  id: string;
  label: string;
  placeholder: string;
  type: 'text' | 'currency';
}

export interface SimulationStep {
  id: number;
  title: string;
  description: string;
  fields: SimulationField[];
}

export const simulationSteps: SimulationStep[] = [
  {
    id: 1,
    title: 'Sua renda',
    description:
      'Começamos entendendo quanto você recebe mensalmente.',
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
    id: 2,
    title: 'Seus gastos',
    description:
      'Agora vamos entender como sua renda é utilizada.',
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
        placeholder: 'Ex.: R$ 600,00',
        type: 'currency',
      },
    ],
  },
  {
    id: 3,
    title: 'Seu objetivo',
    description:
      'Por fim, conte qual objetivo financeiro você deseja alcançar.',
    fields: [
      {
        id: 'goal',
        label: 'Objetivo financeiro',
        placeholder: 'Ex.: Fazer uma viagem',
        type: 'text',
      },
      {
        id: 'goalAmount',
        label: 'Valor necessário',
        placeholder: 'Ex.: R$ 5.000,00',
        type: 'currency',
      },
    ],
  },
];