import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Propuesta de Estructura Web | Demo de Arquitectura',
  description:
    'Visualización detallada de la organización y diseño estructural de una landing page moderna para revisión del cliente.',
  keywords: ['arquitectura web', 'diseño para clientes', 'maquetación funcional', 'propuesta de diseño'],
  openGraph: {
    title: 'Propuesta de Estructura Web',
    description: 'Explore cómo organizamos la información y la experiencia del usuario en su futuro sitio.',
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
