"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.svg';

const ChevronDown = () => (
  <svg className="ml-1 w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const Menu = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5" />
  </svg>
);

const X = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

interface DropItem { label: string; href: string; }
interface NavItem { label: string; href?: string; items?: DropItem[]; }

const NAV: NavItem[] = [
  {
    label: 'Products',
    items: [
      { label: 'WebStore', href: '#' },
      { label: 'Chat Agents', href: '#' },
      { label: 'Mobile App', href: '#' },
      { label: 'Shopify Services', href: '#' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Blog', href: '#' },
      { label: 'Guides', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'API Reference', href: '#' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '#' },
];

function Dropdown({ items, open }: { items: DropItem[]; open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.98 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 z-50"
        >
          <div className="bg-[#111318] border border-white/[0.08] rounded-2xl shadow-2xl p-1.5">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/[0.06] rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export const SiteNavbar: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 10));

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(7,9,10,0.95)'
          : 'rgba(7,9,10,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src={logo} alt="myPeedika" width={22} height={22} />
          <span className="text-base font-semibold text-white tracking-tight">myPeedika</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) =>
            item.items ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpen(item.label)}
                onMouseLeave={() => setOpen(null)}
              >
                <button className="flex items-center px-3.5 py-2 text-sm text-white/65 hover:text-white transition-colors rounded-lg hover:bg-white/[0.05]">
                  {item.label}
                  <ChevronDown />
                </button>
                <Dropdown items={item.items} open={open === item.label} />
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-2 text-sm text-white/65 hover:text-white transition-colors rounded-lg hover:bg-white/[0.05]"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://cal.com/rabeeh0ta/mypeedika-demo"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block text-sm text-white/60 hover:text-white transition-colors"
          >
            Book a call
          </a>
          <motion.a
            href="#"
            className="text-sm font-semibold text-[#07090A] px-4 py-2 rounded-full"
            style={{ background: 'linear-gradient(135deg, #00BCD4, #3CC49A 55%, #7ED321)' }}
            whileHover={{ opacity: 0.9, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get started
          </motion.a>
          <button
            className="md:hidden text-white/70 hover:text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/[0.06] overflow-hidden"
            style={{ background: 'rgba(7,9,10,0.98)' }}
          >
            <div className="px-6 py-4 space-y-1">
              {NAV.map((item) =>
                item.items ? (
                  <div key={item.label}>
                    <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white/30">{item.label}</p>
                    {item.items.map((sub) => (
                      <a key={sub.label} href={sub.href} className="block px-3 py-2.5 text-sm text-white/70 hover:text-white rounded-xl hover:bg-white/[0.05] transition-colors" onClick={() => setMobileOpen(false)}>
                        {sub.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a key={item.label} href={item.href} className="block px-3 py-2.5 text-sm text-white/70 hover:text-white rounded-xl hover:bg-white/[0.05] transition-colors" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </a>
                )
              )}
              <div className="pt-3 pb-1">
                <a href="#" className="block text-center text-sm font-semibold text-[#07090A] py-3 rounded-full" style={{ background: 'linear-gradient(135deg, #00BCD4, #3CC49A 55%, #7ED321)' }}>
                  Get started free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SiteNavbar;
