import sharp from "sharp";
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const BASE = "public/assets";

const conversiones = [
  {
    src: `${BASE}/portafolio-i/academico/proyecto-integrador1.heic`,
    out: `${BASE}/portafolio-i/academico/p1-academico-proyecto-integrador1.jpg`,
  },
  {
    src: `${BASE}/portafolio-i/artistico/encuentro 03.HEIC`,
    out: `${BASE}/portafolio-i/artistico/p1-artistico-encuentro-03.jpg`,
  },
  {
    src: `${BASE}/portafolio-i/artistico/presentacion de libro.HEIC`,
    out: `${BASE}/portafolio-i/artistico/p1-artistico-presentacion-libro.jpg`,
  },
  {
    src: `${BASE}/portafolio-i/eclesiastico/ministerio solista.PNG`,
    out: `${BASE}/portafolio-i/eclesiastico/p1-eclesiastico-ministerio-solista.jpg`,
    maxWidth: 1200,
  },
  {
    src: `${BASE}/portafolio-ii/eclesiastico/felis sabat.PNG`,
    out: `${BASE}/portafolio-ii/eclesiastico/p2-eclesiastico-felis-sabat.jpg`,
    maxWidth: 1200,
  },
  {
    src: `${BASE}/portafolio-ii/eclesiastico/jovenes adventistas misioneros .HEIC`,
    out: `${BASE}/portafolio-ii/eclesiastico/p2-eclesiastico-jam.jpg`,
  },
  {
    src: `${BASE}/portafolio-ii/artistico/corridos mexicanos.HEIC`,
    out: `${BASE}/portafolio-ii/artistico/p2-artistico-corridos-mexicanos.jpg`,
  },
  {
    src: `${BASE}/portafolio-ii/artistico/velada lirica.HEIC`,
    out: `${BASE}/portafolio-ii/artistico/p2-artistico-velada-lirica.jpg`,
  },
  {
    src: `${BASE}/portafolio-iii/artistico/ellas en concierto.HEIC`,
    out: `${BASE}/portafolio-iii/artistico/p3-artistico-ellas-en-concierto.jpg`,
  },
  {
    src: `${BASE}/foto-perfil/tirzah-kook.JPG`,
    out: `${BASE}/foto-perfil/tirzah-kook.jpg`,
    maxWidth: 900,
  },
];

for (const conversion of conversiones) {
  if (!existsSync(conversion.src)) {
    console.log(`⚠️  No encontrado: ${conversion.src}`);
    continue;
  }

  let inputPath = conversion.src;
  let tempDir = null;

  if (conversion.src.toLowerCase().endsWith(".heic")) {
    tempDir = mkdtempSync(join(tmpdir(), "tirzah-heic-"));
    const tempJpg = join(tempDir, "input.jpg");

    execFileSync("sips", ["-s", "format", "jpeg", conversion.src, "--out", tempJpg], {
      stdio: "inherit",
    });

    inputPath = tempJpg;
  }

  await sharp(inputPath)
    .resize({ width: conversion.maxWidth || 1400, withoutEnlargement: true })
    .jpeg({ quality: 82 })
    .toFile(conversion.out);

  if (tempDir) {
    rmSync(tempDir, { recursive: true, force: true });
  }

  console.log(`✅ ${conversion.out}`);
}

const videos = [
  {
    src: `${BASE}/portafolio-i/academico/10 tips sobrevivir adolescencia.mov`,
    out: `${BASE}/portafolio-i/academico/p1-academico-10-tips-adolescencia.mp4`,
  },
  {
    src: `${BASE}/portafolio-i/eclesiastico/retiro espiritual video.mov`,
    out: `${BASE}/portafolio-i/eclesiastico/p1-eclesiastico-retiro-video.mp4`,
  },
  {
    src: `${BASE}/portafolio-i/artistico/reino y evolucion.MOV`,
    out: `${BASE}/portafolio-i/artistico/p1-artistico-reino-revolucion.mp4`,
  },
];

for (const video of videos) {
  if (!existsSync(video.src)) {
    console.log(`⚠️  No encontrado: ${video.src}`);
    continue;
  }

  execFileSync(
    "ffmpeg",
    [
      "-i",
      video.src,
      "-t",
      "30",
      "-c:v",
      "libx264",
      "-crf",
      "28",
      "-preset",
      "fast",
      "-c:a",
      "aac",
      "-b:a",
      "96k",
      "-y",
      video.out,
    ],
    { stdio: "inherit" },
  );

  console.log(`✅ video: ${video.out}`);
}

const autobioSrc = `${BASE}/foto-autobiografia.JPG`;
const autobioDst = `${BASE}/portafolio-i/autobiografia.jpg`;

if (existsSync(autobioSrc)) {
  await sharp(autobioSrc)
    .resize({ width: 1000, withoutEnlargement: true })
    .jpeg({ quality: 82 })
    .toFile(autobioDst);

  console.log(`✅ autobiografía: ${autobioDst}`);
}

console.log("\n🎉 Procesamiento completo");
