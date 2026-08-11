import piggyBank from '@/assets/images/piggy-bank.png';

export function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 py-8 text-center">
      <img
        src={piggyBank}
        alt="Cofrinho representando planejamento financeiro"
        className="w-40 sm:w-48"
      />

      <div className="flex max-w-2xl flex-col gap-3">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Planeje seu futuro financeiro
        </h1>

        <p className="text-base text-muted-foreground sm:text-lg">
          Informe sua renda, seus gastos e seus objetivos para
          receber uma análise personalizada e encontrar caminhos
          para melhorar sua vida financeira.
        </p>
      </div>
    </section>
  );
}