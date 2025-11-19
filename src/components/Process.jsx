export default function Process() {
  const items = [
    { title: 'MVP in 2–4 weeks' },
    { title: 'Enterprise product: 3–6 months' },
    { title: 'Requires active collaboration, clear goals, milestone feedback' },
    { title: 'Dedicated tech team from Big Tech backgrounds' },
  ]
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-semibold text-white">Eligibility & Process</h3>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((i) => (
            <div key={i.title} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur text-white/80">
              {i.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
