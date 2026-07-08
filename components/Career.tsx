import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { careerSteps } from "@/lib/content";

const levelColors: Record<string, string> = {
  junior: "#00c853",
  middle: "#009624",
  senior: "#0056b3",
  lead: "#003d80",
  head: "#7b1fa2",
};

export default function Career() {
  return (
    <section id="career" className="section-anchor bg-brand-light/40 py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel icon="fa-rocket" center>
              Карьерный путь
            </SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Твой рост в компании
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-muted">
              Мы создаём прозрачную систему карьерного развития. От стажёра до
              руководителя направления — каждый шаг подкреплён обучением и
              поддержкой.
            </p>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div
            className="timeline-line absolute left-4 top-2 bottom-2 w-0.5 rounded"
            aria-hidden
          />
          <div className="flex flex-col gap-8">
            {careerSteps.map((step) => (
              <Reveal key={step.level}>
                <div className="relative pl-14">
                  <span
                    className="absolute left-2 top-5 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white"
                    style={{ background: levelColors[step.levelClass] }}
                    aria-hidden
                  />
                  <div className="rounded-card bg-white p-6 shadow-sm">
                    <span
                      className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white"
                      style={{ background: levelColors[step.levelClass] }}
                    >
                      {step.level}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
