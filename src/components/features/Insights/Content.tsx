import type { AIInsight } from '@/services/aiService';

interface ContentProps {
  insight: AIInsight;
}

export function Content({
  insight,
}: ContentProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-foreground">
          Diagnóstico financeiro
        </h2>

        <p className="text-sm leading-6 text-muted-foreground">
          {insight.diagnosis}
        </p>
      </article>

      <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-foreground">
          Sugestões
        </h2>

        <p className="text-sm leading-6 text-muted-foreground">
          {insight.suggestions}
        </p>
      </article>

      <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-foreground">
          Plano de ação
        </h2>

        <p className="text-sm leading-6 text-muted-foreground">
          {insight.actionPlan}
        </p>
      </article>
    </div>
  );
}