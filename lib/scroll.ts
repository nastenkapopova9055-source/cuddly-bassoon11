export function scrollToId(href: string) {
  if (typeof window === "undefined" || !href.startsWith("#")) return;
  const target = document.querySelector(href);
  if (!target) return;
  const offset = 72 + 16;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
