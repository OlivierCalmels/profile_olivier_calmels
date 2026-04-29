export default function Section({ id, withBorder = true, children }) {
  return (
    <section id={id} data-nav-section className={`${withBorder ? "border-b border-slate-200" : ""} py-12`}>
      {children}
    </section>
  );
}

