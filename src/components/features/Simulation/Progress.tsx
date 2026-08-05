interface ProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function Progress({
  currentStep,
  totalSteps,
}: ProgressProps) {
  return (
    <p>
      Etapa {currentStep} de {totalSteps}
    </p>
  );
}