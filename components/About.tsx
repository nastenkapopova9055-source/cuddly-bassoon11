import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { aboutFeatures } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="section-anchor bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <Reveal>
            <SectionLabel icon="fa-info-circle">О профессии</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Кто такой сервисный инженер радиосети?
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-5 text-muted">
              Сервисный инженер радиосети — это специалист, отвечающий за
              эксплуатацию, диагностику и ремонт оборудования радиодоступа. Это
              ключевая роль в обеспечении качественной и бесперебойной работы
              сети GPON и FTTB.
            </p>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-muted">
              Ты будешь работать с современным телекоммуникационным
              оборудованием, системами мониторинга и управления сетью. Каждый
              день — новые задачи и возможности для профессионального роста.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {aboutFeatures.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2 rounded-xl bg-brand-light px-3 py-3 text-sm font-medium text-brand"
                >
                  <i className={`fas ${f.icon}`} />
                  {f.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="order-first lg:order-none">
          <div className="flex h-72 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-light to-white shadow-md sm:h-96">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-5xl text-white">
                <i className="fas fa-network-wired" />
              </div>
              <p className="text-lg font-semibold text-ink">Современная сеть связи</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
