# X-banner (roll-up) designs — full-resolution originals

Put the **original, full-resolution** file of each X-banner design here.

## Naming rule

- One file per work.
- Lowercase, no spaces, words separated by hyphens: `ncneti-2025-1.jpg`, `ncneti-2025-2.jpg`
- Accepted formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.tif`, `.tiff`
- The file name (without extension) is the work's id. It must match the `file` field
  of its entry in `src/artistData.ts` (list `banners`).

## Adding a new work

1. Copy the file here, named as above.
2. Add one entry to the `banners` list in `src/artistData.ts`.
3. Run `npm run images` (it also runs automatically before `npm run build`).

The script writes the web versions to `public/images/artist/{thumb,large,full}/`.
It keeps the EXIF orientation and removes all metadata (GPS, camera, etc.).

> The files currently here are low-resolution placeholders extracted from the PDF CV.
> Replace them with your originals, keeping the same names.
