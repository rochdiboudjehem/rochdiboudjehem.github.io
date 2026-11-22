// Builds web versions of the artwork originals.
//
//   artwork-originals/<group>/<name>.<ext>
//     → public/images/artist/thumb/<name>.webp  (long side 600px, gallery)
//     → public/images/artist/large/<name>.webp  (long side 2400px, lightbox)
//     → public/images/artist/full/<name>.jpg    (original resolution, zoom)
//   + src/artworkSizes.json (pixel sizes the lightbox needs)
//
// EXIF orientation is applied; all metadata (GPS, camera, ...) is stripped.
// Files whose outputs are newer than the original are skipped.
// Usage: npm run images   (also runs before build and dev)

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(root, 'artwork-originals');
const OUT = path.join(root, 'public', 'images', 'artist');
const SIZES_FILE = path.join(root, 'src', 'artworkSizes.json');
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff']);

const variants = [
  { dir: 'thumb', ext: '.webp', longSide: 600, encode: (img) => img.webp({ quality: 82 }) },
  { dir: 'large', ext: '.webp', longSide: 2400, encode: (img) => img.webp({ quality: 85 }) },
  { dir: 'full', ext: '.jpg', longSide: null, encode: (img) => img.jpeg({ quality: 92, mozjpeg: true, chromaSubsampling: '4:4:4' }) },
];

const mtime = async (file) => {
  try {
    return (await fs.stat(file)).mtimeMs;
  } catch {
    return 0;
  }
};

async function listOriginals() {
  const files = [];
  for (const group of await fs.readdir(SRC, { withFileTypes: true })) {
    if (!group.isDirectory()) continue;
    for (const f of await fs.readdir(path.join(SRC, group.name), { withFileTypes: true })) {
      const ext = path.extname(f.name).toLowerCase();
      if (!f.isFile() || !EXTENSIONS.has(ext)) continue;
      const name = path.basename(f.name, path.extname(f.name));
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name)) {
        throw new Error(`Bad file name "${group.name}/${f.name}": use lowercase letters, digits and hyphens only.`);
      }
      files.push({ group: group.name, name, file: path.join(SRC, group.name, f.name) });
    }
  }
  return files;
}

async function main() {
  const originals = await listOriginals();
  const seen = new Map();
  for (const o of originals) {
    if (seen.has(o.name)) throw new Error(`Duplicate name "${o.name}" in ${seen.get(o.name)} and ${o.group}.`);
    seen.set(o.name, o.group);
  }
  await Promise.all(variants.map((v) => fs.mkdir(path.join(OUT, v.dir), { recursive: true })));

  const sizes = {};
  let built = 0;
  for (const o of originals) {
    const srcTime = await mtime(o.file);
    sizes[o.name] = {};
    for (const v of variants) {
      const out = path.join(OUT, v.dir, o.name + v.ext);
      if ((await mtime(out)) <= srcTime) {
        // .rotate() with no argument applies the EXIF orientation; metadata is not copied.
        let img = sharp(o.file, { failOn: 'error' }).rotate();
        if (v.longSide) img = img.resize({ width: v.longSide, height: v.longSide, fit: 'inside', withoutEnlargement: true });
        await v.encode(img.toColorspace('srgb')).toFile(out);
        built++;
      }
      const meta = await sharp(out).metadata();
      sizes[o.name][v.dir] = { width: meta.width, height: meta.height };
    }
  }

  // Remove web versions whose original was deleted.
  for (const v of variants) {
    for (const f of await fs.readdir(path.join(OUT, v.dir))) {
      if (!seen.has(path.basename(f, path.extname(f)))) await fs.rm(path.join(OUT, v.dir, f));
    }
  }

  const json = JSON.stringify(sizes, null, 2) + '\n';
  const previous = await fs.readFile(SIZES_FILE, 'utf8').catch(() => '');
  if (json !== previous) await fs.writeFile(SIZES_FILE, json);

  console.log(`images: ${originals.length} originals, ${built} file(s) written, ${originals.length * variants.length - built} up to date.`);
}

main().catch((err) => {
  console.error(`images: ${err.message}`);
  process.exit(1);
});
