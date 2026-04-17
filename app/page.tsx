import Image from 'next/image';
import Link from 'next/link';
import { BarChart3, Lightbulb, Mail, Rocket, Twitter, Linkedin, Github } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { ProjectCard } from '@/components/project-card';
import { SectionHeader } from '@/components/section-header';
import { ValueItem } from '@/components/value-item';

const projects = [
  {
    title: 'Creator Course Platform',
    description: 'A premium learning experience that turned a niche audience into a recurring membership community.',
  },
  {
    title: 'Newsletter Growth Sprint',
    description: 'Content and funnel strategy that doubled subscriber growth in 90 days with lightweight automation.',
  },
  {
    title: 'Digital Product Launch',
    description: 'Positioning, copy, and launch assets for a mini product that generated consistent monthly revenue.',
  },
  {
    title: 'Brand System Refresh',
    description: 'Refined visual language and messaging playbook to align content, offers, and audience expectations.',
  },
];

const values = [
  {
    title: 'Strategy that sells',
    description: 'I design offer and content systems that connect audience pain points with clear outcomes.',
    icon: <Lightbulb className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: 'Build for speed',
    description: 'I focus on practical execution so creators can test ideas quickly and ship with confidence.',
    icon: <Rocket className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: 'Measure what matters',
    description: 'I track growth signals and product metrics to improve conversion, retention, and engagement.',
    icon: <BarChart3 className="h-5 w-5" aria-hidden="true" />,
  },
];

const stats = [
  { label: 'Followers', value: '100K+' },
  { label: 'Content Views', value: '1M+' },
  { label: 'Products Launched', value: '45+' },
  { label: 'Client Satisfaction', value: '98%' },
];

export default function HomePage() {
  return (
    <main>
      <AnimatedSection id="hero" className="section-shell flex min-h-screen items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">Creator Product Strategist</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-900 md:text-7xl">
            I help creators build digital products
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            I partner with creators to shape ideas, craft premium experiences, and turn audience trust into scalable
            digital products.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              See projects
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-400"
            >
              Book a call
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="about" className="section-shell border-t border-zinc-200">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeader
              title="About"
              subtitle="I’m a product-minded creator focused on building simple systems that help people launch, grow, and monetize digital ideas without unnecessary complexity."
            />
            <p className="mt-6 text-base leading-relaxed text-zinc-600">
              Over the past few years, I’ve worked with creators, coaches, and educators to turn expertise into clean,
              high-converting products. My approach combines strategy, storytelling, and execution.
            </p>
          </div>
          <div className="card p-3">
            <Image
              src="/profile-placeholder.svg"
              alt="Portrait placeholder"
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
          title="Projects"
          subtitle="A few recent collaborations where strategy met design and execution."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} title={project.title} description={project.description} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="value" className="section-shell border-t border-zinc-200">
        <SectionHeader
          title="How I create value"
          subtitle="I help creators simplify product building so every action compounds long-term brand growth."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <ValueItem key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="social-proof" className="section-shell border-t border-zinc-200">
        <SectionHeader title="Social proof" subtitle="Trusted by a growing audience and creator-led businesses." />
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
            title="Let’s build your next digital product"
            subtitle="Get occasional insights and launch playbooks delivered to your inbox."
          />
          <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="h-12 flex-1 rounded-full border border-zinc-300 px-5 text-sm outline-none ring-accent transition focus:ring-2"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-white transition hover:bg-violet-700"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Join newsletter
            </button>
          </form>
        </div>
      </AnimatedSection>

      <footer className="border-t border-zinc-200">
        <div className="section-shell flex flex-col items-start justify-between gap-8 py-10 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold tracking-tight">Demo Personal Brand</p>
            <p className="mt-1 text-sm text-zinc-500">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <nav aria-label="Footer links" className="flex flex-wrap items-center gap-6 text-sm text-zinc-600">
            <Link href="#about" className="hover:text-zinc-900">
              About
            </Link>
            <Link href="#projects" className="hover:text-zinc-900">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-zinc-900">
              Contact
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
