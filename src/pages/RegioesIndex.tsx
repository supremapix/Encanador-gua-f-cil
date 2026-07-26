import React from 'react';
import { Navigation, ChevronRight } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { POPULAR_AREAS } from '../data/popularAreas';
import { COMPANY_DATA } from '../data/company';

export const RegioesIndexPage: React.FC = () => {
  const canonical = `${COMPANY_DATA.baseUrl}/regioes`;
  const breadcrumbs = [{ label: 'Vilas & Regiões Populares', href: canonical }];

  return (
    <>
      <EnhancedSEO
        title="Encanador em Vilas e Regiões Populares de Curitiba | Atendimento Local"
        description="Atendimento de encanador em vilas, loteamentos e regiões populares de Curitiba: Vila Sandra, Vila Verde, Caiuá, Vitória Régia, Neoville e mais."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={breadcrumbs} />

          {/* Header */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Navigation className="w-3.5 h-3.5" />
              <span>Vilas, Loteamentos e Subdivisões Urbanas</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
              Encanador em Vilas e Regiões Populares de Curitiba
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Além dos 75 bairros oficiais, Curitiba possui importantes denominações populares, vilas habitacionais e conjuntos residenciais como Vila Sandra, Vila Verde, Caiuá, Vitória Régia, Neoville e outros. Atendemos todas essas regiões.
            </p>
          </div>

          {/* Grid */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Vilas e Regiões Atendidas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {POPULAR_AREAS.map((p) => (
                <a
                  key={p.slug}
                  href={`/regioes/${p.slug}`}
                  className="p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-amber-50 dark:hover:bg-amber-950/40 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-amber-500 transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-600 block">
                      {p.name}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Pertencente ao bairro: {p.parentNeighborhood}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 shrink-0" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
