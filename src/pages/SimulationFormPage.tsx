import { Form } from '@/components/features/Simulation/Form';
import { Hero } from '@/components/features/Simulation/Hero';

export function SimulationFormPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-8 sm:px-6 lg:py-12">
      <Hero />

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <Form />
      </div>
    </main>
  );
}