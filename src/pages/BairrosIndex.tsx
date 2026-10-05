import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
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
        title="Desentupidora por Bairros de Curitiba | Guia de Atendimento"
        description="Atendimento de desentupidora nos bairros de Curitiba: CIC, Água Verde, Batel, Portão, Centro, Boqueirão, Sítio Cercado, Pinheirinho e mais."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-[#F2F4F7] text-slate-800 font-body py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs items={breadcrumbs} />

          {/* Header */}
          <div className="bg-white border border-slate-300 rounded-md p-6 sm:p-10 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FFC107] text-[#0B2545] font-heading font-black text-xs uppercase px-3 py-1 rounded-sm shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#0B2545]" />
              <span>COBERTURA NA CAPITAL PARANAENSE</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0B2545] uppercase tracking-wide">
              Atendimento de Desentupidora nos Bairros de Curitiba
            </h1>
            <p className="text-slate-700 text-sm sm:text-base max-w-3xl leading-relaxed font-body">
              Confira a lista dos bairros de Curitiba atendidos pela Água Fácil Desentupidora com saída técnica direta de nossa sede na CIC (Rua Luiz Maltaca, 36).
            </p>
          </div>

          {/* Filter Component */}
          <LocationSearch />

          {/* Bairros Grid */}
          <section className="bg-white border border-slate-300 rounded-md p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="border-b border-slate-200 pb-2">
              <h2 className="font-heading font-black text-2xl text-[#0B2545] uppercase">
                Bairros Atendidos na Capital
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 pt-1">
              {CURITIBA_NEIGHBORHOODS.map((b) => (
                <a
                  key={b.slug}
                  href={`/bairro/${b.slug}`}
                  className="p-3 bg-[#F2F4F7] hover:bg-white rounded-md border border-slate-300 hover:border-[#FFC107] transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="font-heading font-bold text-sm text-[#0B2545] group-hover:text-[#1368AA] block uppercase">
                      {b.name}
                    </span>
                    <span className="text-[11px] text-slate-500 font-body">
                      Curitiba – {b.region}
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
