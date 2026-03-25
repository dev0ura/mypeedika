import { MessageSquare, Languages, ShoppingCart, BadgeCheck, Users, BarChart3, type LucideIcon } from 'lucide-react';

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: MessageSquare, title: 'No More DM Chaos', desc: 'AI handles customer replies on Instagram and WhatsApp instantly — 24/7, no manual work.' },
  { icon: Languages,    title: 'Speaks the Language', desc: 'Understands mixed vernacular messages naturally, so every customer feels heard.' },
  { icon: ShoppingCart, title: 'In-Chat Checkout', desc: 'Share payment links and confirm orders without the customer ever leaving the chat.' },
  { icon: BadgeCheck,   title: 'Instant Payment Confirm', desc: 'Payments verified in-chat automatically. No manual bank-checking, ever again.' },
  { icon: Users,        title: 'Centralised CRM', desc: 'Every conversation, order and customer profile in one clean, searchable dashboard.' },
  { icon: BarChart3,    title: 'Built-in Analytics', desc: 'Revenue, inventory and sales insights ready to use — no spreadsheets needed.' },
];

export function Features() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">

        {/* Editorial headline — Cohere style */}
        <div className="max-w-4xl mb-20">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#00BFA5] mb-5">
            Why sellers choose us
          </p>
          <h2 className="text-[44px] sm:text-[56px] lg:text-[64px] font-bold text-[#0A0A0A] leading-[1.05] tracking-[-2px] mb-7">
            We build high-performance<br />AI commerce for ambitious<br />Indian businesses.
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              Manage sales, inventory, and customer experience from one central backend — whether you sell on WhatsApp, Instagram, or your own store.
            </p>
            <a
              href="https://cal.com/rabeeh0ta/mypeedika-demo"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center text-sm font-semibold text-[#07090A] px-5 py-3 rounded-full border border-[#0A0A0A]/15 hover:bg-black hover:text-white transition-colors whitespace-nowrap"
            >
              See it in action →
            </a>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white p-8 group hover:bg-gray-50 transition-colors duration-200">
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-5"
                style={{ background: 'linear-gradient(135deg,#00BCD4,#7ED321)' }}
              >
                <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="text-sm font-semibold text-[#0A0A0A] mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
