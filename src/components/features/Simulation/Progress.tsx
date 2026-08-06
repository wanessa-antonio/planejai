interface ProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function Progress({
  currentStep,
  totalSteps,
}: ProgressProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <section className="flex flex-col gap-2">
      <div className="flex justify-between text-sm">
        <span>
          Etapa {currentStep} de {totalSteps}
        </span>

        <span>{Math.round(progress)}%</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary-button">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
}