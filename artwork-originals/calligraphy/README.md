# Calligraphy works — full-resolution originals

Put a **photo or scan in full resolution** of each calligraphy work here.

## Naming rule

- One file per work.
- Lowercase, no spaces, words separated by hyphens, e.g.
  `inna-anzalnahu-vertical.jpg`, `rabbi-yassir-circular.jpg`, `law-yaalam-mihrab.jpg`
- Accepted formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.tif`, `.tiff`
- The file name (without extension) is the work's id. It must match the `file` field
  of its entry in `src/artistData.ts` (list `calligraphy`).

## Adding a new work

1. Copy the file here, named as above.
2. Add one entry to the `calligraphy` list in `src/artistData.ts`.
3. Run `npm run images` (it also runs automatically before `npm run build`).

The script writes the web versions to `public/images/artist/{thumb,large,full}/`.
It keeps the EXIF orientation and removes all metadata (GPS, camera, etc.).

> The files currently here are low-resolution placeholders extracted from the PDF CV.
> Replace them with your originals, keeping the same names.
