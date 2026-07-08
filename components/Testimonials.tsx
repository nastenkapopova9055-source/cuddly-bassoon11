import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-anchor bg-brand-light/40 py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel icon="fa-quote-right" center>
              Отзывы
            </SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Говорят наши инженеры
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-muted">
              Реальные истории сотрудников, которые начинали свой путь с позиции
              сервисного инженера радиосети.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Reveal key={t.name}>
              <div className="relative h-full rounded-card bg-white p-6 shadow-md">
                <span
                  className={`dancer ${t.delay}`}
                  role="img"
                  aria-label={t.gender === "female" ? "Танцует женщина" : "Танцует мужчина"}
                >
                  {t.emoji}
                </span>
                <div className="mb-3 text-3xl text-brand/20">
                  <i className="fas fa-quote-left" />
                </div>
                <p className="text-sm leading-relaxed text-muted">{t.text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-ink">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
