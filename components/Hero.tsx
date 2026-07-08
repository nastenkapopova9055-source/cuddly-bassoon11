import { Button } from "antd";
import { heroStats } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-anchor relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #003d80 0%, #1a2332 100%)",
      }}
    >
      <div className="hero__bg-grid" />
      <div className="hero__circles pointer-events-none absolute inset-0">
        <div
          className="hero__circle"
          style={{ width: 220, height: 220, top: "12%", right: "8%", background: "rgba(0,200,83,0.35)" }}
        />
        <div
          className="hero__circle"
          style={{ width: 160, height: 160, bottom: "14%", left: "6%", background: "rgba(0,86,179,0.5)" }}
        />
        <div
          className="hero__circle"
          style={{ width: 120, height: 120, top: "40%", left: "40%", background: "rgba(255,255,255,0.12)" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 py-28 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Набор на стажировку 2026
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Сервисный инженер
            <br />
            <span className="bg-gradient-to-r from-accent to-emerald-300 bg-clip-text text-transparent">
              радиосети
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/80">
            Строим и обслуживаем сети связи будущего. Присоединяйся к команде
            профессионалов «ЭР-Телеком Холдинг» — лидера телеком-рынка России.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button type="primary" size="large" href="#career">
              <i className="fas fa-paper-plane mr-2" />
              Откликнуться
            </Button>
            <a
              href="#about"
              className="inline-flex items-center rounded-lg border border-white/30 px-6 py-2.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <i className="fas fa-chevron-down mr-2" />
              Узнать больше
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4">
            {heroStats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/5 p-4 text-center backdrop-blur">
                <div className="text-2xl font-extrabold text-white sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-white/60 sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative h-80 w-80">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-8 rounded-full border border-white/10" />
            <div className="absolute inset-16 rounded-full border border-white/10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-full bg-gradient-to-br from-brand to-brand-dark shadow-lg">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-4xl text-white">
                <i className="fas fa-broadcast-tower" />
              </div>
              <div className="flex items-end gap-1.5">
                <span className="signal-bar" />
                <span className="signal-bar" />
                <span className="signal-bar" />
                <span className="signal-bar" />
                <span className="signal-bar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
