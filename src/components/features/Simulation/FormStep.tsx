import { Input } from '@/components/shared/Input';
import { formatCurrencyInput } from '@/utils/currency';

interface FormField {
  id: string;
  label: string;
  placeholder: string;
  type: 'currency' | 'text';
}

interface FormStepProps {
  title: string;
  fields: FormField[];
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export function FormStep({
  title,
  fields,
  values,
  onChange,
}: FormStepProps) {
  function handleChange(field: FormField, value: string) {
    const formattedValue =
      field.type === 'currency'
        ? formatCurrencyInput(value)
        : value;

    onChange(field.id, formattedValue);
  }

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-foreground">
        {title}
      </h2>

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
              handleChange(field, event.target.value)
            }
          />
        ))}
      </div>
    </section>
  );
}