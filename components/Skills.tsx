"use client";

import { Tabs } from "antd";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { skills } from "@/lib/content";

export default function Skills() {
  const items = skills.map((group) => ({
    key: group.key,
    label: group.tab,
    children: (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {group.items.map((skill) => (
          <div
            key={skill.title}
            className="flex items-start gap-4 rounded-card bg-white p-5 shadow-sm"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-lg text-brand">
              <i className={`fas ${skill.icon}`} />
            </div>
            <div>
              <h4 className="font-semibold text-ink">{skill.title}</h4>
              <p className="text-sm text-muted">{skill.text}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <section id="skills" className="section-anchor bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel icon="fa-lightbulb" center>
              Навыки
            </SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Что нужно знать и уметь
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-muted">
              Мы ценим как технические знания, так и личные качества. Готовы
              обучать мотивированных кандидатов с нуля.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <Tabs defaultActiveKey="tech" items={items} centered />
        </Reveal>
      </div>
    </section>
  );
}
