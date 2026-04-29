export function PageTitle({ children }) {
  return <h1 className="mb-0 text-left text-[6rem] font-bold uppercase leading-none text-[#343a40]">{children}</h1>;
}

export function Subheading({ children }) {
  return (
    <p className="mb-12 text-left font-['Saira_Extra_Condensed'] text-2xl font-medium uppercase leading-normal text-[#6c757d]">
      {children}
    </p>
  );
}

export function SectionTitle({ children }) {
  return <h2 className="mb-10 text-4xl font-bold uppercase tracking-[0.08em] text-slate-800">{children}</h2>;
}

export function CardTitle({ children }) {
  return <h3 className="text-2xl font-bold uppercase text-slate-800">{children}</h3>;
}

export function AccentText({ children, className = "" }) {
  return <p className={`text-xl uppercase text-[var(--color-primary)] ${className}`.trim()}>{children}</p>;
}

export function BodyText({ children, className = "" }) {
  return (
    <p className={`text-base font-normal leading-normal text-[var(--color-body-text)] ${className}`.trim()}>{children}</p>
  );
}

export function DateLabel({ children }) {
  return <p className="whitespace-nowrap font-semibold text-[var(--color-primary)]">{children}</p>;
}

