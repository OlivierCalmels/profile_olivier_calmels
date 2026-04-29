export function PageTitle({ children }) {
  return <h1 className="text-5xl font-bold uppercase tracking-[0.04em] text-slate-800 md:text-7xl">{children}</h1>;
}

export function SectionTitle({ children }) {
  return <h2 className="mb-10 text-4xl font-bold uppercase tracking-[0.08em] text-slate-800">{children}</h2>;
}

export function CardTitle({ children }) {
  return <h3 className="text-2xl font-bold uppercase text-slate-800">{children}</h3>;
}

export function AccentText({ children, className = "" }) {
  return <p className={`text-xl uppercase text-[#ad0c42] ${className}`.trim()}>{children}</p>;
}

export function BodyText({ children, className = "" }) {
  return <p className={`text-lg ${className}`.trim()}>{children}</p>;
}

export function DateLabel({ children }) {
  return <p className="whitespace-nowrap font-semibold text-[#ad0c42]">{children}</p>;
}

