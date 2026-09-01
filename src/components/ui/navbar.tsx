"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo";
import { NAV, CONTACT } from "@/data/site";
import styles from "./navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`${styles.header} site-header`}
        style={{ background: "transparent" }}
      >
        <div className={styles.wrap}>
          <div className={styles.bar}>
          <Link href="/" aria-label="myPeedika home" className={styles.home}>
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center" style={{ gap: 36 }}>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-0.01em" }}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className={`btn site-header__contact ${styles.contact}`}
          >
            Contact us
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden"
            style={{
              background: "transparent",
              border: "none",
              padding: 8,
              cursor: "pointer",
              color: "var(--ink)",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
          </div>

          {open && (
            <div className={`${styles.panel} md:hidden`}>
              <div className="flex flex-col" style={{ gap: 4 }}>
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{
                      fontSize: 22,
                      fontWeight: 600,
                      letterSpacing: "-0.03em",
                      paddingBlock: 10,
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${styles.contact}`}
                  style={{ marginBlockStart: 16 }}
                  onClick={() => setOpen(false)}
                >
                  Contact us
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
      {pathname !== "/" && <div className={styles.spacer} aria-hidden="true" />}
    </>
  );
}
