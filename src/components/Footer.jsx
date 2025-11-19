export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0AF] via-[#8B5CF6] to-[#FF0080]" />
          <span>The Venice Technologies</span>
        </div>
        <div className="text-sm">© 2025 The Venice Technologies. All Rights Reserved · Legal Terms</div>
      </div>
    </footer>
  )
}
