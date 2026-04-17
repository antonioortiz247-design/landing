import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="card flex h-full flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold tracking-tight dark:text-zinc-100">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>
      <Link
        href="#"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
      >
        Ver estudio de caso
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
