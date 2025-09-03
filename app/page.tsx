import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-10">
      {/* Hero */}
      <div className="card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold">
            RAW <span className="text-brand-accent">Explicit</span>
          </h1>
          <p className="text-brand-muted mt-2 max-w-xl">
            A creative magazine + shop showcasing productions, design, creative direction,
            photography, cinematography & culture.
          </p>
        </div>
        <div className="flex gap-3">
          <Link className="btn" href="/magazine">Read Magazine</Link>
          <Link className="btn" href="/shop">Shop Prints & Merch</Link>
        </div>
      </div>

      {/* Feature blocks */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Latest Projects</h2>
          <p className="text-sm text-brand-muted mb-4">Cinematography, creative direction, design.</p>
          <Link className="btn" href="/projects">View Projects</Link>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Culture & Releases</h2>
          <p className="text-sm text-brand-muted mb-4">Music videos, fashion drops, film, artists.</p>
          <Link className="btn" href="/magazine">Explore Magazine</Link>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Prints & Merch</h2>
          <p className="text-sm text-brand-muted mb-4">Photography prints and brand merch.</p>
          <Link className="btn" href="/shop">Browse Shop</Link>
        </div>
      </div>
    </section>
  );
}
