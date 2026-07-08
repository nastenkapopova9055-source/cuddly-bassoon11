import { footerCols, footerSocial } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-xl font-extrabold">
            ЭР-Телеком <span className="text-accent">Холдинг</span>
          </div>
          <p className="mt-4 text-sm text-white/60">
            Крупнейший оператор широкополосного доступа в интернет и цифрового
            телевидения в России. Работаем под брендами «Дом.ru» и «Дом.ru
            Бизнес».
          </p>
          <div className="mt-5 flex gap-3">
            {footerSocial.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <div className="mb-4 text-sm font-bold uppercase tracking-wide text-white/80">
              {col.title}
            </div>
            <div className="flex flex-col gap-2">
              {col.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        &copy; 2026 АО «ЭР-Телеком Холдинг». Все права защищены.
      </div>
    </footer>
  );
}
