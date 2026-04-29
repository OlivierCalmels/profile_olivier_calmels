import { useEffect, useRef, useState } from "react";

export default function CvActions({
  variant = "A",
  context = "default",
  shortLabel,
  longLabel,
  shortHref = `${import.meta.env.BASE_URL}assets/documents/cv-short.pdf`,
  menuAriaLabel = "CV download options",
  onLongClick,
  onShortClick,
}) {
  const isNavbar = context === "navbar";
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  if (variant === "B") {
    return (
      <div
        className={`inline-flex overflow-hidden rounded-full border ${
          isNavbar ? "border-white/60 bg-white/5" : "border-[var(--color-primary)]/30 bg-white"
        }`}
      >
        <a
          href={shortHref}
          download
          onClick={onShortClick}
          className={`px-3 py-1.5 text-xs font-semibold tracking-[0.08em] transition ${
            isNavbar
              ? "border-r border-white/40 text-white hover:bg-white hover:text-[var(--color-primary)]"
              : "border-r border-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
          }`}
        >
          {shortLabel}
        </a>
        <button
          type="button"
          onClick={onLongClick}
          className={`px-3 py-1.5 text-xs font-semibold tracking-[0.08em] transition ${
            isNavbar
              ? "text-white hover:bg-white hover:text-[var(--color-primary)]"
              : "text-slate-700 hover:bg-slate-800 hover:text-white"
          }`}
        >
          {longLabel}
        </button>
      </div>
    );
  }

  const btnBase =
    "inline-flex shrink-0 items-center justify-center rounded-full border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-primary)]";
  const btnNavbar = `${btnBase} border-white/80 bg-white/15 px-3 py-2.5 text-white shadow-sm hover:bg-white hover:text-[var(--color-primary)]`;
  const btnDefault = `${btnBase} border-[var(--color-primary)]/40 px-3 py-2 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-white`;

  const panelDesktopNav =
    "absolute left-1/2 top-full z-[100] mt-2 w-max min-w-[12.5rem] -translate-x-1/2 overflow-hidden rounded-lg border border-white/25 bg-white py-1 text-slate-800 shadow-[0_12px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/5";
  const panelDefault =
    "absolute left-0 top-full z-50 mt-2 min-w-[14rem] overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-lg ring-1 ring-black/5";

  const itemNavbar =
    "block w-full whitespace-normal px-4 py-2.5 text-left text-[11px] font-semibold uppercase leading-snug tracking-[0.06em] text-slate-800 transition hover:bg-[var(--color-primary)]/[0.08]";
  const itemDefault =
    "block w-full px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-[0.06em] text-slate-700 transition hover:bg-slate-50";

  return (
    <div
      ref={rootRef}
      className={isNavbar ? "relative flex w-full flex-col items-center" : "relative inline-block text-left"}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={menuAriaLabel}
        onClick={() => setOpen((v) => !v)}
        className={isNavbar ? btnNavbar : btnDefault}
      >
        <i className="fas fa-download" aria-hidden />
      </button>
      {open ? (
        <ul
          className={`${isNavbar ? panelDesktopNav : panelDefault} divide-y divide-slate-100`}
          role="menu"
          aria-orientation="vertical"
        >
          <li role="none">
            <a
              role="menuitem"
              href={shortHref}
              download
              className={isNavbar ? itemNavbar : itemDefault}
              onClick={() => {
                setOpen(false);
                onShortClick?.();
              }}
            >
              {shortLabel}
            </a>
          </li>
          <li role="none">
            <button
              type="button"
              role="menuitem"
              className={`${isNavbar ? itemNavbar : itemDefault} text-left`}
              onClick={() => {
                setOpen(false);
                onLongClick?.();
              }}
            >
              {longLabel}
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
