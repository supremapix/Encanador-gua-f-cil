import React from 'react';
import { Building, ChevronRight } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SERVICE_CITIES } from '../data/serviceCities';
import { COMPANY_DATA } from '../data/company';

export const CidadesIndexPage: React.FC = () => {
  const canonical = `${COMPANY_DATA.baseUrl}/cidades`;
  const breadcrumbs = [{ label: 'Cidades da RMC', href: canonical }];

  return (
    <>
      <EnhancedSEO
        title="Encanador na Região Metropolitana de Curitiba | 15 Cidades Atendidas"
        description="Atendimento de encanador em São José dos Pinhais, Pinhais, Araucária, Colombo, Campo Largo, Fazenda Rio Grande e mais 10 cidades do entorno."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={breadcrumbs} />

          {/* Header */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5" />
              <span>Região Metropolitana de Curitiba</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
              Encanador em 15 Cidades da Região Metropolitana
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Prestamos serviços de encanamento, reparos hidráulicos e atendimento de urgência para municípios localizados num raio aproximado de até 100 km da nossa sede na CIC.
            </p>
          </div>

          {/* Grid */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Municípios Atendidos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {SERVICE_CITIES.map((c) => (
                <a
                  key={c.slug}
                  href={`/cidade/${c.slug}`}
                  className="p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-950/40 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 block">
                      {c.name}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Região Metropolitana de Curitiba
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
