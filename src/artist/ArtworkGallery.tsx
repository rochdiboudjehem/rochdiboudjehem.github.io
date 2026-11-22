import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { isKnown, type Artwork } from "../artistData";
import artworkSizes from "../artworkSizes.json";

// Web versions written by `npm run images` (scripts/build-images.mjs).
const BASE = "/images/artist";
type Size = { width: number; height: number };
const sizes = artworkSizes as Record<string, { thumb: Size; large: Size; full: Size }>;

const url = {
  thumb: (f: string) => `${BASE}/thumb/${f}.webp`,
  large: (f: string) => `${BASE}/large/${f}.webp`,
  full: (f: string) => `${BASE}/full/${f}.jpg`,
};

/** Lightbox description: every known detail of the work, one per line. */
const describe = (a: Artwork) =>
  [a.style, a.technique, a.year, a.event, a.dimensions].filter(isKnown).join("\n");

const labels = {
  Previous: "العمل السابق",
  Next: "العمل التالي",
  Close: "إغلاق",
  "Zoom in": "تكبير",
  "Zoom out": "تصغير",
  Lightbox: "عارض الصور",
  Carousel: "الأعمال",
  Slide: "عمل",
};

interface ArtworkGalleryProps {
  items: Artwork[];
  /** Accessible name of the gallery */
  label: string;
  /** "posters": side-by-side X-banners; "cards": white cards with captions (calligraphy) */
  variant: "posters" | "cards";
}

/** Responsive gallery of artworks; clicking one opens a zoomable lightbox. */
const ArtworkGallery: React.FC<ArtworkGalleryProps> = ({ items, label, variant }) => {
  const [index, setIndex] = useState(-1);

  // Only works that have been processed by `npm run images`.
  const works = items.filter((a) => {
    if (sizes[a.file]) return true;
    console.warn(`Artwork "${a.file}" has no web version: add the file to artwork-originals/ and run npm run images.`);
    return false;
  });

  const slides = works.map((a) => {
    const s = sizes[a.file];
    return {
      src: url.large(a.file),
      width: s.large.width,
      height: s.large.height,
      alt: a.alt,
      title: a.title,
      description: describe(a),
      // The zoom plugin switches to the full-resolution file when zooming in.
      srcSet: [
        { src: url.large(a.file), width: s.large.width, height: s.large.height },
        ...(s.full.width > s.large.width ? [{ src: url.full(a.file), width: s.full.width, height: s.full.height }] : []),
      ],
    };
  });

  return (
    <>
      <ul className={`gallery gallery--${variant}`} aria-label={label}>
        {works.map((a, i) => {
          const t = sizes[a.file].thumb;
          return (
            <li key={a.file}>
              <figure className="artwork">
                <button type="button" className="artwork__frame" onClick={() => setIndex(i)} aria-label={`تكبير: ${a.title}`}>
                  <img src={url.thumb(a.file)} width={t.width} height={t.height} alt={a.alt} loading="lazy" decoding="async" />
                </button>
                {variant === "cards" && (
                  <figcaption className="artwork__caption">
                    <span className="artwork__title">{a.title}</span>
                    <span className="artwork__style">{a.style}</span>
                    {isKnown(a.technique) && <span className="artwork__note">{a.technique}</span>}
                  </figcaption>
                )}
              </figure>
            </li>
          );
        })}
      </ul>

      <Lightbox
        open={index >= 0}
        index={Math.max(index, 0)}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Zoom, Captions]}
        labels={labels}
        carousel={{ finite: slides.length <= 1 }}
        zoom={{ maxZoomPixelRatio: 2, scrollToZoom: true, doubleClickMaxStops: 2 }}
        captions={{ descriptionTextAlign: "center", descriptionMaxLines: 6 }}
        controller={{ closeOnBackdropClick: true }}
        className="artist-lightbox"
      />
    </>
  );
};

export default ArtworkGallery;
