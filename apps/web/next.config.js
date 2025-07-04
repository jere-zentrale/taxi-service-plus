// apps/web/next.config.js

/**
 * @type {import('next').NextConfig}
 *
 * Dies ist die Hauptkonfigurationsdatei für deine Next.js-App.
 * Du kannst hier Umgebungsvariablen, Pfade, Image-Optimierung u.v.m. einstellen.
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Hier kannst du ggf. einen Basis-Pfad festlegen, z.B. if deployed in a subdirectory
  // basePath: '',

  // Umgebungsvariablen, die im Browser verfügbar sein sollen,
  // werden automatisch für Variablen mit NEXT_PUBLIC_* bereitgestellt.
  // Wenn du andere envs zur Build-Zeit brauchst, kannst du sie so angeben:
  // env: {
  //   NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  // },

  // Beispiel für Bildoptimierung, falls du externe Domains zulassen willst:
  // images: {
  //   domains: ['example.com', 'assets.vercel.com'],
  // },
}

module.exports = nextConfig;