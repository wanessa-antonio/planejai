import type { AIInsightCardProps } from './AIInsightCardProps';

export function Card({
  title,
  description,
  icon,
}: AIInsightCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
      {icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted-primary text-primary">
          {icon}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-foreground">
          {title}
        </h2>

        <p className="leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </article>
  );
}