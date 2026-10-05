import React from 'react';
import { MapPin, ShieldAlert, ChevronRight } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LocationSearch } from '../components/LocationSearch';
import { LiteYouTube } from '../components/LiteYouTube';
import { ContactForm } from '../components/ContactForm';
import { CURITIBA_NEIGHBORHOODS } from '../data/curitibaNeighborhoods';
import { COMPANY_DATA } from '../data/company';

export const CuritibaPage: React.FC = () => {
  const canonical = `${COMPANY_DATA.baseUrl}/desentupidora-curitiba`;
  const breadcrumbs = [{ label: 'Desentupidora Curitiba', href: canonical }];

  return (
    <>
      <EnhancedSEO
        title="Desentupidora em Curitiba PR | Atendimento Rápido nos Bairros"
        description="Desentupidora com atendimento nos bairros de Curitiba. Desentupimento mecânico de pias, vasos, ralos, esgoto e caixa de gordura com base operacional na CIC."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-[#F2F4F7] text-slate-800 font-body py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs items={breadcrumbs} />

          {/* Hero */}
          <div className="bg-white border border-slate-300 rounded-md p-6 sm:p-10 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FFC107] text-[#0B2545] font-heading font-black text-xs uppercase px-3 py-1 rounded-sm shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#0B2545]" />
              <span>CAPITAL PARANAENSE – 75 BAIRROS</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0B2545] uppercase tracking-wide">
              Desentupidora em Curitiba PR – Atendimento Especializado
            </h1>
            <p className="text-slate-700 text-sm sm:text-base max-w-3xl leading-relaxed font-body">
              A Água Fácil Desentupidora atende a capital paranaense com saída técnica direta de nossa sede na Cidade Industrial de Curitiba (CIC) na <strong className="text-[#0B2545]">Rua Luiz Maltaca, 36</strong>. Atendimento para desentupimento de pias, vasos, ralos, esgoto e caixas de gordura.
            </p>

            <div className="p-4 bg-[#F2F4F7] rounded-md border-l-4 border-[#1368AA] border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-1">
              <p className="font-heading font-bold text-[#0B2545] flex items-center gap-1.5 uppercase">
                <ShieldAlert className="w-4 h-4 text-[#1368AA]" />
                <span>Cobertura em Todos os Bairros de Curitiba</span>
              </p>
              <p className="font-body text-slate-600">
                Água Verde, Batel, Portão, Centro, Boqueirão, Sítio Cercado, Santa Felicidade, Pilarzinho, Cajuru e todas as regiões.
              </p>
            </div>
          </div>

          {/* Location Search Filter */}
          <LocationSearch />

          {/* Contextual Video */}
          <LiteYouTube
            contextTitle="Atendimento de Desentupidora em Curitiba"
            contextText="Assista ao vídeo e entenda como nossa equipe atua com desentupimento mecânico e hidrojateamento em residências e comércios de Curitiba."
          />

          {/* Neighborhoods List Grid */}
          <section className="bg-white border border-slate-300 rounded-md p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="border-b border-slate-200 pb-2">
              <h2 className="font-heading font-black text-2xl text-[#0B2545] uppercase">
                Acesse a Página do seu Bairro em Curitiba
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 pt-1">
              {CURITIBA_NEIGHBORHOODS.map((b) => (
                <a
                  key={b.slug}
                  href={`/bairro/${b.slug}`}
                  className="p-2.5 bg-[#F2F4F7] hover:bg-white rounded-md border border-slate-300 hover:border-[#FFC107] text-xs font-bold text-[#0B2545] hover:text-[#1368AA] transition-colors flex items-center justify-between group truncate"
                >
                  <span className="truncate">{b.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1368AA] shrink-0" />
                </a>
              ))}
            </div>
          </section>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <ContactForm defaultLocation="Curitiba" />
          </div>
        </div>
      </main>
    </>
  );
};
