import {
  CircleDollarSign,
  Lightbulb,
  ListChecks,
} from 'lucide-react';

import { Card } from '@/components/features/SimulationResults/Card';
import { PageHero } from '@/components/shared/PageHero';

export function SimulationResultsPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:px-6 lg:py-12">
      <PageHero
        title="Sua análise financeira"
        description="Confira os insights personalizados para o seu planejamento financeiro."
      />

      <section className="grid gap-5 md:grid-cols-3">
        <Card
          icon={<CircleDollarSign size={22} />}
          title="Diagnóstico financeiro"
          description="Aqui será apresentado o diagnóstico da sua situação financeira com base nas informações fornecidas."
        />

        <Card
          icon={<Lightbulb size={22} />}
          title="Sugestões"
          description="A inteligência artificial apresentará sugestões práticas para ajudar você a alcançar seus objetivos."
        />

        <Card
          icon={<ListChecks size={22} />}
          title="Plano de ação"
          description="Você receberá um plano de ação com passos que podem ajudar na organização da sua vida financeira."
        />
      </section>
    </main>
  );
}