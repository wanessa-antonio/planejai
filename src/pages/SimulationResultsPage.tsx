import {
  CircleDollarSign,
  Lightbulb,
  ListChecks,
  LoaderCircle,
} from 'lucide-react';

import { Card } from '@/components/features/SimulationResults/Card';
import { PageHero } from '@/components/shared/PageHero';
import { useInsight } from '@/hooks/useInsight';
import { useSimulationStorage } from '@/hooks/useSimulationStorage';

export function SimulationResultsPage() {
  const { data: formData } =
    useSimulationStorage();

  const {
    insight,
    isLoading,
    error,
    generateInsight,
  } = useInsight();

  function handleGenerateInsight() {
    generateInsight({
      income: formData.income ?? '',
      fixedExpenses:
        formData.fixedExpenses ?? '',
      variableExpenses:
        formData.variableExpenses ?? '',
      goal: formData.goal ?? '',
      goalAmount:
        formData.goalAmount ?? '',
    });
  }

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:px-6 lg:py-12">
      <PageHero
        title="Sua análise financeira"
        description="Confira os insights personalizados para o seu planejamento financeiro."
      />

      {!insight && !isLoading && !error && (
        <section className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <p className="max-w-xl text-muted-foreground">
            Estamos prontos para analisar suas
            informações financeiras e gerar seus
            insights.
          </p>

          <button
            type="button"
            onClick={handleGenerateInsight}
            className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            Gerar minha análise
          </button>
        </section>
      )}

      {isLoading && (
        <section className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <LoaderCircle
            size={32}
            className="animate-spin text-primary"
          />

          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-foreground">
              Analisando suas informações...
            </h2>

            <p className="text-sm text-muted-foreground">
              Estamos preparando seus insights
              financeiros.
            </p>
          </div>
        </section>
      )}

      {error && (
        <section className="rounded-2xl border border-red-500/30 bg-card p-6 text-center">
          <p className="text-red-500">
            {error}
          </p>

          <button
            type="button"
            onClick={handleGenerateInsight}
            className="mt-4 rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-foreground transition hover:opacity-90"
          >
            Tentar novamente
          </button>
        </section>
      )}

      {insight && !isLoading && (
        <section className="grid gap-5 md:grid-cols-3">
          <Card
            icon={
              <CircleDollarSign size={22} />
            }
            title="Diagnóstico financeiro"
            description={insight.diagnosis}
          />

          <Card
            icon={<Lightbulb size={22} />}
            title="Sugestões"
            description={insight.suggestions}
          />

          <Card
            icon={<ListChecks size={22} />}
            title="Plano de ação"
            description={insight.actionPlan}
          />
        </section>
      )}
    </main>
  );
}