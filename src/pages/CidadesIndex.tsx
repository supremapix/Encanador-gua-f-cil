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
        title="Desentupidora na Região Metropolitana de Curitiba | Cidades Atendidas"
        description="Serviços de desentupidora em São José dos Pinhais, Araucária, Pinhais, Colombo, Campo Largo, Fazenda Rio Grande e municípios vizinhos."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-[#F2F4F7] text-slate-800 font-body py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs items={breadcrumbs} />

          {/* Header */}
          <div className="bg-white border border-slate-300 rounded-md p-6 sm:p-10 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FFC107] text-[#0B2545] font-heading font-black text-xs uppercase px-3 py-1 rounded-sm shadow-xs">
              <Building className="w-3.5 h-3.5 text-[#0B2545]" />
              <span>REGIÃO METROPOLITANA DE CURITIBA</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0B2545] uppercase tracking-wide">
              Desentupidora na Região Metropolitana de Curitiba
            </h1>
            <p className="text-slate-700 text-sm sm:text-base max-w-3xl leading-relaxed font-body">
              Atendimento de desentupimento de pias, vasos, ralos, esgoto e caixas de gordura para municípios vizinhos com saída técnica rápida da nossa sede na CIC Curitiba.
            </p>
          </div>

          {/* Grid */}
          <section className="bg-white border border-slate-300 rounded-md p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="border-b border-slate-200 pb-2">
              <h2 className="font-heading font-black text-2xl text-[#0B2545] uppercase">
                Municípios Atendidos na RMC
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
              {SERVICE_CITIES.map((c) => (
                <a
                  key={c.slug}
                  href={`/cidade/${c.slug}`}
                  className="p-3.5 bg-[#F2F4F7] hover:bg-white rounded-md border border-slate-300 hover:border-[#FFC107] transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="font-heading font-bold text-base text-[#0B2545] group-hover:text-[#1368AA] block uppercase">
                      {c.name}
                    </span>
                    <span className="text-xs text-slate-500 font-body">
                      Região Metropolitana de Curitiba
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
