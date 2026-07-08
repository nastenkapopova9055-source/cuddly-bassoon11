"use client";

import { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { navLinks } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        height: "var(--header-height)",
        background: scrolled ? "rgba(255,255,255,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="mx-auto flex h-full max-w-content items-center justify-between px-6">
        <a
          href="#hero"
          className="flex items-center gap-2 font-extrabold text-ink"
          style={{ color: scrolled ? "#1a1a2e" : "#fff" }}
        >
          <img
            src="https://www.ertelecom.ru/favicon.ico"
            alt="ЭР-Телеком"
            className="h-7 w-7 rounded"
          />
          <span className="hidden sm:inline">ЭР-Телеком Холдинг</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-brand"
              style={{ color: scrolled ? "#1a1a2e" : "rgba(255,255,255,0.85)" }}
            >
              {link.label}
            </a>
          ))}
          <Button type="primary" href="#career">
            Стать частью команды
          </Button>
        </nav>

        <div className="md:hidden">
          <Button
            type="text"
            aria-label="Меню"
            icon={open ? <CloseOutlined /> : <MenuOutlined />}
            onClick={() => setOpen((v) => !v)}
            style={{ color: scrolled ? "#1a1a2e" : "#fff", fontSize: 20 }}
          />
        </div>
      </div>

      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        styles={{ body: { padding: 16 } }}
        title="Меню"
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-brand-light"
            >
              {link.label}
            </a>
          ))}
          <Button type="primary" href="#career" block onClick={() => setOpen(false)}>
            Стать частью команды
          </Button>
        </nav>
      </Drawer>
    </header>
  );
}
