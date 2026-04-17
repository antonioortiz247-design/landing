import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Demo Marca Personal | Estratega de Productos para Creadores',
  description:
    'Sitio web de demostración de marca personal que muestra hero, proyectos, propuesta de valor, prueba social y captura de clientes potenciales.',
  keywords: ['marca personal', 'economía de creadores', 'productos digitales', 'demo de portafolio'],
  openGraph: {
    title: 'Demo Marca Personal',
    description: 'Un sitio web de marca personal limpio y moderno construido con Next.js.',
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
