export default function Footer() {
  return (
    <footer className="bg-ink text-cream/60 px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs uppercase tracking-widest border-t border-cream/10">
      <span>© Eurus — {new Date().getFullYear()}</span>
      <span>ACCESS → SUCCESS</span>
    </footer>
  )
}
