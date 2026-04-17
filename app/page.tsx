'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BarChart3, Lightbulb, Mail, Rocket, Twitter, Linkedin, Github } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { ProjectCard } from '@/components/project-card';
import { SectionHeader } from '@/components/section-header';
import { ValueItem } from '@/components/value-item';

const projects = [
  {
    title: 'Arquitectura App Router',
    description: 'Utiliza el sistema de enrutamiento moderno de Next.js 14, donde cada carpeta en "app" define una ruta y los layouts manejan el estado compartido.',
  },
  {
    title: 'Componentes Modulares',
    description: 'La carpeta "components" contiene elementos de UI reutilizables como tarjetas, cabeceras y secciones animadas para mantener el código DRY.',
  },
  {
    title: 'Estilos con Tailwind CSS',
    description: 'Configuración optimizada en tailwind.config.ts y globals.css que permite un diseño responsivo y moderno mediante clases de utilidad.',
  },
  {
    title: 'Animaciones de Interfaz',
    description: 'Implementación de Framer Motion para entradas suaves y transiciones visuales que mejoran la experiencia del usuario al hacer scroll.',
  },
];

const values = [
  {
    title: 'Componentes Reutilizables',
    description: 'Diseñados para ser modulares, permitiendo una consistencia visual en todo el sitio y facilitando el mantenimiento del código.',
    icon: <Lightbulb className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: 'Secciones Animadas',
    description: 'Utiliza Framer Motion para entradas suaves, lo que guía la atención del usuario mientras navega por el contenido.',
    icon: <Rocket className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: 'Diseño Adaptable',
    description: 'Cada parte del sitio está optimizada para verse perfectamente en dispositivos móviles, tablets y computadoras de escritorio.',
    icon: <BarChart3 className="h-5 w-5" aria-hidden="true" />,
  },
];

const stats = [
  { label: 'Tiempo de Carga', value: '< 1s' },
  { label: 'Puntuación SEO', value: '100/100' },
  { label: 'Accesibilidad', value: 'AA+' },
  { label: 'Tasa de Conversión', value: 'Optimizado' },
];

export default function HomePage() {
  return (
    <main>
      <AnimatedSection id="hero" className="section-shell flex min-h-screen items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">Cabecera de la Página (Hero Section)</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-900 md:text-7xl">
            La puerta de entrada a tu sitio web
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Esta sección (Hero) es el primer contacto del usuario. Su función es comunicar de inmediato la propuesta de valor y guiar hacia las acciones principales del sitio.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Explorar estructura
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-400"
            >
              Ir a conversión
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="about" className="section-shell border-t border-zinc-200">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeader
              title="Sección de Introducción"
              subtitle="Aquí se profundiza en la narrativa del sitio, proporcionando contexto adicional que genera confianza y establece una conexión con el visitante."
            />
            <p className="mt-6 text-base leading-relaxed text-zinc-600">
              Esta parte utiliza una cuadrícula (grid) para combinar texto persuasivo con elementos visuales, logrando un equilibrio entre información y diseño moderno.
            </p>
          </div>
          <div className="card p-3">
            <Image
              src="/profile-placeholder.svg"
              alt="Marcador de posición de retrato"
              width={640}
              height={800}
              className="h-auto w-full rounded-2xl"
              priority
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="projects" className="section-shell border-t border-zinc-200">
        <SectionHeader
          title="Arquitectura de Información"
          subtitle="Cada bloque está estructurado para presentar datos complejos de manera digerible mediante tarjetas modulares y jerarquías claras."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} title={project.title} description={project.description} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="value" className="section-shell border-t border-zinc-200">
        <SectionHeader
          title="Elementos de Valor (Features)"
          subtitle="Se utilizan para destacar los beneficios clave o características técnicas, empleando iconos y descripciones breves de alto impacto."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <ValueItem key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="social-proof" className="section-shell border-t border-zinc-200">
        <SectionHeader title="Sección de Datos y Credibilidad" subtitle="Muestra métricas reales para validar la autoridad y el éxito del proyecto ante los ojos del visitante." />
        <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card text-center">
              <dt className="text-sm text-zinc-500">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </AnimatedSection>

      <AnimatedSection id="contact" className="section-shell border-t border-zinc-200">
        <div className="card mx-auto max-w-2xl text-center">
          <SectionHeader
            title="Sección de Conversión (Call to Action)"
            subtitle="El objetivo final del sitio: capturar el interés del usuario mediante un formulario de suscripción o un botón de contacto directo."
          />
          <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="email" className="sr-only">
              Dirección de correo electrónico
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="tu@ejemplo.com"
              className="h-12 flex-1 rounded-full border border-zinc-300 px-5 text-sm outline-none ring-accent transition focus:ring-2"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-white transition hover:bg-violet-700"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Acción principal
            </button>
          </form>
        </div>
      </AnimatedSection>

      <footer className="border-t border-zinc-200">
        <div className="section-shell flex flex-col items-start justify-between gap-8 py-10 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold tracking-tight">Pie de Página (Footer)</p>
            <p className="mt-1 text-sm text-zinc-500">© {new Date().getFullYear()} Información global y legal.</p>
          </div>
          <nav aria-label="Enlaces del pie de página" className="flex flex-wrap items-center gap-6 text-sm text-zinc-600">
            <Link href="#about" className="hover:text-zinc-900">
              Introducción
            </Link>
            <Link href="#projects" className="hover:text-zinc-900">
              Arquitectura
            </Link>
            <Link href="#contact" className="hover:text-zinc-900">
              Conversión
            </Link>
          </nav>
          <div className="flex items-center gap-3 text-zinc-600">
            <Link href="#" aria-label="Red Social 1" className="rounded-full p-2 hover:bg-zinc-100 hover:text-zinc-900">
              <Twitter className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="#" aria-label="Red Social 2" className="rounded-full p-2 hover:bg-zinc-100 hover:text-zinc-900">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="#" aria-label="Red Social 3" className="rounded-full p-2 hover:bg-zinc-100 hover:text-zinc-900">
              <Github className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
