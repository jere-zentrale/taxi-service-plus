// apps/web/src/app/layout.tsx
import './globals.css'
import localFont from 'next/font/local'
import type { Metadata } from 'next'

/**
 * Lokale Einbindung der Schrift „Geist Sans"
 * Die Datei muss unter public/fonts/Geist-Regular.woff2 liegen
 */
const geistSans = localFont({
  src: '/fonts/Geist-Regular.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-geist-sans',
})

/**
 * Lokale Einbindung der Schrift „Geist Mono"
 * Die Datei muss unter public/fonts/GeistMono-Regular.woff2 liegen
 */
const geistMono = localFont({
  src: '/fonts/GeistMono-Regular.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-geist-mono',
})

/**
 * Metadaten deiner Anwendung (erscheint im <head>
 */
export const metadata: Metadata = {
  title: 'ServicePlus Unternehmerportal',                // <-- Hier anpassen
  description: 'Zentrale Plattform und Vermittlungssoftware für Taxiunternehmen', // <-- Hier anpassen
}

/**
 * RootLayout-Komponente
 * Umschließt alle Seiten mit HTML- und Body-Elementen sowie globalen Fonts und Styles
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>  
      <body className="antialiased bg-[var(--color-bg)] text-[var(--color-fg)]">
        {children}  {/* Hier wird deiner Seiteninhalt gerendert */}
      </body>
    </html>
  )
}