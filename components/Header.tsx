import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <nav className="container h-14 flex items-center gap-6">
        <Link href="/" className="font-semibold tracking-wide">
          RAW <span className="text-brand-accent">Explicit</span>
        </Link>
        <div className="ml-auto flex items-center gap-4 text-sm">
          <Link href="/magazine" className="hover:text-brand-accent">Magazine</Link>
          <Link href="/projects" className="hover:text-brand-accent">Projects</Link>
          <Link href="/shop" className="hover:text-brand-accent">Shop</Link>
          <Link href="/about" className="hover:text-brand-accent">About</Link>
          <Link href="/contact" className="hover:text-brand-accent">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
