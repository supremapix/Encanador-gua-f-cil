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
        title="Desentupidora em Vilas e Regiões de Curitiba | Água Fácil"
        description="Atendimento de desentupidora em vilas e loteamentos da CIC e Curitiba: Vila Sandra, Vila Verde, Caiuá, Vitória Régia e entornos."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-[#F2F4F7] text-slate-800 font-body py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs items={breadcrumbs} />

          {/* Header */}
          <div className="bg-white border border-slate-300 rounded-md p-6 sm:p-10 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FFC107] text-[#0B2545] font-heading font-black text-xs uppercase px-3 py-1 rounded-sm shadow-xs">
              <Navigation className="w-3.5 h-3.5 text-[#0B2545]" />
              <span>VILAS, LOTEAMENTOS E CONJUNTOS</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0B2545] uppercase tracking-wide">
              Desentupidora em Vilas e Regiões de Curitiba
            </h1>
            <p className="text-slate-700 text-sm sm:text-base max-w-3xl leading-relaxed font-body">
              Atendemos todas as vilas habitacionais, conjuntos residenciais e loteamentos de Curitiba com saída técnica rápida da nossa sede na CIC.
            </p>
          </div>

          {/* Grid */}
          <section className="bg-white border border-slate-300 rounded-md p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="border-b border-slate-200 pb-2">
              <h2 className="font-heading font-black text-2xl text-[#0B2545] uppercase">
                Vilas e Regiões Atendidas
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
              {POPULAR_AREAS.map((p) => (
                <a
                  key={p.slug}
                  href={`/regioes/${p.slug}`}
                  className="p-3.5 bg-[#F2F4F7] hover:bg-white rounded-md border border-slate-300 hover:border-[#FFC107] transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="font-heading font-bold text-base text-[#0B2545] group-hover:text-[#1368AA] block uppercase">
                      {p.name}
                    </span>
                    <span className="text-xs text-slate-500 font-body">
                      Pertencente ao bairro: {p.parentNeighborhood}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1368AA] shrink-0" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
