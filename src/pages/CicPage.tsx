import React from 'react';
import { MapPin, ShieldCheck, ChevronRight, MessageSquare, Phone, Wrench } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LiteYouTube } from '../components/LiteYouTube';
import { ContactForm } from '../components/ContactForm';
import { POPULAR_AREAS } from '../data/popularAreas';
import { COMPANY_DATA } from '../data/company';

export const CicPage: React.FC = () => {
  const canonical = `${COMPANY_DATA.baseUrl}/encanador-cic`;
  const breadcrumbs = [{ label: 'Encanador na CIC', href: canonical }];

  // Filter vilas that belong to CIC
  const cicVilas = POPULAR_AREAS.filter(p => p.parentNeighborhood.includes('Cidade Industrial'));

  return (
    <>
      <EnhancedSEO
        title="Encanador na CIC – Cidade Industrial de Curitiba | Sede na Rua das Águias"
        description="Encanador na Cidade Industrial de Curitiba (CIC). Atendimento direto da nossa sede na Rua das Águias, 320. Rapidez máxima para vazamentos e serviços hidráulicos."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={breadcrumbs} />

          {/* Hero Header for CIC */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Sede Principal da Empresa na CIC</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
              Encanador na Cidade Industrial de Curitiba – CIC
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              A Cidade Industrial de Curitiba (CIC) é o maior bairro da capital paranaense em extensão e onde fica localizada a sede física oficial da <strong className="text-slate-900 dark:text-white">Encanador Água Fácil 24H</strong>, no endereço:
            </p>

            <div className="p-5 bg-gradient-to-r from-cyan-900 to-blue-950 text-white rounded-2xl shadow-md border border-cyan-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-cyan-300 text-sm uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Endereço Oficial da Sede:</span>
              </div>
              <p className="text-base sm:text-lg font-extrabold text-white">
                Rua das Águias, 320 – Cidade Industrial de Curitiba – CIC, Curitiba – PR, CEP 81450-370
              </p>
              <p className="text-xs text-cyan-200">
                A proximidade física com todas as vilas e conjuntos da CIC garante atendimento ágil para vazamentos e manutenções hidráulicas.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={COMPANY_DATA.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow transition-all"
              >
                <Wrench className="w-4 h-4" />
                <span>Solicitar Atendimento na CIC</span>
              </a>
              <a
                href={`tel:${COMPANY_DATA.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-sm px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Ligar: {COMPANY_DATA.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Vilas of CIC */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Vilas e Conjuntos Habitacionais Atendidos na CIC
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Devido à vasta extensão territorial da Cidade Industrial de Curitiba, atendemos todas as subdivisões habitacionais e loteamentos locais com saída direta da Rua das Águias, 320:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cicVilas.map((v) => (
                <a
                  key={v.slug}
                  href={`/regioes/${v.slug}`}
                  className="p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-amber-50 dark:hover:bg-amber-950/40 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-amber-500 transition-all flex items-center justify-between group"
                >
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-600">
                      {v.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Vila / Conjunto na CIC
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600" />
                </a>
              ))}
            </div>
          </section>

          {/* Contextual Video */}
          <LiteYouTube
            contextTitle="Atendimento de Encanador na CIC Curitiba"
            contextText="Conheça a atuação da Encanador Água Fácil a partir da nossa sede na Rua das Águias, 320 – CIC."
          />

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <ContactForm defaultLocation="Cidade Industrial de Curitiba – CIC" />
          </div>
        </div>
      </main>
    </>
  );
};
