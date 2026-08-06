import type { AIInsightCardProps } from './AIInsightCardProps';

export function Card({
  title,
  content,
}: AIInsightCardProps) {
  return (
    <article className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h2 className="mb-3 text-xl font-semibold">
        {title}
      </h2>

      <p className="text-muted-foreground">
        {content}
      </p>
    </article>
  );
}