import { useState } from 'react';

import {
  createFinancialPrompt,
  type FinancialData,
} from '@/data/aiPrompt';

import {
  getInsight,
  type AIInsight,
} from '@/services/aiService';

export function useInsight() {
  const [insight, setInsight] =
    useState<AIInsight | null>(null);

  const [isLoading, setIsLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  async function generateInsight(
    data: FinancialData,
  ) {
    setIsLoading(true);
    setError(null);

    try {
      const prompt = createFinancialPrompt(data);

      const result = await getInsight(prompt);

      setInsight(result);

      return result;
    } catch (err) {
      console.error(err);

      setError(
        'Não foi possível gerar sua análise financeira. Tente novamente.',
      );

      setInsight(null);

      return null;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    insight,
    isLoading,
    error,
    generateInsight,
  };
}