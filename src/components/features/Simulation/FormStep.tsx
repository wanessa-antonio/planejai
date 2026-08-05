import { Input } from '@/components/shared/Input';

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
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">{title}</h2>

      {fields.map((field) => (
        <Input
          key={field.id}
          label={field.label}
          type="text"
          placeholder={field.placeholder}
          value={values[field.id] ?? ''}
          onChange={(event) =>
            onChange(field.id, event.target.value)
          }
        />
      ))}
    </section>
  );
}