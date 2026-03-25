const products = [
  {
    label: 'Chat Commerce',
    headline: 'Sell through\nany messenger.',
    body: 'AI replies instantly on WhatsApp and Instagram, understands vernacular, shares product cards, and closes orders in-chat — without a human agent.',
    emoji: '💬',
    accent: '#00BCD4',
    stats: [{ value: '< 2s', label: 'Reply time' }, { value: '24/7', label: 'Coverage' }],
  },
  {
    label: 'Web Store',
    headline: 'Your brand.\nYour store.',
    body: 'Launch a fully customised Shopify storefront. Beautiful design, fast checkout, SEO-ready — built to convert browsers into buyers.',
    emoji: '🌐',
    accent: '#3CC49A',
    stats: [{ value: '7 days', label: 'Go-live' }, { value: '100%', label: 'Branded' }],
  },
  {
    label: 'Mobile App',
    headline: 'Native apps.\nYour way.',
    body: 'Reach mobile-first customers with beautiful iOS and Android apps, shipped to the app stores and branded exactly to your identity.',
    emoji: '📱',
    accent: '#7ED321',
    stats: [{ value: 'iOS + Android', label: 'Platforms' }, { value: '4.8★', label: 'Avg rating' }],
  },
];

export function Products() {
  return (
    <section className="py-28 md:py-36" style={{ background: '#07090A' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#3CC49A] mb-5">
            The platform
          </p>
          <h2 className="text-[44px] sm:text-[56px] font-bold text-white leading-[1.05] tracking-[-2px] mb-6">
            One backend.<br />Every channel.
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Everything connected, consistent, and powered by AI — no matter where your customers shop.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {products.map((p) => (
            <div
              key={p.label}
              className="group rounded-3xl border border-white/[0.07] p-7 flex flex-col transition-colors duration-200 hover:border-white/[0.15]"
              style={{ background: '#0E1114' }}
            >
              {/* Emoji icon with glow */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg"
                style={{ background: `${p.accent}18`, border: `1px solid ${p.accent}30` }}
              >
                {p.emoji}
              </div>

              <p className="text-[11px] font-semibold uppercase tracking-[2.5px] mb-3" style={{ color: p.accent }}>
                {p.label}
              </p>

              <h3
                className="text-2xl font-bold text-white leading-tight tracking-tight mb-4 whitespace-pre-line"
              >
                {p.headline}
              </h3>

              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">{p.body}</p>

              {/* Stats row */}
              <div className="flex gap-6 pt-6 border-t border-white/[0.07]">
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-white text-base font-bold">{s.value}</p>
                    <p className="text-white/35 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
