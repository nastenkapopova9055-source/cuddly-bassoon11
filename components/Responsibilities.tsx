import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { responsibilities } from "@/lib/content";

export default function Responsibilities() {
  return (
    <section id="responsibilities" className="section-anchor bg-brand-light/40 py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel icon="fa-tasks" center>
              Обязанности
            </SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Чем предстоит заниматься
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-muted">
              Ежедневная работа сервисного инженера радиосети включает широкий
              спектр задач — от мониторинга до модернизации оборудования.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {responsibilities.map((card) => (
            <Reveal key={card.title}>
              <div className="h-full rounded-card bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-xl text-white">
                  <i className={`fas ${card.icon}`} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
