"use client";

const col1 = [
  { label: 'WebStore', href: '#' },
  { label: 'Chat Agents', href: '#' },
  { label: 'Mobile App', href: '#' },
  { label: 'Shopify Services', href: '#' },
  { label: 'Pricing', href: '/pricing' },
];

const col2 = [
  { label: 'Blog', href: '#' },
  { label: 'Guides', href: '#' },
  { label: 'Help Center', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];

export default function Footer() {
  return (
    <footer
      className="min-h-screen flex flex-col border-t"
      style={{ background: '#07090A', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      {/* Top section */}
      <div className="flex flex-col gap-14 px-8 pt-16 pb-10 md:flex-row md:justify-between lg:px-16 lg:pt-20">

        {/* Left — tagline */}
        <div className="max-w-xs">
          <p className="text-[11px] font-semibold uppercase tracking-[3px] text-white/30 mb-5">
            Build your store today.
          </p>
          <p className="text-sm text-white/45 leading-relaxed mb-8">
            Sell everywhere your customers are — WhatsApp, Instagram, web and mobile — from one powerful backend.
          </p>
          <a
            href="mailto:contact@mypeedika.com"
            className="block text-sm text-white/50 hover:text-white transition-colors mb-2"
          >
            contact@mypeedika.com
          </a>
          <a
            href="https://instagram.com/mypeedika"
            target="_blank"
            rel="noreferrer"
            className="block text-sm text-white/50 hover:text-white transition-colors"
          >
            @mypeedika
          </a>
          <p className="mt-8 text-xs text-white/20">
            © {new Date().getFullYear()} myPeedika. India.
          </p>
        </div>

        {/* Right — two link columns */}
        <div className="flex gap-16 lg:gap-24">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-white/30 mb-6">
              Products
            </p>
            <ul className="space-y-4">
              {col1.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-white/30 mb-6">
              Company
            </p>
            <ul className="space-y-4">
              {col2.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Giant wordmark — Cohere effect */}
      <div className="w-full overflow-hidden select-none" aria-hidden="true">
        <p
          className="w-full text-center font-black leading-[0.8] tracking-[-0.06em] whitespace-nowrap text-transparent bg-clip-text pr-2"
          style={{
            fontSize: 'clamp(72px, 21vw, 340px)',
            backgroundImage: 'linear-gradient(135deg,#00BCD4 0%,#3CC49A 50%,#7ED321 100%)',
          }}
        >
          myPeedika
        </p>
      </div>
    </footer>
  );
}
