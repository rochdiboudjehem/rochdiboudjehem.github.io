import { useEffect } from "react";
import { artistData as d, banners, calligraphy, type Paragraph } from "../artistData";
import ThemeToggle from "../components/ThemeToggle";
import ViewSwitch from "../components/ViewSwitch";
import ArtworkGallery from "./ArtworkGallery";

/** Renders runs of plain text, bold text and links (see Run in artistData.ts). */
const Inline: React.FC<{ runs: Paragraph }> = ({ runs }) => (
  <>
    {runs.map((r, i) => {
      if (typeof r === "string") return <span key={i}>{r}</span>;
      if ("a" in r) return <a key={i} href={r.href} className="xlink">{r.a}</a>;
      const bold = <strong>{r.b}</strong>;
      return r.href ? <a key={i} href={r.href} className="xlink">{bold}</a> : <span key={i}>{bold}</span>;
    })}
  </>
);

const Para: React.FC<{ runs: Paragraph }> = ({ runs }) => (
  <p className="prose">
    <Inline runs={runs} />
  </p>
);

/** Scroll to #section on load (the content is rendered after the browser tried). */
function useHashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    document.fonts.ready.then(() => document.getElementById(id)?.scrollIntoView({ block: "start" }));
  }, []);
}

const SectionTitle: React.FC<{ children: string }> = ({ children }) => (
  <h2 className="sec-title">
    <span className="sec-title__mark" aria-hidden="true">◆</span>
    {children}
  </h2>
);

function ArtistApp() {
  useHashScroll();

  return (
    <>
      <div className="artist-toolbar">
        <ThemeToggle />
      </div>

      {/* ===================== Page 1 ===================== */}
      <article className="sheet sheet--one">
        <aside className="sidebar">
          <div className="photo-frame">
            <img src="/images/artist/profile.jpg" alt={d.name} width={640} height={800} />
          </div>
          <ViewSwitch current="artist" />

          <section className="side-block">
            <h2 className="side-title">{d.personal.title}</h2>
            <dl className="facts">
              {d.personal.items.map((item) => (
                <div key={item.label} className="facts__item">
                  <dt>{item.label}</dt>
                  {item.lines.map((line) => (
                    <dd key={line}>
                      {item.email ? (
                        <a href={`mailto:${line}`} dir="ltr">
                          {line}
                        </a>
                      ) : item.href ? (
                        <a href={item.href} className="xlink">
                          {line}
                        </a>
                      ) : (
                        line
                      )}
                    </dd>
                  ))}
                </div>
              ))}
            </dl>
          </section>

          <section className="side-block">
            <h2 className="side-title">{d.languages.title}</h2>
            <ul className="diamonds">
              {d.languages.items.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </section>

          <section className="side-block">
            <h2 className="side-title">
              <a href={d.research.href} className="xlink">{d.research.title}</a>
            </h2>
            <ul className="diamonds">
              {d.research.items.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>
        </aside>

        <main className="main">
          <header className="hero">
            <h1 className="hero__name">{d.name}</h1>
            <p className="hero__subtitle">
              <Inline runs={d.subtitle} />
            </p>
            <div className="ornament" aria-hidden="true">
              <span>✦</span>
            </div>
          </header>

          <section className="block" id="about">
            <SectionTitle>{d.about.title}</SectionTitle>
            {d.about.paragraphs.map((p, i) => (
              <Para key={i} runs={p} />
            ))}
          </section>

          <section className="block" id="education">
            <SectionTitle>{d.education.title}</SectionTitle>
            <ol className="edu">
              {d.education.items.map((e) => (
                <li key={e.degree} className="edu__item">
                  <p className="edu__title">
                    {e.year && <span className="edu__year">{e.year}</span>}
                    <a href={d.education.href} className="xlink">{e.degree}</a>
                  </p>
                  <p className="edu__place">{e.place}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="block" id="design">
            <SectionTitle>{d.design.title}</SectionTitle>
            <div className="design">
              <div className="design__text">
                {d.design.paragraphs.map((p, i) => (
                  <Para key={i} runs={p} />
                ))}
              </div>
              <ArtworkGallery items={banners} label={d.design.galleryLabel} variant="posters" />
            </div>
          </section>

          <blockquote className="quote">{d.quote}</blockquote>
        </main>
      </article>

      {/* ===================== Page 2 ===================== */}
      <article className="sheet sheet--two" id="artist">
        <header className="p2-head">
          <h2 className="p2-head__title">{d.artist.title}</h2>
          <p className="p2-head__subtitle">{d.artist.subtitle}</p>
        </header>

        <div className="p2-cols">
          <div className="p2-bio">
            {d.artist.paragraphs.map((p, i) => (
              <Para key={i} runs={p} />
            ))}
          </div>

          <section className="p2-exh" id="exhibitions">
            <SectionTitle>{d.exhibitions.title}</SectionTitle>
            <ol className="exh">
              {d.exhibitions.items.map((e, i) => (
                <li key={i} className="exh__item">
                  <span className="exh__year">{e.year}</span>
                  <div>
                    <p className="exh__title">{e.title}</p>
                    <p className="exh__place">{e.place}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <div id="calligraphy">
          <ArtworkGallery items={calligraphy} label={d.calligraphyLabel} variant="cards" />
        </div>

        <footer className="p2-foot">{d.footer}</footer>
      </article>
    </>
  );
}

export default ArtistApp;
