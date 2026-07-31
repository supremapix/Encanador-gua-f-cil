import React from 'react';
import { MapPin, ChevronRight, Search } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LocationSearch } from '../components/LocationSearch';
import { CURITIBA_NEIGHBORHOODS } from '../data/curitibaNeighborhoods';
import { COMPANY_DATA } from '../data/company';

export const BairrosIndexPage: React.FC = () => {
  const canonical = `${COMPANY_DATA.baseUrl}/bairros`;
  const breadcrumbs = [{ label: 'Bairros de Curitiba', href: canonical }];

  return (
    <>
      <EnhancedSEO
        title="Encanador por Bairros de Curitiba | Guia dos 75 Bairros Oficiais"
        description="Encontre encanador em qualquer um dos 75 bairros oficiais de Curitiba: Água Verde, Batel, Portão, CIC, Centro, Boqueirão, Sítio Cercado e mais."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={breadcrumbs} />

          {/* Header */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-4">
            <div className="inline-flex items-center gap-2 bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Divisão Territorial de Curitiba</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
              Atendimento de Encanador nos 75 Bairros Oficiais de Curitiba
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Confira a lista completa e individual dos 75 bairros oficiais de Curitiba atendidos pela Encanador Água Fácil 24H com saída da nossa sede na CIC (Rua das Águias, 320).
            </p>
          </div>

          {/* Filter Component */}
          <LocationSearch />

          {/* Complete 75 Bairros Grid */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Lista Completa dos 75 Bairros
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {CURITIBA_NEIGHBORHOODS.map((b) => (
                <a
                  key={b.slug}
                  href={`/bairro/${b.slug}`}
                  className="p-3.5 bg-slate-50 dark:bg-slate-800/50 hover:bg-cyan-50 dark:hover:bg-cyan-950/60 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-cyan-600 block">
                      {b.name}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Curitiba – {b.region}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 shrink-0" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
