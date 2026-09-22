import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";

const columns = [
  {
    title: "Platform",
    links: ["Features", "Integrations", "Automations", "Security", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API reference", "Community", "Status"],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "https://tegence.com/privacy" },
      { label: "Terms", href: "https://tegence.com/terms" },
    ],
  },
];

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/tegence/",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/tegence_ai",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#05060a] pb-10 pt-16">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <a href="#top" className="flex items-center">
              <Image
                src="/logo-white.png"
                alt="Praxis"
                width={822}
                height={303}
                className="h-9 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              The operating system behind your people, processes, and
              performance. Designed for organizations that outgrow their tools.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-white"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[13px] font-semibold uppercase tracking-wider text-slate-400">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => {
                  const href =
                    typeof link === "string" ? "#top" : link.href;
                  const label = typeof link === "string" ? link : link.label;
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        target={
                          typeof link !== "string" ? "_blank" : undefined
                        }
                        rel={
                          typeof link !== "string"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm text-slate-500 transition-colors hover:text-white"
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-[13px] text-slate-600">
            © {new Date().getFullYear()} Praxis · Enterprise Edition. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2 text-[13px] text-slate-600">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}