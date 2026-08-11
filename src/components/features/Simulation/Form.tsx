import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { simulationSteps } from '@/data/simulation';
import { useSimulationStorage } from '@/hooks/useSimulationStorage';
import { isStepValid } from '@/utils/simulation';

import { Button } from '@/components/shared/Button';

import { FormStep } from './FormStep';
import { Progress } from './Progress';

export function Form() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const {
    data: formData,
    updateField,
  } = useSimulationStorage();

  const step = simulationSteps[currentStep];

  const currentStepValues = Object.fromEntries(
    step.fields.map((field) => [
      field.id,
      formData[field.id] ?? '',
    ]),
  );

  const canProceed = isStepValid(currentStepValues);

  const isLastStep =
    currentStep === simulationSteps.length - 1;

  function nextStep() {
    if (!canProceed) {
      return;
    }

    if (!isLastStep) {
      setCurrentStep((previousStep) => previousStep + 1);
    }
  }

  function previousStep() {
    if (currentStep > 0) {
      setCurrentStep((previousStep) => previousStep - 1);
    }
  }

  function handleSubmit() {
    if (!canProceed) {
      return;
    }

    navigate('/resultado');
  }

  return (
    <section className="flex flex-col gap-6">
      <Progress
        currentStep={currentStep + 1}
        totalSteps={simulationSteps.length}
      />

      <FormStep
        title={step.title}
        fields={step.fields}
        values={formData}
        onChange={updateField}
      />

      <div className="flex justify-between gap-4">
        <Button
          variant="secondary"
          onClick={previousStep}
          disabled={currentStep === 0}
        >
          Voltar
        </Button>

        {isLastStep ? (
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={!canProceed}
          >
            Gerar minha análise
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={nextStep}
            disabled={!canProceed}
          >
            Próximo
          </Button>
        )}
      </div>
    </section>
  );
}