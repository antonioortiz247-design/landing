'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BarChart3, Lightbulb, Mail, Rocket, Twitter, Linkedin, Github } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { ProjectCard } from '@/components/project-card';
import { SectionHeader } from '@/components/section-header';
import { ValueItem } from '@/components/value-item';
import { ThemeToggle } from '@/components/theme-toggle';

const projects = [
  {
    title: 'Arquitectura de Navegación',
    description: 'Sistema de rutas optimizado que permite una navegación fluida entre secciones, diseñado para guiar al usuario a través de su historia.',
  },
  {
    title: 'Diseño de Interfaz Modular',
    description: 'Uso de componentes estandarizados que garantizan una identidad visual coherente en cada rincón del sitio web.',
  },
  {
    title: 'Optimización de Rendimiento',
    description: 'Infraestructura técnica enfocada en la velocidad de carga, asegurando que los visitantes no tengan esperas innecesarias.',
  },
  {
    title: 'Adaptabilidad Total',
    description: 'Estructura flexible que se ajusta automáticamente a cualquier tamaño de pantalla, desde móviles hasta monitores de gran formato.',
  },
];

const values = [
  {
    title: 'Jerarquía Visual',
    description: 'Organizamos el contenido de manera que los mensajes más importantes capten la atención de inmediato.',
    icon: <Lightbulb className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: 'Interactividad Fluida',
    description: 'Animaciones sutiles que dan vida al sitio y mejoran la retención del usuario sin distraer del mensaje.',
    icon: <Rocket className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: 'Enfoque en Resultados',
    description: 'Cada sección está diseñada con un propósito claro: informar, convencer o capturar una acción del cliente.',
    icon: <BarChart3 className="h-5 w-5" aria-hidden="true" />,
  },
];

const stats = [
  { label: 'Velocidad', value: 'Máxima' },
  { label: 'SEO', value: 'Estructurado' },
  { label: 'Seguridad', value: 'SSL Cert.' },
  { label: 'Soporte', value: 'Multidispositivo' },
];

export default function HomePage() {
  return (
    <main>
      <ThemeToggle />
      
      <div className="scroll">
        <span>scroll</span>
        <div className="divider"></div>
      </div>

      <header>
        <div className="menu">
          <label htmlFor="burger">
            <input type="checkbox" id="burger" />
            <svg className="burger" viewBox="0 0 100 100" width="40">
              <path className="top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
              <path className="middle" d="m 30,50 h 40" />
              <path className="bottom" d="m 30,67 h 40 c 12.796276,0 15.393911,-15.173544 15.393911,-21.883993 0,-6.710449 -2.624242,-22.593232 -15.393911,-22.593232 h -40 v 40" />
            </svg>
          </label>
        </div>
        <nav>
          <ul>
            <li><Link href="#hero">Inicio</Link></li>
            <li><Link href="#about">Concepto</Link></li>
            <li><Link href="#projects">Contenido</Link></li>
            <li><Link href="#contact">Contacto</Link></li>
          </ul>
        </nav>
      </header>

      <section className="masthead" style={{ '--name': '--masthead-s' } as any}>
        <div className="flying-squares">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <h1>Estructura Web</h1>
      </section>

      <AnimatedSection id="hero" className="section-shell flex min-h-screen items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Presentación de Estructura Web</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-7xl">
            Diseño Estructural para su Próximo Proyecto
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Esta es una muestra de cómo organizamos la información y la experiencia del usuario. Cada bloque está pensado para maximizar el impacto de su marca.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Ver Estructura
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600"
            >
              Sección de Contacto
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="about" className="section-shell border-t border-zinc-200 dark:border-zinc-800" style={{ '--name': '--text-s' } as any}>
        <div className="read">
          <div>Lectura: <span>Estructura Web</span></div>
        </div>
        <div className="grid items-center gap-10 md:grid-cols-2 text">
          <div>
            <SectionHeader
              title="Presentación de Concepto"
              subtitle="Aquí es donde introducimos la visión del proyecto. Esta sección permite conectar emocionalmente con su audiencia mediante una narrativa clara."
            />
            <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              El diseño combina amplios espacios en blanco con tipografía elegante para asegurar que su mensaje sea el protagonista absoluto.
            </p>
          </div>
          <div className="card p-3 dark:bg-zinc-900/50">
            <Image
              src="/profile-placeholder.svg"
              alt="Visualización de Diseño"
              width={640}
              height={800}
              className="h-auto w-full rounded-2xl"
              priority
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="projects" className="section-shell border-t border-zinc-200 dark:border-zinc-800" style={{ '--name': '--tiles-s' } as any}>
        <div className="tile-section">
          <div className="tile-container">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="tile"></div>
            ))}
          </div>
        </div>
        <SectionHeader
          title="Organización del Contenido"
          subtitle="Desglosamos la arquitectura del sitio para que pueda visualizar cómo se distribuirá la información clave."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} title={project.title} description={project.description} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="value" className="section-shell border-t border-zinc-200 dark:border-zinc-800" style={{ '--name': '--two-columns-s' } as any}>
        <div className="two-columns">
          <div className="content">
            <div className="cards">
              {values.map((item, idx) => (
                <div key={item.title} className="card" style={{ '--range-start': `${10 + idx * 30}%` } as any}>
                  <div className="inline-flex rounded-xl bg-zinc-100 p-3 text-accent dark:bg-zinc-800">{item.icon}</div>
                  <h3 className="title text-lg font-semibold dark:text-zinc-100">{item.title}</h3>
                  <p className="subtitle text-sm opacity-50">{item.title} - Detalle técnico</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="preview">
              <div className="img"></div>
            </div>
          </div>
        </div>
        <SectionHeader
          title="Pilares del Diseño"
          subtitle="Nuestra metodología se basa en tres principios fundamentales para garantizar el éxito de su presencia digital."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <ValueItem key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="social-proof" className="section-shell border-t border-zinc-200 dark:border-zinc-800">
        <SectionHeader title="Métricas y Confianza" subtitle="Espacios dedicados a validar el éxito mediante datos concretos y testimonios de valor." />
        <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card text-center">
              <dt className="text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight dark:text-zinc-100">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </AnimatedSection>

      <AnimatedSection id="contact" className="section-shell border-t border-zinc-200 dark:border-zinc-800" style={{ '--name': '--subscribe-s' } as any}>
        <div className="subscribe">
          <SectionHeader
            title="Punto de Conversión"
            subtitle="Diseñamos flujos de contacto intuitivos que facilitan la comunicación entre usted y sus clientes potenciales."
          />
          <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="email" className="sr-only">
              Correo de ejemplo
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="cliente@ejemplo.com"
              className="h-12 flex-1 rounded-full border border-zinc-300 px-5 text-sm outline-none ring-accent transition focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-white transition hover:bg-violet-700"
            >
              <span>Botón de Acción</span>
            </button>
          </form>
        </div>
      </AnimatedSection>

      <footer>
        <Link href="#hero">
          <span>Volver al inicio</span>
        </Link>
      </footer>
    </main>
  );
}
