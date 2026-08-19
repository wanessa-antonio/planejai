import { RefreshCw } from 'lucide-react';

interface ErrorProps {
  message: string;
  onRetry: () => void;
}

export function Error({
  message,
  onRetry,
}: ErrorProps) {
  return (
    <section className="flex flex-col items-center gap-4 rounded-2xl border border-red-500/30 bg-card p-8 text-center">
      <p className="text-red-500">
        {message}
      </p>

      <button
        type="button"
        onClick={onRetry}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-foreground transition hover:opacity-90"
      >
        <RefreshCw size={18} />

        Tentar novamente
      </button>
    </section>
  );
}