import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { benefits } from "@/lib/content";

export default function Benefits() {
  return (
    <section id="benefits" className="section-anchor bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel icon="fa-star" center>
              Преимущества
            </SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Почему выбирают нас
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-muted">
              Мы создаём среду, в которой хочется расти и развиваться. Заботимся
              о сотрудниках и предлагаем лучшие условия в отрасли.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((card) => (
            <Reveal key={card.title}>
              <div className="h-full rounded-card border border-brand-light bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-dark text-xl text-white">
                  <i className={`fas ${card.icon}`} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-ink">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
