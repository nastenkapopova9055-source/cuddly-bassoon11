import type { ReactNode } from "react";

type SectionLabelProps = {
  icon: string;
  children: ReactNode;
  center?: boolean;
};

export default function SectionLabel({ icon, children, center }: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-brand ${
        center ? "mx-auto" : ""
      }`}
    >
      <i className={`fas ${icon}`} aria-hidden />
      <span>{children}</span>
    </div>
  );
}
