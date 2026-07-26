import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Navegação em migalhas (Breadcrumb)" className="bg-slate-100 dark:bg-slate-800/60 py-2.5 px-4 rounded-lg mb-6 text-sm text-slate-600 dark:text-slate-300">
      <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
        <li className="inline-flex items-center">
          <a
            href="/"
            className="inline-flex items-center gap-1 text-cyan-800 hover:text-cyan-900 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Início</span>
          </a>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="inline-flex items-center">
              <ChevronRight className="w-4 h-4 text-slate-400 mx-0.5 shrink-0" aria-hidden="true" />
              {isLast ? (
                <span className="font-semibold text-slate-900 dark:text-white line-clamp-1" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="text-cyan-800 hover:text-cyan-900 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
