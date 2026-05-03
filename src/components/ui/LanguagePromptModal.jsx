import { useEffect } from "react";

export default function LanguagePromptModal({ open, onChoose }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4"
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lang-prompt-title"
        className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-2xl"
      >
        <h2
          id="lang-prompt-title"
          className="text-2xl font-bold uppercase tracking-[0.06em] text-[var(--color-primary)]"
        >
          Choisir une langue
        </h2>
        <p className="mt-2 text-sm text-slate-600">Choose your language</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            className="rounded border-2 border-[var(--color-primary)] bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[var(--color-secondary)] hover:text-white"
            onClick={() => onChoose("fr")}
          >
            Français
          </button>
          <button
            type="button"
            className="rounded border-2 border-[var(--color-primary)] bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)] transition hover:bg-slate-50"
            onClick={() => onChoose("en")}
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
}
