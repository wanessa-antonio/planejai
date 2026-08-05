import { useState } from 'react';

import { simulationSteps } from '@/data/simulation';
import { useSimulationStorage } from '@/hooks/useSimulationStorage';

import { Button } from '@/components/shared/Button';

import { FormStep } from './FormStep';
import { Progress } from './Progress';

export function Form() {
  const [currentStep, setCurrentStep] = useState(0);

  const {
    data: formData,
    updateField,
  } = useSimulationStorage();

  const step = simulationSteps[currentStep];

  function nextStep() {
    if (currentStep < simulationSteps.length - 1) {
      setCurrentStep((previousStep) => previousStep + 1);
    }
  }

  function previousStep() {
    if (currentStep > 0) {
      setCurrentStep((previousStep) => previousStep - 1);
    }
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

      <div className="flex justify-between">
        <Button
          onClick={previousStep}
          disabled={currentStep === 0}
        >
          Voltar
        </Button>

        <Button
          onClick={nextStep}
          disabled={currentStep === simulationSteps.length - 1}
        >
          Próximo
        </Button>
      </div>
    </section>
  );
}