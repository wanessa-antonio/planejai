import { useTheme } from '@/hooks/useTheme';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between border-b border-border p-4">
      <h1 className="text-xl font-bold">Planej.ai</h1>

      <button
        onClick={toggleTheme}
        className="rounded-md border border-border px-4 py-2"
      >
        {theme === 'light' ? '🌙 Escuro' : '☀️ Claro'}
      </button>
    </header>
  );
}