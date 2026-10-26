import GhostLink from "@/components/ui/GhostLink";
import type { LegalDocument } from "@/data/legal";

interface LegalPageProps {
  document: LegalDocument;
  related: { label: string; href: string };
}

export default function LegalPage({ document, related }: LegalPageProps) {
  return (
    <article className="section-gutter pt-40 pb-32">
      <header className="max-w-3xl mb-20">
        <span className="text-xs uppercase tracking-widest text-ice-cyan/50 block mb-6">
          {document.eyebrow}
        </span>
        <h1
          className="font-light text-ice-cyan mb-8"
          style={{ fontSize: "clamp(40px, 6vw, 50px)", lineHeight: 1.06 }}
        >
          {document.title}
        </h1>
        <p className="text-base text-ice-cyan/70 leading-relaxed mb-6">
          {document.intro}
        </p>
        <p className="text-sm text-ice-cyan/40">
          Last updated: {document.lastUpdated}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <nav
          aria-label={`${document.title} contents`}
          className="md:col-span-4 lg:col-span-3 md:sticky md:top-32 md:self-start"
        >
          <h2 className="text-xs uppercase tracking-widest text-ice-cyan/40 mb-6">
            Contents
          </h2>
          <ol className="flex flex-col gap-3 text-sm">
            {document.sections.map((section, index) => (
              <li key={section.id} className="flex gap-3">
                <span className="text-ice-cyan/40 tabular-nums w-5 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <GhostLink href={`#${section.id}`} className="self-start">
                  {section.title}
                </GhostLink>
              </li>
            ))}
          </ol>
        </nav>

        <div className="md:col-span-8 lg:col-span-8 lg:col-start-5 max-w-2xl space-y-16">
          {document.sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              className="scroll-mt-32"
            >
              <h2
                id={`${section.id}-heading`}
                className="font-light text-ice-cyan mb-6"
                style={{ fontSize: "30px", lineHeight: 1.22 }}
              >
                <span className="text-ice-cyan/40 text-base tabular-nums mr-4 align-middle">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.body.map((block, blockIndex) =>
                  typeof block === "string" ? (
                    <p
                      key={blockIndex}
                      className="text-base text-ice-cyan/70 leading-relaxed"
                    >
                      {block}
                    </p>
                  ) : (
                    <ul key={blockIndex} className="space-y-2">
                      {block.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-base text-ice-cyan/70 leading-relaxed"
                        >
                          <span aria-hidden className="text-ice-cyan/40">
                            —
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            </section>
          ))}

          <div className="pt-8 border-t border-ice-cyan/10 text-sm text-ice-cyan/60">
            Also see our <GhostLink href={related.href}>{related.label}</GhostLink>.
          </div>
        </div>
      </div>
    </article>
  );
}
