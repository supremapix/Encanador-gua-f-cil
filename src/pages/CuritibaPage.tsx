import React from 'react';
import { MapPin, ShieldCheck, ChevronRight, MessageSquare } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LocationSearch } from '../components/LocationSearch';
import { LiteYouTube } from '../components/LiteYouTube';
import { ContactForm } from '../components/ContactForm';
import { CURITIBA_NEIGHBORHOODS } from '../data/curitibaNeighborhoods';
import { COMPANY_DATA } from '../data/company';

export const CuritibaPage: React.FC = () => {
  const canonical = `${COMPANY_DATA.baseUrl}/encanador-curitiba`;
  const breadcrumbs = [{ label: 'Encanador Curitiba', href: canonical }];

  return (
    <>
      <EnhancedSEO
        title="Encanador em Curitiba PR | Atendimento nos 75 Bairros"
        description="Atendimento de encanador em todos os 75 bairros oficiais de Curitiba. Diagnóstico preciso de vazamentos, troca de torneiras e registros com rapidez e transparência."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={breadcrumbs} />

          {/* Hero */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-4">
            <div className="inline-flex items-center gap-2 bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Capital Paranaense - 75 Bairros</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
              Encanador em Curitiba PR – Atendimento Especializado
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Curitiba possui mais de 1,7 milhão de habitantes distribuídos em 75 bairros oficiais. A Encanador Água Fácil 24H possui sede física na Cidade Industrial de Curitiba (CIC) na <strong className="text-slate-900 dark:text-white">Rua das Águias, 320</strong> e presta assistência técnica em encanamento em toda a capital paranaense.
            </p>

            <div className="p-4 bg-cyan-50 dark:bg-cyan-950/50 rounded-xl border border-cyan-200 dark:border-cyan-800 text-xs sm:text-sm text-cyan-900 dark:text-cyan-200 space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-600" />
                <span>Cobrimos Todos os Bairros da Capital</span>
              </p>
              <p>
                Água Verde, Batel, Portão, Centro, Boqueirão, Sítio Cercado, Santa Felicidade, Pilarzinho, Cajuru e todas as regiões de Curitiba.
              </p>
            </div>
          </div>

          {/* Location Search Filter */}
          <LocationSearch />

          {/* Contextual Video */}
          <LiteYouTube
            contextTitle="Atendimento de Encanador em Curitiba"
            contextText="Assista ao vídeo e veja como prestamos atendimento especializado para casas, condomínios e estabelecimentos comerciais em Curitiba."
          />

          {/* Neighborhoods List Grid */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Acesse a Página do seu Bairro em Curitiba
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {CURITIBA_NEIGHBORHOODS.map((b) => (
                <a
                  key={b.slug}
                  href={`/bairro/${b.slug}`}
                  className="p-3 bg-slate-50 dark:bg-slate-800/50 hover:bg-cyan-50 dark:hover:bg-cyan-950/60 rounded-xl border border-slate-200 dark:border-slate-700/80 hover:border-cyan-500 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-cyan-900 dark:hover:text-cyan-300 transition-colors flex items-center justify-between group truncate"
                >
                  <span className="truncate">{b.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-600 shrink-0" />
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
