export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-6 text-sm text-brand-muted">
        © {new Date().getFullYear()} RAW Explicit · All rights reserved
      </div>
    </footer>
  );
}
