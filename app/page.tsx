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
    title: 'Estrategia que vende',
    description: 'Diseño sistemas de ofertas y contenidos que conectan los puntos de dolor de la audiencia con resultados claros.',
    icon: <Lightbulb className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: 'Construye con rapidez',
    description: 'Me enfoco en la ejecución práctica para que los creadores puedan probar ideas rápidamente y lanzar con confianza.',
    icon: <Rocket className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: 'Mide lo que importa',
    description: 'Rastreo señales de crecimiento y métricas de producto para mejorar la conversión, retención y el compromiso.',
    icon: <BarChart3 className="h-5 w-5" aria-hidden="true" />,
  },
];

const stats = [
  { label: 'Seguidores', value: '100K+' },
  { label: 'Vistas de Contenido', value: '1M+' },
  { label: 'Productos Lanzados', value: '45+' },
  { label: 'Satisfacción del Cliente', value: '98%' },
];

export default function HomePage() {
  return (
    <main>
      <AnimatedSection id="hero" className="section-shell flex min-h-screen items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">Estratega de Productos para Creadores</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-900 md:text-7xl">
            Ayudo a creadores a construir productos digitales
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Me asocio con creadores para dar forma a sus ideas, crear experiencias premium y convertir la confianza de la audiencia en productos digitales escalables.
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
              Reservar una llamada
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="about" className="section-shell border-t border-zinc-200">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeader
              title="Sobre mí"
              subtitle="Soy un creador con mentalidad de producto enfocado en construir sistemas simples que ayudan a las personas a lanzar, crecer y monetizar ideas digitales sin complejidad innecesaria."
            />
            <p className="mt-6 text-base leading-relaxed text-zinc-600">
              En los últimos años, he trabajado con creadores, coaches y educadores para convertir su experiencia en productos limpios y de alta conversión. Mi enfoque combina estrategia, storytelling y ejecución.
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
          title="Estructura del Sitio"
          subtitle="Una descripción técnica de los pilares que sostienen esta arquitectura web."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} title={project.title} description={project.description} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="value" className="section-shell border-t border-zinc-200">
        <SectionHeader
          title="Cómo aporto valor"
          subtitle="Ayudo a los creadores a simplificar la creación de productos para que cada acción impulse el crecimiento de la marca a largo plazo."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <ValueItem key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="social-proof" className="section-shell border-t border-zinc-200">
        <SectionHeader title="Prueba social" subtitle="Con la confianza de una audiencia creciente y negocios liderados por creadores." />
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
            title="Construyamos tu próximo producto digital"
            subtitle="Recibe información ocasional y manuales de lanzamiento directamente en tu bandeja de entrada."
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
              Unirse al boletín
            </button>
          </form>
        </div>
      </AnimatedSection>

      <footer className="border-t border-zinc-200">
        <div className="section-shell flex flex-col items-start justify-between gap-8 py-10 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold tracking-tight">Demo Marca Personal</p>
            <p className="mt-1 text-sm text-zinc-500">© {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
          <nav aria-label="Enlaces del pie de página" className="flex flex-wrap items-center gap-6 text-sm text-zinc-600">
            <Link href="#about" className="hover:text-zinc-900">
              Sobre mí
            </Link>
            <Link href="#projects" className="hover:text-zinc-900">
              Estructura
            </Link>
            <Link href="#contact" className="hover:text-zinc-900">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-3 text-zinc-600">
            <Link href="#" aria-label="Twitter" className="rounded-full p-2 hover:bg-zinc-100 hover:text-zinc-900">
              <Twitter className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="rounded-full p-2 hover:bg-zinc-100 hover:text-zinc-900">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="#" aria-label="GitHub" className="rounded-full p-2 hover:bg-zinc-100 hover:text-zinc-900">
              <Github className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
