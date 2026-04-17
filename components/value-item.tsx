import { ReactNode } from 'react';

export function ValueItem({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="card">
      <div className="inline-flex rounded-xl bg-zinc-100 p-3 text-accent dark:bg-zinc-800">{icon}</div>
      <h3 className="mt-4 text-lg font-semibold dark:text-zinc-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
    </article>
  );
}
