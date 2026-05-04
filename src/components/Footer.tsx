import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg pt-24 pb-12 px-6 border-t border-brand-stone/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-display font-semibold tracking-tight text-brand-stone">
              Avorria Hospitality
            </Link>
          </div>

          <div>
            <h4 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-brand-accent mb-6">Navigation</h4>
            <ul className="space-y-4">
              {["Features", "Packages", "Demo", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-sm text-brand-stone/60 hover:text-brand-stone transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-brand-accent mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-brand-stone/60 hover:text-brand-stone transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="text-sm text-brand-stone/60 hover:text-brand-stone transition-colors">Instagram</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-brand-accent mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-brand-stone/60">
              <li>© {currentYear} Avorria Hospitality</li>
              <li>Part of <a href="https://avorria.com" className="hover:text-brand-stone transition-colors">Avorria</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
