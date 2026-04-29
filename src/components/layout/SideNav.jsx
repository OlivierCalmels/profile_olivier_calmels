const labelFromId = (id) => id.charAt(0).toUpperCase() + id.slice(1);

export default function SideNav({ navItems, activeSection, onItemClick }) {
  return (
    <aside className="sticky top-0 z-10 border-b border-slate-200 bg-[#ad0c42] px-6 py-5 text-white lg:fixed lg:bottom-0 lg:left-0 lg:w-72 lg:border-b-0 lg:px-8">
      <div className="flex items-center justify-between lg:flex-col lg:justify-center lg:pt-8">
        <div className="text-xl font-bold tracking-wide lg:mb-8 lg:text-center">Olivier Calmels</div>
        <img
          className="hidden h-40 w-40 rounded-full border-8 border-[#ffffff40] object-cover lg:block"
          src="assets/img/portrait.jpg"
          alt="Profile picture of Olivier Calmels"
        />
      </div>
      <nav className="mt-6">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-[0.08em] lg:flex-col">
          {navItems.map((item) => {
            const isActive = activeSection === item;
            return (
              <li key={item}>
                <a
                  className={`transition ${isActive ? "opacity-100 underline decoration-2 underline-offset-4" : "opacity-80 hover:opacity-100"}`}
                  href={`#${item}`}
                  onClick={() => onItemClick(item)}
                >
                  {labelFromId(item)}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

