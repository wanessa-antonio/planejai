import { useState } from 'react';

import { simulationSteps } from '@/data/simulation';
import { useSimulationStorage } from '@/hooks/useSimulationStorage';
import { isStepValid } from '@/utils/simulation';

import { Button } from '@/components/shared/Button';
import { FormStep } from './FormStep';

export function Form() {
  const [currentStep, setCurrentStep] =
    useState(0);

  const {
    data,
    updateField,
  } = useSimulationStorage();

  const step = simulationSteps[currentStep];

  const currentStepValues = Object.fromEntries(
    step.fields.map((field) => [
      field.id,
      data[field.id] ?? '',
    ]),
  );

  const canProceed = isStepValid(
    currentStepValues,
    step.fields.map((field) => field.id),
  );

  function handleChange(
    field: string,
    value: string,
  ) {
    updateField(field, value);
  }

  function handleNext() {
    if (!canProceed) {
      return;
    }

    if (
      currentStep <
      simulationSteps.length - 1
    ) {
      setCurrentStep((prev) => prev + 1);
    }
  }

  function handlePrevious() {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }

  function handleSubmit() {
    if (!canProceed) {
      return;
    }

    window.location.href = '/resultado';
  }

  return (
    <section className="mx-auto w-full max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="mb-8">
        <span className="text-sm text-muted-foreground">
          Etapa {currentStep + 1} de{' '}
          {simulationSteps.length}
        </span>

        <h2 className="mt-2 text-2xl font-semibold text-foreground">
          {step.title}
        </h2>

        <p className="mt-2 text-muted-foreground">
          {step.description}
        </p>
      </div>

      <FormStep
        fields={step.fields}
        values={currentStepValues}
        onChange={handleChange}
      />

      <div className="mt-8 flex justify-between gap-4">
        <Button
          type="button"
          variant="secondary"
          onClick={handlePrevious}
          disabled={currentStep === 0}
        >
          Voltar
        </Button>

        {currentStep <
        simulationSteps.length - 1 ? (
          <Button
            type="button"
            variant="primary"
            onClick={handleNext}
            disabled={!canProceed}
          >
            Próximo
          </Button>
        ) : (
          <Button
            type="button"
            variant="primary"
            onClick={handleSubmit}
            disabled={!canProceed}
          >
            Ver minha análise
          </Button>
        )}
      </div>
    </section>
  );
}