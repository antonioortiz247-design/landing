import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Guía de Estructura Web | Análisis de Componentes',
  description:
    'Un sitio educativo que desglosa cada sección de una landing page moderna, explicando su función y arquitectura técnica.',
  keywords: ['estructura web', 'diseño de interfaces', 'next.js', 'componentes react', 'educación técnica'],
  openGraph: {
    title: 'Guía de Estructura Web',
    description: 'Aprende cómo se construye una landing page profesional sección por sección.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
