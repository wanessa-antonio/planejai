import type { ChangeEvent } from 'react';

import { Input } from '@/components/shared/Input';
import { formatCurrencyInput } from '@/utils/currency';

export interface FormField {
  id: string;
  label: string;
  placeholder: string;
  type: 'text' | 'currency';
}

interface FormStepProps {
  fields: FormField[];
  values: Record<string, string>;
  onChange: (
    field: string,
    value: string,
  ) => void;
}

export function FormStep({
  fields,
  values,
  onChange,
}: FormStepProps) {
  function handleChange(
    field: FormField,
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const value =
      field.type === 'currency'
        ? formatCurrencyInput(event.target.value)
        : event.target.value;

    onChange(field.id, value);
  }

  return (
    <div className="flex flex-col gap-5">
      {fields.map((field) => (
        <Input
          key={field.id}
          id={field.id}
          label={field.label}
          type="text"
          placeholder={field.placeholder}
          value={values[field.id] ?? ''}
          onChange={(event) =>
            handleChange(field, event)
          }
        />
      ))}
    </div>
  );
}